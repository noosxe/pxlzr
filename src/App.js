import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/header";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const fileInputEl = React.useRef(null);
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

  const handleChange = () => {
    const fileInput = fileInputEl.current;

    if (fileInput === null) {
      return;
    }

    const files = fileInput.files;

    if (!files || files.length === 0) {
      return;
    }

    var img = new Image();
    img.addEventListener("load", draw);
    img.onerror = (err) => {
      console.error(err);
    };
    img.src = URL.createObjectURL(files[0]);
  };

  return (
    <div className={classes.root}>
      <Header />
      <input
        type="file"
        accept="image/*"
        ref={fileInputEl}
        onInput={handleChange}
      />
      <canvas ref={canvasEl} />
    </div>
  );
}

export default App;
