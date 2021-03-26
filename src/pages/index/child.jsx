import {View,Text} from '@tarojs/components';
function Child(props){
    return(
        <View>
            <Text>Child.props:{props.userName}</Text>
        </View>
    )
}
export default Child