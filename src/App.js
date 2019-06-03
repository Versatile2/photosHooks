import React from 'react';
import VisibleHubContainer from './containers/hub/VIsibleHubContainer';
import VisibleNewsContainer from './containers/news/VisbileNewsContainer';

import useDataApi from './hooks/hub/hubAction';
import composeQuery from './utils/urlUtil';
import urls from './assets/url';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  const [{ data, isLoading, isError }] = useDataApi(
    composeQuery(urls.configFile),
    {},
  );

  const renderContent = () => {
    return (
    <Router>
      <div>
        <Route exact path="/" component={(props) => <VisibleHubContainer {...props} data={JSON.parse(data.files.photoHooksConfig.content)}/>}/>
        <Route path="/news" component={VisibleNewsContainer}/>
        </div>
  </Router>
    )
  }

  return (
    <React.Fragment>
        {!isLoading && !isError && data !== undefined && data.files !== undefined  && renderContent()}
    </React.Fragment>)
}

export default App;