import classes from './HighlightedJob.module.css';

const HighlightedJob = (props) => {
  return (
    <figure className={classes.job}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedJob;
