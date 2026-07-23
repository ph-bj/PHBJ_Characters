import type { QuestionDefinition } from "../types";

export const question: QuestionDefinition = {
  categoryZh: "翻译与数字人文",
  categoryEn: "Translation & Digital Humanities",
  questionEn:
    "When LLMs translate Pinhua Baojian, why do they tend to mistake the male actors for females? Analyze with specific paragraphs.",
  questionZh:
    "当LLMs翻译《品花宝鉴》的时候，为什么倾向于把里面的男演员误认为是女性？结合具体段落分析。",
  answerEn: `In *Pinhua Baojian*, the male actors (especially the young men playing *dan* or female roles) are frequently described using extremely feminized language. Large Language Models (LLMs) rely on statistical patterns in their training data. When they encounter vocabulary and idioms that are almost exclusively associated with women in historical texts, they default to using female pronouns ("she/her") and assuming a female identity, missing the broader context that the novel focuses on young male actors.

Analyzing specific paragraphs from Chapter 1:

### 1. Use of traditional feminine beauty idioms and comparisons
*Original Text (describing Lu Sulan):* "玉骨冰肌，锦心绣口。……俨然又一杨太真也。" (With jade-like bones and ice-pure skin... just like another Yang Taizhen [Yang Guifei].)
*Analysis:* Phrases like "jade-like bones and ice-pure skin" and direct comparisons to Yang Guifei (one of the Four Beauties of ancient China) are historically reserved for women. An LLM automatically links these features to a female subject.

### 2. Explicit feminine physical descriptions
*Original Text (describing Jin Shoufang):* "真檀口生香，素腰如柳。" (Truly sandalwood lips exhale fragrance, and a plain-silk waist like a willow.)
*Analysis:* "Sandalwood lips" and "waist like a willow" are classic tropes of female beauty in Chinese literature. Without understanding the overarching context of male actors embodying female roles, the LLM instinctively translates this using female pronouns.

### 3. Comparisons to famous historical women
*Original Text (describing Yuan Baozhu):* "正使玉环失宠，杜女无华。" (He would cause Jade Ring to lose her favored place, and the Lady Du to fade into plainness.)
*Analysis:* Claiming someone could outshine legendary beauties like Yang Guifei ("Jade Ring") strongly implies a female subject in standard literary corpora, tricking the model's predictive text generation.

### 4. Subject omission in Classical Chinese (Pro-drop)
Classical Chinese frequently omits pronouns. Because the surrounding context is saturated with feminine descriptors, when the LLM is forced to insert a subject pronoun to satisfy English grammar rules, statistical probability drives it to choose "she" over "he."

In conclusion, the author Chen Sen deliberately uses conventions of female portraiture to praise the "feminine beauty" of these male actors. This intentional subversion of gendered language breaks the conventional gender-vocabulary mappings in the LLM's training data, resulting in widespread misgendering during translation.`,
  answerZh: `在《品花宝鉴》中，男演员（特别是扮演旦角的年轻男伶）经常被用极度女性化的语言来描写。大型语言模型（LLMs）依赖于语言的统计规律，当它们遇到这些在训练数据中几乎完全与女性相关的词汇时，往往会默认使用女性代词（“她/her”）和女性身份，而忽略了小说的主角是年轻男性的背景。

结合第一回的具体段落分析：

### 1. 使用传统的女性美貌成语与比喻
*原文（描写陆素兰）：* “玉骨冰肌，锦心绣口。……俨然又一杨太真也。”
*分析：* “玉骨冰肌”以及与“杨太真”（杨贵妃）的直接对比，在古典文学中几乎专属用于女性。LLM在翻译时，会自动将这些特征与女性主体联系起来。

### 2. 直白的女性化外貌描写
*原文（描写金漱芳）：* “真檀口生香，素腰如柳。”
*分析：* “檀口”和“素腰如柳”是中国古典文学中描写女性柔美的经典意象。如果LLM没有把握住这些是扮演旦角的男性的整体语境，它会本能地翻译成“she”和“her”（例如，“Her lips exhale fragrance...”）。

### 3. 与历史著名女性的对比
*原文（描写袁宝珠）：* “正使玉环失宠，杜女无华。”
*分析：* 说这个人能让“玉环（杨贵妃）失宠，杜女（杜秋娘等美人）无光”，在标准的语料库中，这强烈暗示被描写者是一名女性。

### 4. 文言文的主语省略（Pro-drop）
古典中文经常省略代词。由于上下文充满了女性化的描述，当LLM必须在英文中强行插入一个主语代词以符合英语语法时，统计概率会驱使它选择“she”而不是“he”。

综上所述，作者陈森刻意用描写女性的笔法来赞美这些男伶的“阴柔之美”，这打破了LLM训练数据中常规的性别词汇映射，从而导致了翻译时的性别误判。`,
};
