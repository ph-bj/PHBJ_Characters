import re
import os

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Find the start of utils
idx_start = content.find("const ROLE_ORDER = [")
# Find the end of utils (start of components)
idx_end = content.find("function LanguageSwitch({")

if idx_start == -1 or idx_end == -1:
    print("Could not find boundaries.")
    exit(1)

imports_block = content[:idx_start]
utils_block = content[idx_start:idx_end]
components_block = content[idx_end:]

# We need to export all top-level declarations in utils_block
lines = utils_block.splitlines()
for i, line in enumerate(lines):
    if re.match(r'^(const|let|var|function|type|interface)\s', line):
        lines[i] = "export " + line

utils_content = imports_block + "\n".join(lines) + "\n"

with open("src/utils.tsx", "w", encoding="utf-8") as f:
    f.write(utils_content)

# We need to reconstruct App.tsx. It just needs the imports and components_block
names_to_import = []
for line in lines:
    m = re.match(r'^export\s+(?:const|let|var|function|type|interface)\s+([A-Za-z0-9_]+)', line)
    if m:
        names_to_import.append(m.group(1))

# It also needs the react imports, etc.
app_content = imports_block + "\nimport { " + ", ".join(names_to_import) + ' } from "./utils";\n\n' + components_block

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(app_content)
