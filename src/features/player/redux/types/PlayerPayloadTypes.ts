export interface IStages {
  id: number;
  picture: string;
  alternative: string[];
  answerCorrect: string;
  finished: boolean;
}

export interface IMenuStages {
  id: number;
  name: string;
  image: string;
  stage: IStages[];
}

export interface IGetStage {
  idMenu: number;
  stage: IStages;
}

export interface ISendAnswer {
  idMenu: number;
  stageId: number;
  response: string;
}

export interface INextStage {
  idMenu: number;
  idStage: number;
}

export interface IResetStage {
  idMenu: number;
}
