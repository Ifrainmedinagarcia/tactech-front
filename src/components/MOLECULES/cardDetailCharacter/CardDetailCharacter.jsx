import { Div, Img } from "./style";
import Typography from "@material-ui/core/Typography";

const CardDetailCharacter = ({ character }) => {
  return (
    <>
      <Typography align="center" variant="h2" color="initial">
        {character.name}
      </Typography>
      <Div>
        <Img src={character.image} alt="" />
      </Div>
    </>
  );
};

export default CardDetailCharacter;
