import { useEffect, useState } from 'react'
import { View, Text,Button,Image } from '@tarojs/components'
import Taro,{Current, requirePlugin} from '@tarojs/taro'
import './index.scss'
import  newbbd from '../../static/bbd.png'
import Child from './child'
function Index(){
  const [userName,setUserName] = useState('Taro');
  const [fromPage,setFromPage] = useState('');
  const [introduce,setIntroduce] = useState('');
  useEffect(()=>{
    setFromPage(Current.router.params.pagename);
    setIntroduce(Current.router.params.introduce);
  },[])
  return (
    <View>
      <Text>{userName}</Text>
      <Child userName={userName}></Child>
      <Button>toBlog</Button>
      <View>{fromPage}</View>
      <View>{introduce}</View>
      <View><Image src={newbbd} width='100px' height='100px'/></View>
      <View><Image src={require('../../static/bbd.png')} width='100px' height='100px'/></View>
    </View>
  )
}
export default Index
