import React, { Component } from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import {Button,Card,CardSection,Input,Spinner} from './common'

class LoginForm extends Component{

state = { email :'',password :'',error :'',loading:false};
onButtonPress()
{
   const { email,password } = this.state;
   this.setState ({error :'',loading:true});
   firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
   .then(this.onLoginSucess.bind(this))
    .catch( ()=> {
       firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
       .then(this.onLoginSucess.bind(this))
       .catch(this.onLoginFailed.bind(this))
    });
    //console.log(this.state);
}

onLoginFailed(){
        this.setState ({
         loading:false,
         error:'Authentication Failed'
    });
}
onLoginSucess(){
    this.setState ({
         email :'',
         password :'',
         loading:false,
         error:''
    });
}

renderButton(){
    if(this.state.loading){
        return <Spinner size="small"/>
    }
    else{
        return <Button onPress= {this.onButtonPress.bind(this)}> Login </Button>
    }
}
render(){
    return(
        <Card>
         <CardSection>
             <Input
             placeholder= "user@gmail.com"
             label = "Email"
             value = {this.state.email}
             onChangeText = { email => this.setState({email})} 
             secureTextEntry = {false} >
             </Input>
         </CardSection>
         <CardSection>
              <Input 
              placeholder="password"
              label ="Password"
              value = {this.state.password}
              onChangeText = { password => this.setState({password})}
              secureTextEntry 
              />
         </CardSection>
         <Text style ={styles.errorTextStyle}>
             {this.state.error}
         </Text>
         <CardSection>
             {this.renderButton()}
         </CardSection>

        </Card>
    )
}


}

export default LoginForm;

const styles ={
    errorTextStyle:{
        fontSize:20,
        alignSelf :'center',
        color :'red'
    }

}