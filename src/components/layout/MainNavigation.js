
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><span style={{fontWeight: '800', color: 'white'}}>Github</span> <span style={{color: 'white'}}>Jobs</span></div>
      <nav className={classes.nav}>
      </nav>
    </header>
  );
};

export default MainNavigation;
