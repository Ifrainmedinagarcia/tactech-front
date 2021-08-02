import { Grid, TextField } from "@material-ui/core";
import CardCharacter from "../../MOLECULES/cardCharacter/CardCharacter";
import { makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../../redux/store";
import { getAllCharacters } from "../../../redux/actionsCreators";
store.dispatch(getAllCharacters());
const useStyle = makeStyles({
  input: {
    background: "#ffffff",
    borderRadius: 5,
    width: "100%",
    marginBottom: 20,
  },
});

const INITIAL_OFFSET = 0;

const GridCharacters = ({ characters, getAllCharacters }) => {
  const classes = useStyle();
  const [characterState, setCharacterState] = useState([]);
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  useEffect(() => {
    setCharacterState(characters.rows);
  }, [characters.rows]);

  useEffect(() => {
    getAllCharacters(offset);
  }, [offset, getAllCharacters]);

  const filterCharacter = (e) => {
    const valueInput = e.target.value.toLowerCase();
    const filtrar = characterState.filter(
      (ch) => ch.name.toLowerCase().indexOf(valueInput) > -1
    );
    if (valueInput === "") {
      return setCharacterState(characters.rows);
    }
    setCharacterState(filtrar);
  };

  const handlePagination = () => {
    setOffset(offset + 1);
    getAllCharacters(offset);
  };

  const handlePaginationPrev = () => {
    setOffset(offset - 1);
    getAllCharacters(offset);
  };
  return (
    <>
      <TextField
        margin="dense"
        size="medium"
        className={classes.input}
        id="outlined-basic"
        label="Filter"
        variant="filled"
        onChange={filterCharacter}
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {characterState !== undefined
          ? characterState.map((ch) => (
              <Grid key={ch.id} item xs={12} md={4}>
                <CardCharacter
                  name={ch.name}
                  id={ch.id}
                  photo={ch.image}
                  rank={ch.rank}
                />
              </Grid>
            ))
          : ""}
        <Grid item xs={12} md={4}>
          <Button
            onClick={handlePaginationPrev}
            variant="contained"
            color="default"
          >
            Prev Pages
          </Button>
          <Button
            onClick={handlePagination}
            variant="contained"
            color="default"
          >
            Next Pages
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  characters: state.getCharacterReducer.characters,
});
const mapDispatchToProps = (dispatch) => ({
  getAllCharacters(offset) {
    dispatch(getAllCharacters(offset));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GridCharacters);
