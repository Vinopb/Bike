//import library for making a component
import React from 'react';
import {ReactNative ,Text,View}from 'react-native';

//make a component
const Header =(props) =>{
  const { textstyle,viewStyle } = styles;
  return (
      <View style= {viewStyle}> 
        <Text style = {textstyle}> {props.headerText}</Text>
      </View>
    )
}

const styles ={
  viewStyle :{
     backgroundColor :'#0099cc',
     justifyContent :'center',
     alignItems :'center',
     height :60,
     paddingTop:15,
     shadowColor:'#87CEFA',
     shadowOffset :{width :0, height:2},
     shadowOpacity : 0.2,
     elevation :50,
     position  : 'relative'
  },
  textstyle:{
   fontSize:20
  }
};
//make the component available to other parts of the app
export { Header};