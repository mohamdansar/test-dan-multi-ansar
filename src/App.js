import { Route, Switch, Redirect } from 'react-router-dom';

import AllJobs from './pages/AllJobs';
import JobDetail from './pages/JobDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/recruitment' />
        </Route>
        <Route path='/recruitment' exact>
          <AllJobs />
        </Route>
        <Route path='/recruitment/:jobId'>
          <JobDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
