import { POST_CHARACTERS, GET_CHARACTERS, GET_CHARACTERS_ID } from "./actions";

let initialvalue = {
  characters: [],
};

let initialValueGet = {
  characters: [],
};

let initialValueById = {
  characters: [],
};

export const postcharacterReducer = (state = initialvalue, action) => {
  switch (action.type) {
    case POST_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
      };
    default:
      return state;
  }
};

export const getCharacterReducer = (state = initialValueGet, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
      };
    default:
      return state;
  }
};

export const getCharacterReducerById = (state = initialValueById, action) => {
  switch (action.type) {
    case GET_CHARACTERS_ID:
      return {
        characters: action.characters,
      };
    default:
      return state;
  }
};
