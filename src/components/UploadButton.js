import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

function UploadButton({ onChange = () => {} }) {
  const classes = useStyles();
  const fileInputEl = React.useRef(null);

  const handleChange = React.useCallback(() => {
    const fileInput = fileInputEl.current;

    if (fileInput === null) {
      return;
    }

    const files = fileInput.files;

    if (!files || files.length === 0) {
      return;
    }

    onChange(files[0]);
  }, [onChange]);

  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="file-upload-button"
        multiple
        type="file"
        ref={fileInputEl}
        onInput={handleChange}
      />
      <label htmlFor="file-upload-button">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </>
  );
}

export default UploadButton;
