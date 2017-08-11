import React,{Component}from 'react';
import {ScrollView} from 'react-native'
import axios from 'axios';
import BikeDetail from './BikeDetail'

class BikeList extends Component {
 state = { bike :[] };
   componentWillMount(){
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then( response => this.setState({bike : response.data}))
   }

   renderBike (){
      return this.state.bike.map(bike => 
      <BikeDetail key= {bike.title} bike ={bike}/>);       
   }

    render(){
        console.log(this.state)
    return(
       <ScrollView>
            {this.renderBike()}
        </ScrollView>
    );
 }
};

export default BikeList;