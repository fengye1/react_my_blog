import React, { Component } from 'react';
import AdminTabs from '../../CommonComponent/admin_tabs'
import { Paper, Avatar, FlatButton, Subheader, RaisedButton, Dialog } from 'material-ui'
import Delete from 'material-ui/svg-icons/action/delete';


class CategoryAdmin extends Component{
    constructor(props){
        super(props)
        this.state={
            dialogShow:false
        }
    }

    render(){
        return(
            <div style={s_articles.main}>
                <AdminTabs/>
                <Paper style={s_articles.content}>
                    <div style={s_articles.middle}> 
                        <div style={s_articles.middle_left}>
                            <span>分类管理</span>
                            <RaisedButton label="新建分类" secondary={true} style={{margin:12}} onClick={()=>{
                               this.setState({
                                   dialogShow: true
                               })
                            }} />
                        </div>
                        <div style={ s_articles.user_item }>
                            <div>
                                <span style={s_articles.sub_title}>分类名称</span>
                                <span style={s_articles.item_date}>2018-07-06</span>
                            </div>
                            <FlatButton
                                target="_blank"
                                label="delete"
                                secondary={true}
                                icon={<Delete/>}
                            />
                        </div>
                    </div>
                </Paper>
                {this._newCategoryDialog()}
            </div>
        )
    }

    // 新建分类dialog
    _newCategoryDialog=()=>{
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this._close_category}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this._close_category}
            />,
          ];
      
          return (
            <div>
              <Dialog
                title="分类"
                actions={actions}
                modal={false}
                open={this.state.dialogShow}
                onRequestClose={this._close_category}
              >
                    The actions in this window were passed in as an array of React objects.
              </Dialog>
            </div>
          )
    }
    _close_category=()=>{
        this.setState({
            dialogShow:false
        })
    }
}

const s_articles = {
    main:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        width:'100%',
        minHeight:800
    },
    middle:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    middle_top:{
        display:'flex',
        flexDirection:'row'
    },
    user_item:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderStyle:"solid",
        borderWidth:0.5,
        pading:10
    },
    item_text:{
        fontSize:22,
        pading:10,
        paddingLeft:15,
        paddingRight:15,
    },
    item_date:{
        fontSize:16,
        pading:10,
        paddingLeft:15,
        paddingRight:15,
    },
    sub_title:{
        fontSize:20,
    }
}
export default CategoryAdmin