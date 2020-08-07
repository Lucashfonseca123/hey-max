interface IStages {
  id: number;
  type: string;
  alternative: string[];
  answerCorrect: string;
}

export interface IMenuState {
  menus: IMenu[];
}

export interface IMenu {
  id: number;
  name: string;
  image: string;
  stage: IStages[];
}
