interface IStages {
  id: number;
  type: string;
  alternative: string[];
  answerCorrect: string;
}

export interface IMenuStages {
  id: number;
  name: string;
  image: string;
  stage: IStages[];
}
