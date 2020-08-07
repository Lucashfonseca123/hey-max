import {IPlayerState} from '../types/PlayerStateTypes';
import {PlayerActions} from '../types/PlayerActionTypes';
import {IPlayerBaseActions} from '../action/playerActions';
import obj from '../../../../rules/rules.json';

const initialState: IPlayerState = {
  id: 0,
  type: obj.menus[0].stage[0].type,
  alternatives: obj.menus[0].stage[0].alternative,
  done: false,
  answered: '',
  answer: '',
};

export default function (state = initialState, action: IPlayerBaseActions) {
  const {type, payload} = action;
  switch (type) {
    case PlayerActions.GET_INFOS: {
      const {id, progress} = payload;
      let newState = {
        id: progress,
        type: obj.menus[id].stage[progress].type,
        alternatives: obj.menus[id].stage[progress].alternative,
        done: false
      };
      return newState;
    }

    case PlayerActions.SET_ANSWER: {
      const {answer, id, progress} = payload;

      if (
        obj.menus[id].stage.length - 1 === progress &&
        answer === obj.menus[id].stage[progress].answerCorrect
      ) {
        return Object.assign({}, state, {done: true});
      } else {
        if (answer === obj.menus[id].stage[progress].answerCorrect) {
          let newState = {
            id: obj.menus[id].stage[progress].id + 1,
            type: obj.menus[id].stage[progress].type,
            alternatives: obj.menus[id].stage[progress].alternative,
            answer: obj.menus[id].stage[progress].answerCorrect,
            answered: true,
            done: false
          };
          return Object.assign({}, state, newState);
        } else {
          return Object.assign({}, state, {answered: false});
        }
      }
    }

    case PlayerActions.SET_INITIAL_ANSWER: {
      return Object.assign({}, state, {answered: undefined});
    }

    case PlayerActions.SET_INITAL_STATE_PLAYER: {
      const {id} = payload;
      let newState = {
        id: 0,
        type: obj.menus[id].stage[0].type,
        alternatives: obj.menus[id].stage[0].alternative,
        answer: obj.menus[id].stage[0].answerCorrect,
        answered: undefined,
        done: false
      };

      return Object.assign({}, state, newState);
    }

    case PlayerActions.RESET_DONE: {
      return Object.assign({}, state, {done: false});
    }

    default: {
      return state;
    }
  }
}
