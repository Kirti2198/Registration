import React from "react";
import PropTypes from "prop-types";
import
{
    withStyles,

} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
    root: {
        borderRadius: '16px'
    },
});


function Customizedbutton(props)
{
    const { classes } = props;
    const { id, text, color, variant, ...other } = props

    return (
        <Button color={color || 'primary'} variant={variant || "contained"}
            classes={{
                root: classes.root
            }}
            {...other}>
            {text}

        </Button>
    );
}

Customizedbutton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Customizedbutton);
