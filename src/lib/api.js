
export async function getAllJobs() {
  const response = await fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json`);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch jobs.');
  }

  const transformedJobs = [];

  for (const key in data) {
    const jobObj = {
      id: key,
      ...data[key],
    };

    transformedJobs.push(jobObj);
  }

  return transformedJobs;
}

export async function getJobByParams(description, location) {
  const response = await fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json${description}`);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch jobs.');
  }

  const transformedJobs = [];

  for (const key in data) {
    const jobObj = {
      id: key,
      ...data[key],
    };

    transformedJobs.push(jobObj);
  }

  return transformedJobs;
}

export async function getSingleJobs(jobId) {
  const response = await fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json`);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch jobs.');
  }

  const loadedJobs = {
    id: jobId,
    ...data,
  };

  return loadedJobs;
}



