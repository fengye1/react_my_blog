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
                        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
                        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                        <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                        <Divider />
                        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                        <MenuItem primaryText="Download" leftIcon={<Download />} />
                        <Divider />
                        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
                    </Menu>
                </Drawer>
            </div>
        )
    }
}

export default AdminTabs