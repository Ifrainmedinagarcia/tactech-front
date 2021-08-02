import CardDetailCharacter from "../../MOLECULES/cardDetailCharacter/CardDetailCharacter";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
/* import { useEffect } from "react"; */
import ListDetails from "../../ATOMS/lisDetails/ListDetails";

const GridCharacterDetails = ({ characters }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <CardDetailCharacter character={characters} />
      </Grid>
      <Grid item>
        <ListDetails
          name={characters.name}
          house={characters.house}
          rank={characters.rank}
          slug={characters.slug}
          titles={characters.titles}
          xs={12}
          md={6}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  characters: state.getCharacterReducerById.characters,
});
export default connect(mapStateToProps, null)(GridCharacterDetails);
