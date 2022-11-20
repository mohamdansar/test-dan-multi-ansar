import { Fragment, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "../UI/Card";

import JobItem from "./JobItem";
import classes from "./JobList.module.css";
// import QuoteForm from "./QuoteForm";
// import { getJobByParams } from '../lib/api';
import { getJobByParams } from '../../lib/api';

const sortJobs = (jobs, ascending) => {
  console.log(jobs);
  return jobs.sort((jobA, jobB) => {
    if (ascending) {
      return jobA.id > jobB.id ? 1 : -1;
    } else {
      return jobA.id < jobB.id ? 1 : -1;
    }
  });
};

const JobList = (props) => {

  console.log(getJobByParams);
  // const {
  //   sendRequest,
  //   status,
  //   data: loadedJobs,
  //   error,
  // } = useHttp(getSingleJob, true);

  // useEffect(() => {
  //   sendRequest(jobId);
  // }, [sendRequest, jobId]);
  const [showClass, setShowClass] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState(useSearchParams.get('description'));
  console.log(props);
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const collectedJobs = sortJobs(props.jobs, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  const jobDescInputRef = useRef();
  const locationInputRef = useRef();
  const loadingRef = useRef();
  console.log(loadingRef);

  const SearchJob = () => {
    console.log("tes");
  };

  let page = 1;

  const getPosts = async () => {
    const res = await fetch(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page}`
    );

    console.log(res);

    const data = await res.json();

    return data;
  };

  const showLoading = () => {
    setShowClass(true);

    setTimeout(() => {
      setShowClass(true);

      setTimeout(() => {
        page++;
        getPosts();
      }, 300);
    }, 1000);
  };

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollTop);
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      showLoading();
    }
  });

  return (
    <Fragment>
      <form>
        <div className={classes.control}>
          <label htmlFor="jobDesc">Job Description</label>
          <input
            type="text"
            // value={{ query }}
            id="jobDesc"
            ref={jobDescInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" ref={locationInputRef} />
        </div>
        <div className={classes.control} style={{ marginTop: "0.8rem" }}>
          <button onClick={SearchJob} className="btn">
            Search
          </button>
        </div>
      </form>
      <Card>
        <div className={classes.sorting}>
          {/* <button onClick={changeSortingHandler}> */}
          {/* Sort {isSortingAscending ? 'Descending' : 'Ascending'} */}
          <h1>Job List</h1>
          {/* </button> */}
        </div>
        <ul className={classes.list}>
          {console.log(collectedJobs)}
          {collectedJobs.map((job) => (
            <JobItem
              key={job.id}
              id={job.id}
              title={job.title}
              type={job.type}
              company={job.company}
              location={job.location}
              created_at={job.created_at}
            />
          ))}
        </ul>
      </Card>
      <div
        ref={loadingRef}
        className={showClass ? classes.show : classes.loader}
      >
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
    </Fragment>
  );
};

export default JobList;
