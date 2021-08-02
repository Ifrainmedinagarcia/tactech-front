import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllCharactersById } from "../../../redux/actionsCreators";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 440,
  },
});

const CardCharacter = ({ name, photo, rank, id, getAllCharactersById }) => {
  const classes = useStyles();
  let history = useHistory();

  const gotToDetails = (id) => {
    getAllCharactersById(id);
    history.push(`/character/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo}
          component="img"
          title={name}
          height="140"
        />
        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            Rank: {rank}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => gotToDetails(id)} size="small" color="primary">
          Show more
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllCharactersById(id) {
    dispatch(getAllCharactersById(id));
  },
});

export default connect(null, mapDispatchToProps)(CardCharacter);
