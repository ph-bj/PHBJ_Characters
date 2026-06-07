export interface Character {
  id: string;
  name: string;
  alias: string;
  age: string;
  origin: string;
  originZh: string;
  role: string;
  roleZh: string;
  chapter: string;
  chapterNum: number;
  description: string;
  descriptionZh: string;
  gender: string;
  genderZh: string;
}

export interface Relationship {
  source: string; // Character ID
  target: string; // Character ID
  type: string;   // Relationship type (e.g., 'romantic', 'family', 'friend')
  typeZh: string;
}

export interface Chapter {
  id: number;
  title: string;
  content: string;
}
