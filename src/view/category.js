import React, { Component } from 'react';
import Header from "../CommonComponent/header";
import {List, ListItem,Subheader } from 'material-ui';
import { connect } from "react-redux";
import { getCategoryDataStart, getCategoryDataSuccess, getCategoryDataFailure } from "../actions/CategoryAction";

class Category extends Component{

    // constructor(props){
    //     super(props)
     
    // }

    
    componentDidMount() {
        this.requestCategory()
        
    }
    
    requestCategory=()=>{
        this.props.get_category_data_start()
        const datas = [
            {
                forder_title:"python",
                forder_id:'1',
                list: [
                    {
                        title: "python2 与python3 的区别",
                        id: 1
                    },
                    {
                        title: "windows 安装python",
                        id: 2
                    },
                    {
                        title: "使用virtualenv隔离python 环境",
                        id: 3
                    }

                ]
            },
            {
                forder_title:"javaScript",
                forder_id:'2',
                list: [
                    {
                        title: "es6语言大全",
                        id: 1
                    },
                    {
                        title: "js 你所不知道的黑科技",
                        id: 2
                    },
                    {
                        title: "es6箭头函数的多种使用",
                        id: 3
                    }

                ]
            }
        ]
        
        setTimeout(()=>{
            this.props.get_category_data_success(datas)
        }, 2000)

    }
  

    render(){
        console.log("props",this.props.categoryList, this.props.loading)
        return(
            
            <div style={s_category.main}>
                <Header/>
              
            
              
                <List style={s_category.list}>
                    <Subheader>分类列表</Subheader>
                    {
                            this.props.categoryList.map((item)=>{
                                return this._renderList(item)
                            })
                    }
                 
                       
                </List>
            </div>
        )
    }

    _renderList=(item)=>{
        console.log("item", item)
        console.log(item.forder_title)
        return(
            <ListItem
                primaryText={item.forder_title}
                initiallyOpen={true}
                key={item.forder_id}
                primaryTogglesNestedList={true}
                nestedItems={item.list.map((contentItem) => {
                    return <ListItem
                        key={contentItem.id}
                        primaryText={contentItem.title}
                    />
                })}
            />
          
        )
    }
}
const s_category = {
    main:{
        display: "flex",
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        width:'70%'
    }
}

const mapStateToProps= state =>({
    categoryList : state.CategoryReducer.categoryList,
    loading: state.CategoryReducer.loading
    
})


const mapDispatchToProps = dispatch => ({
    // 请求分类数据
    get_category_data_start: ()=>{
        dispatch(getCategoryDataStart())
    },

    // 请求数据成功
    get_category_data_success:(data)=>{
        dispatch(getCategoryDataSuccess(data))
    },

    // 请求数据失败
    get_category_data_failure:()=>{
        dispatch(getCategoryDataFailure())
    }
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Category)