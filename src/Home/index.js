import React, {Component} from 'react';
import HomeTop from './home_top'
import {TextField, FontIcon} from 'material-ui'
import './home.css';
class Home extends Component{
    render(){
        return(
            
            <div  className="main_home">
                <HomeTop />
                <div>
                    <TextField
                        disabled={true}
                        underlineShow={false}
                        value={"个人小栈"}
                        inputStyle={s_home.host_title}
                    />
                </div>
                <div className="top_address">
                    <div>
                        <FontIcon className="material-icons" style={s_home.icon}>home</FontIcon>
                        <TextField
                            disabled={false}
                            underlineShow={false}
                            value={"北京市"}
                            
                        />
                    </div>
                    <div>
                        <FontIcon className="material-icons" style={s_home.icon}>email</FontIcon>
                        <TextField
                            disabled={false}
                            underlineShow={false}
                            value={"lv953301729@qq.com"}
                        />
                    </div>
                    <div>
                        <FontIcon className="material-icons" style={s_home.icon}>add_alert</FontIcon>
                        <TextField
                            disabled={false}
                            underlineShow={false}
                            value={"abc"}
                        />
                    </div>
                </div>
                 
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
    },
    icon:{
        fontSize:24,
        color:'red'
    }
}

export default Home

