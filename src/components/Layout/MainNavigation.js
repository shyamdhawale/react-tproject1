import React from 'react';
import { NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}><img src='./Tranter-logo.png' /> </div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink  to="/checklists">Checklist</NavLink> </li>
                <li><NavLink  to="/inspections" >Inspection List</NavLink> </li>
                <li><NavLink  to="/master" >Master Data</NavLink> </li>
            </ul>
        </nav>
    </header>
  );
};

export default MainNavigation;