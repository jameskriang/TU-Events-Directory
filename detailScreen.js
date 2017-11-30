import React, {Component} from 'react';
import {TouchableHighlight, Image, AppRegistry,
   StyleSheet, Text, View} from 'react-native';
import api from './api.js';

class DetailScreen extends Component {
  constructor(props){
    super(props);
    this.state = {};

  }

  saperator(){
    return (
      <View style={{height:1, backgroundColor:'lightgray', margin:5}}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={{flex:1}}>
         <Image style={styles.image} source={this.props.poster}/>
         <Text style={styles.subTitle}>Organizer {this.props.type}</Text>
         </View>
       <View style={{flex:2, padding: 10}}>
         <Text style={styles.title}>{this.props.title}</Text>
         <Text>Time {this.props.date}</Text>
         {this.saperator()}
         <Text>Location {this.props.location}</Text>
         {this.saperator()}
         <Text>Event Detail: {this.props.detail}</Text>
       </View>
     </View>
    );
  }
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    paddingTop:70,
    flexDirection: 'row'
  },
  image:{
    height: 200
  },
  title:{
    fontSize: 25
  },
  subTitle:{
    fontSize: 20
  }
});

export default DetailScreen;
