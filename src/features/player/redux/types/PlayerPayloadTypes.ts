export interface IStages {
  id: number;
  picture: string;
  alternative: string[];
  answerCorrect: string;
}

export interface IMenuStages {
  id: number;
  name: string;
  image: string;
  stage: IStages[];
}
