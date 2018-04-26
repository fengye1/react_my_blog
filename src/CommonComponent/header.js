import React, {Component} from 'react';
import AppBar from './header_app_bar'
import {TextField, FontIcon} from 'material-ui'
import { cyan500, white } from "material-ui/styles/colors";
class Header extends Component{
    render(){
        return(
            <div style={s_header.main}>
         
            <div  style={s_header.header}>
                <AppBar/>

                <TextField
                    disabled={true}
                    underlineShow={false}
                    value={"个人小栈"}
                    inputStyle={s_header.title}
                    id={"0"}
                />
           
                <div style={s_header.header_info}>
                    <div  style={s_header.header_info_detail}>
                        <FontIcon className="material-icons" style={s_header.icon}>home</FontIcon>
                        <TextField
                           inputStyle={s_header.header_info_text}
                            disabled={false}
                            underlineShow={false}
                            value={"北京市"}
                            id={'1'}
                            
                        />
                    </div>
                    <div style={s_header.header_info_detail}>
                        <FontIcon className="material-icons" style={s_header.icon}>email</FontIcon>
                        <TextField
                           inputStyle={s_header.header_info_text}
                            disabled={false}
                            underlineShow={false}
                            value={"lv953301729@qq.com"}
                            id={'2'}
                        />
                    </div>
                    <div style={s_header.header_info_detail}>
                        <FontIcon className="material-icons" style={s_header.icon}>add_alert</FontIcon>
                        <TextField
                            inputStyle={s_header.header_info_text}
                            disabled={false}
                            underlineShow={false}
                            value={"abc"}
                            id={'3'}
                        />
                    </div>
                </div>
                 
            </div>
            </div>
        )
    }
}
const s_header = {
    main:{
        height: 250,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        backgroundColor: cyan500,
    },
    header:{
        height: "100%",
        width:'70%',
        
    },
    title:{
        paddingLeft:20,
        marginTop:80,
        color: '#fff',
        fontSize: 30,
    },
    header_info: {
        paddingLeft:20,
        width:"100%", 
        display:"flex",
        flexDirection:'row'
    },
    header_info_detail:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
  
    icon:{
        fontSize:24,
        color:white,
        margin:4
    },
    header_info_text:{
        color: '#eee'
    }
}

export default Header

