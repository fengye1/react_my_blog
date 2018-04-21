import React, {Component} from 'react';
import HomeTop from './home_top'
import {TextField, FontIcon} from 'material-ui'
import './home.css';
class Home extends Component{
    render(){
        return(
            
            <div  className="main_home">
                <HomeTop />
                <TextField
                    disabled={true}
                    underlineShow={false}
                    value={"个人小栈"}
                    inputStyle={s_home.host_title}
                />
                 <FontIcon className="material-icons" style={s_home.icon}>home</FontIcon>
                 
            </div>
        )
    }
}
const s_home = {
    main:{
        height: 400
    },
    host_title:{
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: 40,
        padding:10
    },
    icon:{
        fontSize:24,
        color:'red'
    }
}

export default Home

