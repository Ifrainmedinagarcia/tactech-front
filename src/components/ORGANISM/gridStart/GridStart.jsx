import { Grid, Button } from "@material-ui/core";
import LogoGOT from "../../ATOMS/logo/Logo";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getAllCharacters,
  postCharacter,
} from "../../../redux/actionsCreators";
import { useEffect } from "react";
import store from "../../../redux/store";
import { useState } from "react";

const GridStart = ({ postCharacter, characters, charactersAll }) => {
  useEffect(() => {
    store.dispatch(getAllCharacters());
  }, []);

  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const createCharacters = () => {
    if (charactersAll.length !== 0) {
      return history.push("/characters");
    } else {
      postCharacter();
      setLoading(true);
    }
  };
  useEffect(() => {
    if (characters.length > 0) {
      history.push("/characters");
      setLoading(false);
    }
  }, [characters, history]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <LogoGOT />
      </Grid>
      <Grid item>
        <Button
          disabled={loading ? true : false}
          onClick={createCharacters}
          size="large"
          variant="contained"
        >
          {loading ? "cargando" : "start"}
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  characters: state.postcharacterReducer.characters,
  charactersAll: state.getCharacterReducer.characters.rows,
});

const mapDispatchToProps = (dispatch) => ({
  postCharacter() {
    dispatch(postCharacter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GridStart);
