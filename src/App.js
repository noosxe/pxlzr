import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import UploadButton from "./components/UploadButton";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const canvasEl = React.useRef(null);

  const draw = (event) => {
    const { path } = event;

    if (!path || path.length === 0) {
      return;
    }

    const canvas = canvasEl.current;

    if (canvas === null) {
      return;
    }

    const image = path[0];
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
  };

  const handleChange = (file) => {
    var img = new Image();
    img.addEventListener("load", draw);
    img.onerror = (err) => {
      console.error(err);
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div className={classes.root}>
      <Header />
      <UploadButton onChange={handleChange} />
      <canvas ref={canvasEl} />
    </div>
  );
}

export default App;
