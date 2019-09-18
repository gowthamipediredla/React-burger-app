import React,{Component} from 'react'
import classes from './Modal.css'
import BackDrop from '../Backdrop/Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
      
            return nextProps.show!==this.props.show ||nextProps.children!==this.props.children;
        
    }

    
    componentWillUpdate(){
      //  console.log('[Modal.js]  ')

    }
    render(){
        return(
            // <React.Fragment>
    //     {this.props.show?<div className={classes.Modal}>{this.props.children}</div>:null}
    // </React.Fragment>
    <React.Fragment>
    <BackDrop show={this.props.show} clicked={this.props.modalclosed}/>
<div 
className={classes.Modal} 
      style={{
          transform:this.props.show?'translateY(0)':'translateY(-100vh)',
          opacity:this.props.show?'1':'0'
      }}>
      {this.props.children}
</div>
</React.Fragment>

        )
    }
}
    

export default Modal