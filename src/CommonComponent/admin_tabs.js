import React, { Component } from 'react';
import { Menu, MenuItem, Divider, AppBar, Drawer } from "material-ui";
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

class AdminTabs extends Component{
    render(){
        return(
            <div>
                 <Drawer width={200} openSecondary={false} open={true}>
                    <AppBar title="AppBar" />
                    <Menu>
                        <MenuItem primaryText="用户管理" leftIcon={<RemoveRedEye/>} onClick={this._link} />
                        <MenuItem primaryText="分类管理" leftIcon={<PersonAdd />}  onClick={this._link}/>
                        <MenuItem primaryText="文章管理" leftIcon={<ContentLink />}  onClick={this._link} />
                     
                    </Menu>
                </Drawer>
            </div>
        )
    }

    _link(type){
        console.log("id==",type)
    }
}
export default AdminTabs