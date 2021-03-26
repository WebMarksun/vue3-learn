
import Taro from '@tarojs/taro';
import {View,Text,Button} from '@tarojs/components';
import {useState} from 'react';

function Blog (){
    const [name,setName] = useState('BlogPage')
    const [introduce,setIntroduce] = useState('Tarolearn');
    const [articleList,setArticleList] = useState([])
    const testHandler= ()=>{
        Taro.request({
            url:'https://apiblog.jspang.com/default/getArticleList'
        }).then(res=>{
            setArticleList(res.data.list)
        })
    }
    const gotoIndex = ()=>{
        Taro.navigateTo({url:`/pages/index/index?pagename=${name}&introduce=${introduce}`})
    }

    return (
        <View>
            <Text>Blog Page</Text>
            <Button onClick={gotoIndex}>index</Button>
            <Button onClick={testHandler}>获取列表</Button>
            {
                articleList.map((item)=>{
                    return(
                        <View key={item.id}>{item.title}</View>
                    )
                })
            }
        </View>
    )
}
export default Blog