import axios from "axios";
import { GET_CHARACTERS, POST_CHARACTERS, GET_CHARACTERS_ID } from "./actions";

export const postCharacter = () => (dispatch) => {
  axios
    .post("http://localhost:3001/v1/api/character")
    .then((res) => {
      return dispatch({
        type: POST_CHARACTERS,
        characters: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllCharacters =
  (offset = 0, limit = 9) =>
  (dispatch) => {
    axios
      .get(`http://localhost:3001/v1/api/character/${limit}/${offset * limit}`)
      .then((res) => {
        return dispatch({
          type: GET_CHARACTERS,
          characters: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
export const getAllCharactersById = (id) => async (dispatch) => {
  await axios
    .get(`http://localhost:3001/v1/api/character/${id}`)
    .then((res) => {
      return dispatch({
        type: GET_CHARACTERS_ID,
        characters: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
