import os
import re
import sys
import subprocess

# Ensure NLTK is installed
try:
    import nltk
    from nltk.tokenize import sent_tokenize
except ImportError:
    print("NLTK not found. Installing nltk...")
    subprocess.run([sys.executable, "-m", "pip", "install", "nltk"], check=True)
    import nltk
    from nltk.tokenize import sent_tokenize

# Ensure punkt models are downloaded
for model in ['punkt', 'punkt_tab']:
    try:
        nltk.data.find(f'tokenizers/{model}')
    except LookupError:
        print(f"Downloading NLTK model {model}...")
        nltk.download(model, quiet=True)

def run_generate_txt():
    print("Running generate-chapter-txt.mjs to ensure English translations are up to date...")
    try:
        subprocess.run(["node", "scripts/generate-chapter-txt.mjs"], check=True)
    except Exception as e:
        print(f"Warning: could not run generate-chapter-txt.mjs: {e}")

def split_segment_by_commas(seg):
    comma_triggers = [
        'and', 'but', 'or', 'yet', 'so', 'nor', 'for',
        'when', 'while', 'since', 'because', 'if', 'although', 'though', 'as', 'with', 'without',
        'who', 'which', 'where', 'whom', 'whose', 'that',
        'he', 'she', 'they', 'it', 'we', 'i', 'you',
        'fearing', 'noticing', 'knowing', 'seeing', 'having', 'leaving', 'singing', 'dancing',
        'hearing', 'reading', 'finding', 'thinking', 'wishing', 'saying', 'asking', 'replying'
    ]
    
    candidates = []
    for m in re.finditer(r',\s+', seg):
        start_idx = m.start()
        end_idx = m.end()
        
        rest = seg[end_idx:]
        next_word_match = re.match(r'^(\w+)\b', rest)
        if next_word_match:
            next_word = next_word_match.group(1).lower()
            is_ing_word = next_word.endswith('ing') and next_word != 'feeling'
            if next_word in comma_triggers or is_ing_word:
                candidates.append((start_idx, end_idx))
                
    if not candidates:
        return [seg]
        
    split_indices = []
    last_split_idx = 0
    
    for comma_idx, space_idx in candidates:
        left_text = seg[last_split_idx:comma_idx]
        right_text = seg[space_idx:]
        
        left_words = len(left_text.split())
        right_words = len(right_text.split())
        
        if left_words >= 4 and right_words >= 4:
            split_indices.append(comma_idx + 1)
            last_split_idx = space_idx
            
    parts = []
    start = 0
    for idx in split_indices:
        parts.append(seg[start:idx].strip())
        start = idx
    parts.append(seg[start:].strip())
    
    return [p for p in parts if p]

def split_long_segment(seg):
    words = seg.split()
    if len(words) <= 16:
        return [seg]
        
    mid = len(words) // 2
    best_idx = -1
    best_score = -1
    
    connectors = {
        'and': 3, 'but': 3, 'or': 3, 'yet': 3, 'so': 3,
        'because': 2, 'although': 2, 'though': 2, 'while': 2, 'when': 2, 'if': 2, 'since': 2,
        'that': 2, 'to': 2, 'with': 2, 'without': 2,
        'in': 1, 'on': 1, 'at': 1, 'by': 1, 'of': 1, 'for': 1, 'from': 1, 'about': 1
    }
    
    for i in range(4, len(words) - 4):
        word = words[i].lower()
        clean_word = re.sub(r'[^\w]', '', word)
        
        dist_to_mid = abs(i - mid)
        weight = connectors.get(clean_word, 0)
        if word.endswith(','):
            weight = 4
            
        if weight > 0:
            score = weight - 0.2 * dist_to_mid
            if score > best_score:
                best_score = score
                best_idx = i
                
    if best_idx != -1:
        if words[best_idx].endswith(','):
            part1 = ' '.join(words[:best_idx+1])
            part2 = ' '.join(words[best_idx+1:])
        else:
            part1 = ' '.join(words[:best_idx])
            part2 = ' '.join(words[best_idx:])
    else:
        part1 = ' '.join(words[:mid])
        part2 = ' '.join(words[mid:])
        
    return split_long_segment(part1) + split_long_segment(part2)

def segment_sentence(sentence):
    sentence = re.sub(r'\s+', ' ', sentence).strip()
    if not sentence:
        return []
    
    # Step 1: Split on major punctuation (keeping punctuation with preceding segment)
    s = re.sub(r';\s+', ';\n', sentence)
    s = re.sub(r':\s+', ':\n', s)
    s = re.sub(r'\s*(—|--)\s*', '\\1\n', s)
    
    segments = [seg.strip() for seg in s.split('\n') if seg.strip()]
    
    # Step 2: Split on commas followed by clause triggers
    final_segments = []
    for seg in segments:
        final_segments.extend(split_segment_by_commas(seg))
        
    # Step 3: Split on long conjunctions or to-infinitives without commas
    refined_segments = []
    for seg in final_segments:
        words = seg.split()
        if len(words) <= 10:
            refined_segments.append(seg)
            continue
            
        split_idx = -1
        for i in range(4, len(words) - 4):
            word = words[i].lower()
            if word in ['and', 'but', 'because', 'although', 'though', 'while', 'when', 'if', 'that']:
                if word == 'while' and i > 0 and words[i-1].lower() == 'a':
                    continue
                split_idx = i
                break
            elif word == 'to' and i < len(words) - 1:
                next_word = words[i+1].lower()
                if next_word not in ['the', 'a', 'an', 'this', 'that', 'his', 'her', 'their', 'my', 'your', 'its', 'some', 'any']:
                    split_idx = i
                    break
                    
        if split_idx != -1:
            part1 = ' '.join(words[:split_idx])
            part2 = ' '.join(words[split_idx:])
            refined_segments.append(part1)
            refined_segments.append(part2)
        else:
            refined_segments.append(seg)
            
    # Step 4: Ensure no line exceeds 16 words
    final_output = []
    for seg in refined_segments:
        final_output.extend(split_long_segment(seg))
        
    return final_output

def process_file(in_path, out_path, is_preface=False):
    if not os.path.exists(in_path):
        print(f"Warning: source file {in_path} does not exist.")
        return
        
    with open(in_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    if not lines:
        return
        
    # First line contains the title
    title_line = lines[0].strip()
    rest_text = "".join(lines[1:])
    
    # Format the header
    header_lines = []
    header_lines.append("Precious Mirror for Grading Flowers")
    
    if is_preface:
        header_lines.append("Preface")
    else:
        # Match e.g., "Chapter 1 — Shi Nanxiang compiles..."
        match = re.match(r'Chapter\s+(\d+)\s*—\s*(.*)', title_line, re.IGNORECASE)
        if match:
            ch_num = match.group(1)
            ch_title = match.group(2).strip()
            header_lines.append(f"Chapter {ch_num}")
            
            # Format title with asterisks, split by semicolon if present
            if ';' in ch_title:
                parts = ch_title.split(';', 1)
                header_lines.append(f"**{parts[0].strip()};")
                header_lines.append(f"{parts[1].strip()}**")
            else:
                header_lines.append(f"**{ch_title}**")
        else:
            # Fallback if title format is unexpected
            header_lines.append(title_line)
            
    paragraphs = [p.strip() for p in rest_text.split('\n\n') if p.strip()]
    
    content_lines = []
    for para in paragraphs:
        sentences = sent_tokenize(para)
        for sentence in sentences:
            segments = segment_sentence(sentence)
            for seg in segments:
                content_lines.append(seg)
                
    all_output_lines = header_lines + content_lines
    output_content = "\n".join(all_output_lines) + "\n"
    
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(output_content)
    print(f"Successfully wrote {out_path}")

def main():
    run_generate_txt()
    
    src_dir = "public/downloads/english"
    dest_dir = "En-prompts"
    
    # Process Preface
    preface_src = os.path.join(src_dir, "00-preface.txt")
    preface_dest = os.path.join(dest_dir, "chapter-00-prompts.txt")
    process_file(preface_src, preface_dest, is_preface=True)
    
    # Process Chapters 1 to 60
    for i in range(1, 61):
        filename = f"{i:02}.txt"
        ch_src = os.path.join(src_dir, filename)
        ch_dest = os.path.join(dest_dir, f"chapter-{i:02}-prompts.txt")
        process_file(ch_src, ch_dest, is_preface=False)

if __name__ == "__main__":
    main()
