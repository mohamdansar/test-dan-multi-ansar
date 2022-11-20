import { useEffect } from 'react';

import JobList from '../components/jobs/JobList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoJobsFound from '../components/jobs/NoJobsFound';
import useHttp from '../hooks/use-http';
import { getAllJobs } from '../lib/api';

const AllJobs = () => {
  const { sendRequest, status, data: loadedJobs, error } = useHttp(
    getAllJobs,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedJobs || loadedJobs.length === 0)) {
    return <NoJobsFound />;
  }

  return <JobList jobs={loadedJobs} />;
};

export default AllJobs;
