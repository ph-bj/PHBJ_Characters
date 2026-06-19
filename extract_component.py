import re
import sys

def extract_component(file_path, component_name, output_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    start_match = re.search(r"function " + component_name + r"\s*\(", content)
    if not start_match:
        print(f"Component {component_name} not found.")
        return False

    start_index = start_match.start()

    brace_count = 0
    paren_count = 0
    in_string = False
    string_char = ''
    i = start_index

    while i < len(content) and content[i] != '(':
        i += 1

    paren_count = 1
    i += 1

    while paren_count > 0 and i < len(content):
        c = content[i]
        if in_string:
            if c == string_char and content[i-1] != '\\':
                in_string = False
        else:
            if c in "'\"`":
                in_string = True
                string_char = c
            elif c == '(':
                paren_count += 1
            elif c == ')':
                paren_count -= 1
        i += 1

    while i < len(content) and content[i] != '{':
        i += 1

    if i >= len(content):
        print("Function body brace not found.")
        return False

    brace_count = 1
    brace_start = i
    i += 1

    while brace_count > 0 and i < len(content):
        c = content[i]
        if in_string:
            if c == string_char and content[i-1] != '\\':
                in_string = False
        else:
            if c in "'\"`":
                in_string = True
                string_char = c
            elif c == '{':
                brace_count += 1
            elif c == '}':
                brace_count -= 1
        i += 1

    end_index = i

    component_code = content[start_index:end_index]

    new_app_content = content[:start_index] + content[end_index:]

    # Insert import
    app_match = re.search(r"export default function App", new_app_content)
    if app_match:
        insert_pos = app_match.start()
        new_app_content = new_app_content[:insert_pos] + f'import {{ {component_name} }} from "./components/{component_name}";\n' + new_app_content[insert_pos:]
    else:
        new_app_content = f'import {{ {component_name} }} from "./components/{component_name}";\n' + new_app_content

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_app_content)

    component_code = component_code.replace(f"function {component_name}", f"export function {component_name}")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(component_code + "\n")

    return True

if __name__ == "__main__":
    comp = sys.argv[1]
    extract_component("src/App.tsx", comp, f"src/components/{comp}.tsx")
