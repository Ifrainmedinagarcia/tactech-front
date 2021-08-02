import { Li, Ul } from "./style";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyle = makeStyles({
  button: {
    position: "relative",
    top: "250px",
    left: 80,
    width: 200,
  },
});

const ListDetails = ({ slug, titles, rank, house }) => {
  let history = useHistory();
  const classes = useStyle();
  const gotToBack = () => {
    history.push("/characters");
  };
  return (
    <>
      <Ul>
        <Li>Slug: {slug}</Li>
        <Li>Title: {titles}</Li>
        <Li>Rank: {rank}</Li>
        <Li>House: {house}</Li>
      </Ul>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="default"
        onClick={() => gotToBack()}
      >
        Back
      </Button>
    </>
  );
};

export default ListDetails;
