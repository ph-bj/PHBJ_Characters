with open("src/utils.tsx", "a", encoding="utf-8") as f:
    f.write('''
export const GENERIC_HONORIFICS = new Set([
  "夫人",
  "公子",
  "先生",
  "老爷",
  "太太",
  "小姐",
  "姑娘",
  "奶奶",
  "大人",
  "将军",
  "夫君",
]);

export function sortMentionTokensByLength(tokens: string[]): string[] {
  return [...tokens].sort((a, b) => b.length - a.length);
}

export function getCharacterMentionTokens(character: Character): string[] {
  const chineseName = character.name.split(" ")[0];
  const givenName = chineseName.length > 2 ? chineseName.slice(-2) : "";
  const aliases =
    character.alias !== "—"
      ? character.alias.split(/[/\s，、]+/).filter(Boolean)
      : [];
  return sortMentionTokensByLength(
    [...new Set([chineseName, givenName, ...aliases])].filter(
      (t) => t.length >= 2 && !GENERIC_HONORIFICS.has(t),
    ),
  );
}

export function countMentionsInText(text: string, tokens: string[]): number {
  const sorted = sortMentionTokensByLength(tokens);
  let count = 0;
  let pos = 0;
  while (pos < text.length) {
    let matched = false;
    for (const token of sorted) {
      if (text.startsWith(token, pos)) {
        count++;
        pos += token.length;
        matched = true;
        break;
      }
    }
    if (!matched) pos++;
  }
  return count;
}

export function findMentionPositionsInText(text: string, tokens: string[]): number[] {
  const sorted = sortMentionTokensByLength(tokens);
  const positions: number[] = [];
  let pos = 0;
  while (pos < text.length) {
    let matched = false;
    for (const token of sorted) {
      if (text.startsWith(token, pos)) {
        positions.push(pos);
        pos += token.length;
        matched = true;
        break;
      }
    }
    if (!matched) pos++;
  }
  return positions;
}

export function getCharacterTotalMentions(character: Character): number {
  const tokens = getCharacterMentionTokens(character);
  return chapters
    .filter((ch) => ch.id >= 1)
    .reduce((total, ch) => total + countMentionsInText(ch.content, tokens), 0);
}
''')

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# remove trailing functions
content = content.split('const GENERIC_HONORIFICS')[0]
content = content.strip() + "\n"

# add getCharacterTotalMentions to App imports from utils
content = content.replace("  getCharacterMentionTokens,", "  getCharacterMentionTokens,\n  getCharacterTotalMentions,")

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)
