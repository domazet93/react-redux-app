import React from 'react'
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  const navigationItems = [
    { link: "/", name: "Burger Builder", active: true },
    { link: "/", name: "Checkout" }
  ];
  
  return(
    <ul className={classes.NavigationItems}>
     {navigationItems.map((e, $indx) => 
      <NavigationItem 
        link={e.link} 
        active={e.active} 
        key={$indx}>{e.name}</NavigationItem> )}
    </ul>
  )
}
export default navigationItems;