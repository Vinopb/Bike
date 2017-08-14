import React,{Component}from 'react';
import {Text,View} from 'react-native';
import {Header,Button,Spinner,CardSection} from './components/common';
import  firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component{

  state = { loggedIn : null};  
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
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){              
              this.setState ({loggedIn : true});
            }
            else{
              this.setState ({loggedIn : false});              
            }
            });
    }
    renderContent(){
      
      switch(this.state.loggedIn){
        case false:
        return <LoginForm/>        
        case true :
        return (
        <CardSection>
        <Button onPress = { ()=> firebase.auth().signOut()}>Log Out </Button>
        </CardSection>
        );
        default:
        return <Spinner size="large"/>
      }
      return <LoginForm/>
    }
   
    render (){
      return(
        <View style={{flex :1}}>
         <Header headerText={'Bike Authentication'}/>
          {this.renderContent()}
        </View>
      );
    }
      
    
}

export default App;