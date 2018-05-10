import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import FlatButton from 'material-ui/FlatButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from "react-redux";
import {push } from 'react-router-redux'

class AppBarComponent extends Component {

  // constructor(props){
  //     super(props)
  // }

  right_menu=()=>{
    return (
      <div style={s_top.right}
      >
        <FlatButton label="首页" style={s_top.btn} labelStyle={s_top.btn_text} onClick={this._linkHome}/>
        <FlatButton label="分类" style={s_top.btn} labelStyle={s_top.btn_text}  onClick={this._linkCategory} />
        {/* <FlatButton label="关于" style={s_top.btn} labelStyle={s_top.btn_text}/> */}
        <FlatButton label="登录" style={s_top.btn} labelStyle={s_top.btn_text} onClick={this._linkLogin}/>
      </div>
    )
  }

  render() {
    return (
      <div >
        <AppBar
          style={s_top.main}
          zDepth={0}
          title="Home"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.right_menu()}
          iconStyleRight={{margin:8}}
        />
      </div>
    );
  }

  _linkHome=()=>{
    this.props.link_home()
  }
  _linkCategory=()=>{
    this.props.link_category()
    
  }
  _linkLogin=()=>{
    this.props.link_login()
  }

}

const s_top={
  
  main:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  right:{
    width:'100%',
    margin:10,
    justifyContent: 'center'
  
  },
  btn:{
    height:'100%',
    margin:0,
    size:50,
    color: '#fff',
  },
  btn_text:{
    fontSize:16
  }
}
const mapStateToProps= state =>({
})


const mapDispatchToProps = dispatch => ({
  link_home : ()=>{
    dispatch(push('/'))
  },
  link_category: ()=>{
    dispatch(push('/category'))
  },
  link_login:()=>{
    dispatch(push('/login'))
  }

});
export default connect(mapStateToProps,mapDispatchToProps)(AppBarComponent)