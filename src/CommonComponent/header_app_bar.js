import React, {Component} from 'react';
import block, { AppBar, IconButton, FlatButton, Popover, Menu, MenuItem, RaisedButton, Avatar, FloatingActionButton } from 'material-ui';
import { PopoverAnimationVertical } from "material-ui/Popover"
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from "react-redux";
import { push } from 'react-router-redux'

class AppBarComponent extends Component {

  constructor(props){
      super(props)
      this.state={
        menu_is_show : false
      }
  }

  right_menu=()=>{
    return (
      <div style={s_top.right}
      >
        <FlatButton label="首页" style={s_top.btn} labelStyle={s_top.btn_text} onClick={this._linkHome}/>
        <FlatButton label="分类" style={s_top.btn} labelStyle={s_top.btn_text}  onClick={this._linkCategory} />
        <FlatButton label="关于" style={s_top.btn} labelStyle={s_top.btn_text}/>
        {
          this.props.login ?
          <FlatButton label="登录" style={s_top.btn} labelStyle={s_top.btn_text} onClick={this._linkLogin}/>  
          :
        <IconButton
          onClick={this._handleClickMenu}
        >
          <Avatar src={require("../assets/image/circle.png")} size={30}/>
        </IconButton>
      
   
        }
     
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
        />
             <Popover
          open={this.state.menu_is_show}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this._handleClickMenu}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
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
  _handleClickMenu=()=>{
    this.setState({
      menu_is_show: !this.state.menu_is_show
    })
  }

}

const s_top={
  
  main:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#eeeeee'
  },
  right:{
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems:'center'
  
  },
  btn:{
    height:'100%',
    margin:0,
    color: '#fff',
  },
  btn_text:{
    fontSize:16
  },
  admin:{
    float:'right',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

const mapStateToProps = state => ({
  login: state.CommonReducer.login
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