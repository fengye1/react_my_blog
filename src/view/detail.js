import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import { Paper, Subheader, FlatButton , FontIcon} from 'material-ui';
//详情页面
class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            input:' # 在使用react native 组件picker 的时候需要设置picker的样式，在Android style中设置去更改显示的样式修改'
        }
    }

    render(){
        return(
            <div style={s_detail.main}>
            <div style={s_detail.top}>
            <Subheader>所属文件夹</Subheader>

            <div style={s_detail.top_browse}>
                <FontIcon className="material-icons">remove_red_eye</FontIcon>
                <p style={s_detail.top_browse_text}>12306</p>
            </div> 
            
            </div>
                <Paper 
                    zDepth={2}
                    style={s_detail.paper}
                    > 
                    
                    <Subheader style={s_detail.paper_title}>皇朝霸业谈笑中，不胜人生一场醉</Subheader>    
                    <span style={s_detail.paper_date}>日期：2018-05-15</span>          
                    <ReactMarkdown
                        source={this.state.input}
                    />
                </Paper>
                

            </div>
        )
    }
}
const s_detail = {
    main:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
        backgroundColor:'#ECEFF1',
    },
    paper:{
        width:"60%",
        minHeight:900,
        padding:20,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        // justifyContent:'center'
    },
    paper_title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:"#000"
    },
    paper_date:{
      
    },
    top:{
        display:'flex',
        width:'60%',
        justifyContent:'left',
        alignItems:'center',
        flexDirection:'row',
    },
    top_browse:{
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft:10,
    },
    top_browse_text:{
        fontSize:14,
        paddingLeft:4
    },


}
export default Detail