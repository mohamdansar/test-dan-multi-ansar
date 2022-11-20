import moment from 'moment'


import classes from "./JobItem.module.css";

const JobItem = (props) => {
  return (
    <li
      className={classes.sorting}
      style={{ display: "flex", alignItems: "center", justifyContent: 'space-between'}}
    >
      <div>
        <h4>{props.title}</h4>
        <span>{props.company}</span> -{" "}
        <span style={{ fontWeight: "800", color: "green" }}>{props.type}</span>
      </div>
      <div style={{textAlign: 'right'}}>
        <p>{props.location}</p>
        <p>{moment(props.created_at).fromNow()}</p>
      </div>
    </li>
  );
};

export default JobItem;
