import React, {Component} from 'react';
import { List, ListItem, TextField, FontIcon } from "material-ui";
import Header from "../CommonComponent/header";
import { blue700 } from 'material-ui/styles/colors';


class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <List>
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
                </List>
                    
                
            </div>
        )
    }

    // 底部信息
    _renderSecondItem = () => {
        return (
            <div>
                <TextField
                    disabled={true}
                    underlineShow={true}
                    value={"命若天定，我便胜了这个天"}
                />
                
                    <FontIcon className="material-icons" style={s_home.icon}>add_alert</FontIcon>
                    <TextField
                        disabled={true}
                        underlineShow={true}
                        value={"2017-05-15"}
                    />
                    <FontIcon className="material-icons" style={s_home.icon}>add_alert</FontIcon>
                    <TextField
                        disabled={true}
                        underlineShow={true}
                        value={"category"}
                    />
                
            </div>
        )
    }
}
const s_home = {

}

export default Home

