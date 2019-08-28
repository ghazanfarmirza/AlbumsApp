
import React from 'react';
import { View,Text} from 'react-native';


const Header = (props) => {
    const {textStyle} = styles;
    const {viewStyle} = styles;
     return(
        <View style = {viewStyle}>
            <Text style = {textStyle}>
                {props.headerText}
            </Text>
        </View>  
     );
};
const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        shadowColor:'#000',
        shadowOffset:{width:0,height:10},
        shadowOpaity:0.9,
    },
    textStyle:{
        fontSize:30,
    }
}

export default Header;
