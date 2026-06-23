import type { QuestionDefinition } from "../types";

export const question: QuestionDefinition = {
  questionEn:
    "What role did vibe coding AI play in this project? Provide specific examples.",
  questionZh: "vibe coding ai在这个项目中起到了哪些作用，结合具体例子说明。",
  answerEn: `Vibe coding AI played a significant role as an intelligent development assistant in this project, handling repetitive tasks, data processing, and complex UI implementations, while the human author directed the project and editorial intent. Specific examples include:

1. **Data Processing & Entity Extraction:** AI tools were used to extract character mentions, generate bilingual scene summaries (e.g., in \`src/characterAppearances/\`), and resolve duplicate character entries dynamically using \`mergeGroups\`.
2. **Complex UI Component Development:** AI assisted in building the interactive React components, such as the D3-based Character Relationship Network graph (\`NetworkGraph.tsx\`) complete with a \`ResizeObserver\` for dynamic resizing, and the \`WorkModal\` for displaying cited literary works with context snippets.
3. **Bilingual Text Alignment & Formatting:** AI scripts helped manage the alignment of English paragraph translations with the corresponding Chinese texts, ensuring strict index matching for the dual-pane reading experience.
4. **Automated Verification & Debugging:** AI was used to write Playwright scripts for frontend verification, fix type-checking errors, and maintain code formatting using Prettier.`,
  answerZh: `在这个项目中，Vibe coding AI 作为智能开发助手发挥了重要作用，处理了大量重复性任务、数据处理和复杂的前端界面实现，而人类作者则负责把控项目的方向和编辑意图。具体例子包括：

1. **数据处理与实体提取：** AI 工具被用于提取人物出场信息，生成双语场景摘要（如 \`src/characterAppearances/\` 目录下的文件），并通过 \`mergeGroups\` 动态解决重复的人物条目。
2. **复杂 UI 组件开发：** AI 协助构建了交互式的 React 组件，例如基于 D3 的人物关系网络图（\`NetworkGraph.tsx\`，通过 \`ResizeObserver\` 实现动态缩放），以及用于展示引经据典及其上下文片段的 \`WorkModal\` 模态框。
3. **双语文本对齐与格式化：** AI 脚本帮助管理英文段落翻译与对应中文文本的对齐，确保严格的索引匹配，从而实现流畅的双语对照阅读体验。
4. **自动化验证与调试：** AI 被用来编写自动化测试和前端验证脚本，修复类型检查错误，并使用 Prettier 维护代码格式。`,
};
