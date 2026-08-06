import type { QuestionDefinition } from "../types";

const chapterCounts = [
  8515, 9059, 9190, 7870, 8052, 8824, 8928, 8734, 8043, 8139,
  7937, 8073, 9345, 8135, 8038, 8106, 7835, 6937, 7778, 8162,
  6769, 9404, 6599, 6640, 8410, 7489, 9152, 8150, 7940, 7708,
  8160, 7361, 8554, 9342, 9881, 9421, 8658, 9309, 8266, 9232,
  7282, 8272, 9427, 8076, 8153, 9444, 8821, 8543, 8398, 8702,
  9832, 7943, 9128, 9128, 9116, 9283, 12965, 10827, 9309, 8100,
];

const countLinesEn = chapterCounts
  .map((count, index) => `- **Chapter ${index + 1}:** ${count.toLocaleString()} characters`)
  .join("\n");
const countLinesZh = chapterCounts
  .map((count, index) => `- **第${index + 1}回：** ${count.toLocaleString()} 字`)
  .join("\n");

export const question: QuestionDefinition = {
  categoryZh: "翻译与数字人文",
  categoryEn: "Translation & Digital Humanities",
  questionEn: "How many characters are there in the entire novel Pinhua Baojian, and how many in each chapter?",
  questionZh: "《品花宝鉴》全书共有多少字？每一章各有多少字？",
  answerEn: `The current bundled Chinese corpus contains **512,894 Unicode code points**, counting punctuation and other characters after joining the paragraph strings. This is a corpus count, not a universal count for every historical edition.

${countLinesEn}`,
  answerZh: `当前项目捆绑的中文语料合计 **512,894 个 Unicode 字符**，统计时将各段落连接后计入标点及其他字符。这是本项目语料的统计值，并不代表所有历史版本都具有相同字数。

${countLinesZh}`,
};
