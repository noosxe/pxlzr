import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import UploadButton from './components/UploadButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 20,
  },
  canvas: {
    width: '100%',
  },
  paper: {
    lineHeight: 0,
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
    const ctx = canvas.getContext('2d');

    const ratio = image.height / image.width;
    const canvasWidth = canvas.width;
    const canvasHeight = canvasWidth * ratio;

    canvas.height = canvasHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  const handleChange = (file) => {
    var img = new Image();
    img.addEventListener('load', draw);
    img.onerror = (err) => {
      console.error(err);
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Container fixed className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={3} square className={classes.paper}>
              <canvas ref={canvasEl} height={500} width={500} className={classes.canvas} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <UploadButton onChange={handleChange} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
