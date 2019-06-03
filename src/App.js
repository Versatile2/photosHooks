import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import VisibleHubContainer from './containers/hub/VIsibleHubContainer';
import useDataApi from './hooks/hub/hubAction';
import composeQuery from './utils/urlUtil';
import urls from './assets/url';

const App = () => {
  const [{ data, isLoading, isError }] = useDataApi(
    composeQuery(urls.configFile),
    {},
  );

  const renderContent = () => {
    return (<Grid item xxl>
      <VisibleHubContainer data={data}></VisibleHubContainer>
    </Grid>)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {!isLoading && !isError && data && renderContent()}
      </Grid>
    </React.Fragment>)
}

export default App;