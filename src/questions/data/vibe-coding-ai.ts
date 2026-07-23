import type { QuestionDefinition } from "../types";

export const question: QuestionDefinition = {
  categoryZh: "翻译与数字人文",
  categoryEn: "Translation & Digital Humanities",
  questionEn:
    "What role did vibe coding AI play in this project? Provide specific examples.",
  questionZh: "vibe coding ai在这个项目中起到了哪些作用，结合具体例子说明。",
  answerEn: `Vibe coding AI played a significant role as an intelligent development assistant in this project, specifically from three key angles:

1. **Translation:** AI scripts helped manage the precise alignment of English paragraph translations with the corresponding Chinese texts, ensuring strict index matching necessary for the seamless dual-pane bilingual reading experience.
2. **Answering Research Questions:** AI tools were used to process and analyze humanistic data, such as extracting character mentions, generating bilingual scene summaries (e.g., in \`src/characterAppearances/\`), and dynamically resolving duplicate character entries using \`mergeGroups\`. This accelerated the process of answering complex research questions about character relationships and narrative structure.
3. **UI Design:** AI assisted in designing and implementing complex interactive React components, such as the dynamic D3-based Character Relationship Network graph (\`NetworkGraph.tsx\`) with responsive resizing, and the \`WorkModal\` for displaying cited literary works with context snippets, providing a highly interactive user experience.`,
  answerZh: `在这个项目中，Vibe coding AI 作为智能开发助手发挥了重要作用，具体体现在以下三个方面：

1. **翻译 (Translation)：** AI 脚本帮助管理英文段落翻译与对应中文文本的精准对齐，确保了严格的索引匹配，从而实现了流畅无缝的双语对照阅读体验。
2. **解答研究问题 (Answering Research Questions)：** AI 工具被用于处理和分析人文数据，例如提取人物出场信息、生成双语场景摘要（如 \`src/characterAppearances/\` 目录下的文件），并通过 \`mergeGroups\` 动态解决重复的人物条目。这大大加速了围绕人物关系和叙事结构等复杂数字人文研究问题的解答过程。
3. **UI 设计 (UI Design)：** AI 协助设计并实现了复杂的交互式 React 组件，例如基于 D3 的人物关系网络图（\`NetworkGraph.tsx\`，具备响应式动态缩放功能），以及用于展示引经据典及其上下文片段的 \`WorkModal\` 模态框，为用户提供了高度互动的界面体验。`,
};
