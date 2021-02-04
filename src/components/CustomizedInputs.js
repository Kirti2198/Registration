import React from "react";
import PropTypes from "prop-types";
import
{
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    borderRadius: '50px 50px 0 0'
  },
});


function CustomizedInputs(props)
{
  const { classes } = props;
  const { id, text, color, defaultValue, width, type, variant, ...other } = props

  return (
    <TextField
      id={id}
      placeholder={text || ''}
      type={type || 'text'}
      variant={variant || "outlined"}
      fullWidth
      classes={{
        root: classes.root
      }}
      {...other}

    />
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
