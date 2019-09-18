import React from 'react'
import Logo from '../../../components/Logo/Logo'
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems'
import Backdrop from '../../../components/Burger/UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'


const sideDrawer=props=>{
    let attachedClasses=[classes.SideDrawer,classes.Close]

    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open]


    }


    return(

        <React.Fragment>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}> {/*converting to single string from  array of strings */}
            <div className={classes.Logo}><Logo></Logo></div>
        
        <nav>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
        </div>
        </React.Fragment>
    );
}
export  default sideDrawer;