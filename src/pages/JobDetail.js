import { Fragment, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';

import HighlightedJob from '../components/jobs/HighlightedJob';
import useHttp from '../hooks/use-http';
import { getSingleJobs } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const JobDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { jobId } = params;

  const { sendRequest, status, data: loadedJobs, error } = useHttp(
    getSingleJobs,
    true
  );

  useEffect(() => {
    sendRequest(jobId);
  }, [sendRequest, jobId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedJobs.text) {
    return <p>No Job found!</p>;
  }

  return (
    <Fragment>
      <HighlightedJob text={loadedJobs.text} author={loadedJobs.author} />
      <Route path={match.path} exact>
        <div className='centered'>
        </div>
      </Route>
    </Fragment>
  );
};

export default JobDetail;
