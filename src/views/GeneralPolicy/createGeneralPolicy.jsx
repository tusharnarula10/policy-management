import React from "react";
import { Grid, Paper } from "@material-ui/core";

class createGeneralPolicy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper></Paper>
            </Grid>
        </Grid>
      </>
    );
  }
}

export default createGeneralPolicy;
