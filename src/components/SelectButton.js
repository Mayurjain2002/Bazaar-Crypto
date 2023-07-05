import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
<<<<<<< HEAD
      border: "1px solid gold",
=======
      border: "1px solid #37B9F1",
>>>>>>> db10244660858a9cf4e4eec1a0b91362fd3d53b2
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
<<<<<<< HEAD
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
=======
      backgroundColor: selected ? "#37B9F1" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#37B9F1",
>>>>>>> db10244660858a9cf4e4eec1a0b91362fd3d53b2
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
