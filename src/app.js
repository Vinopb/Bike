import React,{Component}from 'react';
import {Text,View} from 'react-native';
import {Header} from './components/common';
import  firebase from 'firebase';

class App extends Component{

    componentWillMount()
    {
        firebase.initializeApp({
             apiKey: "AIzaSyCmZGZNqWhKTPCXb0XmVnJC-8lUG-gmpeI",
             authDomain: "bike-ca91a.firebaseapp.com",
             databaseURL: "https://bike-ca91a.firebaseio.com",
             projectId: "bike-ca91a",
             storageBucket: "bike-ca91a.appspot.com",
             messagingSenderId: "980365312212"
            });
    }
   
    render (){
      return(
        <View style={{flex :1}}>
         <Header headerText={'Login'}/>
        </View>
      );
    }
      
    
}

export default App;