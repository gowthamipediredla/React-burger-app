
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Auxilary from '../Auxilary/Auxilary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import class1 from './Layout.css'
import React,{Component} from 'react'
import {connect} from 'react-redux'
class Layout extends Component{
    state={
        showSideDrawe:false
    }
    sideDrawerClosedhandler=props=>{
        this.setState({
            showSideDrawe:false  
        })

    }
 sideDrawerToggleHandler=()=>{ 
    //using prevstate as we are depending on old state
        this.setState((prevState)=>{
           return {showSideDrawe:!prevState.showSideDrawe}
            })
    }

    render(){   
        return(
            <Auxilary>
    <div>Toolbar, sidedrawer,backdrop</div>
    <Toolbar 
    isAuth={this.props.isAuthenticated}
    drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer 
    isAuth={this.props.isAuthenticated}
    closed={this.sideDrawerClosedhandler} open={this.state.showSideDrawe}/>
    <main className={class1.Content}>
    {this.props.children}
    </main>
    </Auxilary>
        )
        
    }
    
    }

const mapStateToProps=state=>{
    return{
        isAuthenticated:state.authred.token!==null
    }
}
export default connect(mapStateToProps)(Layout)