import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = 0
for i, line in enumerate(lines):
    if line.startswith("const worksData: Record<"):
        start_idx = i
        break

end_idx = 0
for i in range(start_idx, len(lines)):
    if line.startswith("import { LanguageSwitch }"):
        end_idx = i
        break
    if "import { LanguageSwitch }" in lines[i]:
        end_idx = i
        break

utils_lines = lines[start_idx:end_idx]

for i, line in enumerate(utils_lines):
    if re.match(r'^(const|let|var|function|type|interface)\s', line):
        utils_lines[i] = "export " + line

# Add necessary imports for utils.tsx
imports = "".join(lines[:start_idx])
utils_content = imports + "\n" + "".join(utils_lines)

with open("src/utils.tsx", "w", encoding="utf-8") as f:
    f.write(utils_content)

# We need to export NovelLocationWithChapters from locations or add it to types?
# It's in utils_lines as `type NovelLocationWithChapters`. We exported it.

# In App.tsx, we will replace utils_lines with imports from utils.tsx
names_to_import = []
for line in utils_lines:
    m = re.match(r'^export\s+(?:const|let|var|function|type|interface)\s+([A-Za-z0-9_]+)', line)
    if m:
        names_to_import.append(m.group(1))

app_content = "".join(lines[:start_idx]) + "import { " + ", ".join(names_to_import) + ' } from "./utils";\n' + "".join(lines[end_idx:])

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(app_content)
