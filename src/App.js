import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import VisibleHubContainer from './containers/hub/VIsibleHubContainer';
const json = require('../config/config.json');

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xxl>
          <VisibleHubContainer></VisibleHubContainer>
          {json.title}
        </Grid>

      </Grid>
    </React.Fragment>)
}

export default App;