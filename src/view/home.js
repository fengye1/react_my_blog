import React, {Component} from 'react';
import { List, ListItem, TextField, FontIcon, Divider, Subheader } from "material-ui";
import Header from "../CommonComponent/header";
import { blue700 } from 'material-ui/styles/colors';
import { connect } from "react-redux";
import {push } from 'react-router-redux'

class Home extends Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div style={s_home.main}>
                <Header/>
                <List style={s_home.list}>
                    <ListItem
                        primaryText={"仁恒子"}
                        onClick={this._linkDetail}
                        secondaryText={this._renderSecondItem()}
                        secondaryTextLines={2}
                    />
                    <Divider/>
                    <ListItem
                        primaryText={<TextField
                            value={"仁恒子"}
                            underlineShow={false}
                            disabled={true}
                            inputStyle={{color: blue700}}
                        />}
                        secondaryText={this._renderSecondItem()}
                        secondaryTextLines={2}
                    />
                    <Divider/>
                    <ListItem
                        primaryText={<TextField
                            value={"仁恒子"}
                            underlineShow={false}
                            disabled={true}
                            inputStyle={{color: blue700}}
                        />}
                        secondaryText={this._renderSecondItem()}
                        secondaryTextLines={2}
                    />
                    <Divider/>
                    <ListItem
                        primaryText={<TextField
                            value={"仁恒子"}
                            underlineShow={false}
                            disabled={true}
                            inputStyle={{color: blue700}}
                        />}
                        secondaryText={this._renderSecondItem()}
                        secondaryTextLines={2}
                    />
                <Divider/>
                </List>
                    
                
            </div>
        )
    }

    // 底部信息
    _renderSecondItem = () => {
        return (
            <div style={s_home.item}>
                <div style={s_home.item_desc}>
                    <Subheader>张中午把小省局，相识到的对方</Subheader>
                </div>
                <div style={s_home.item_desc}>


                    <div style={s_home.item_second_view}>
                        <FontIcon className="material-icons" style={s_home.icon}>date_range</FontIcon>
                        <Subheader>2017-05-15</Subheader>
                      
                    </div>
                    <div style={s_home.item_second_view}>
                        <FontIcon className="material-icons" style={s_home.icon}>folder</FontIcon>
                        <Subheader>category</Subheader>
                    </div>
                </div>
            </div>
             
        )
    }
    _linkDetail=(article_id)=>{
        
        this.props.dispatch(push('/detail'))
    }
   
}
const s_home = {
    main:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        width:'70%',
    },
    item:{
        display:'flex',
        flexDirection:'column',  
        height:80
    },
    item_desc:{
        display:'flex',
        flexDirection:'row', 
    },
    item_second_view:{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center'
    },
    item_icon:{
        padding:4
    }
}
export default connect()(Home)

