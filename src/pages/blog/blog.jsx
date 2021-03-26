
import Taro from '@tarojs/taro';
import {View,Text,Button} from '@tarojs/components';
import {useState} from 'react';

function Blog (){
    const [name,setName] = useState('BlogPage')
    const [introduce,setIntroduce] = useState('Tarolearn')
    const gotoIndex = ()=>{
        Taro.navigateTo({url:`/pages/index/index?pagename=${name}&introduce=${introduce}`})
    }

    return (
        <View>
            <Text>Blog Page</Text>
            <Button onClick={gotoIndex}>index</Button>
        </View>
    )
}
export default Blog