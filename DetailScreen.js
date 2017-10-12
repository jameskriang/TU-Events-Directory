import React from 'react';
import { StatusBar, TouchableHighlight ,Image, AppRegistry, StyleSheet, Text, View } from 'react-native';
import api from './api';


export default class DetailScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    api.view(this.props.imdbID).then((data)=>{
      this.setState(data);
    });
  }
  saperator(){
    return(
      <View style={{height:1, backgroundColor:'lightgray',margin:5}}/>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Image style={styles.image} source={{uri: this.state.Poster}}/>
          <Text style={styles.subTitle}>Meta: {this.state.Metascore}</Text>
          <Text style={styles.subTitle}>imDB: {this.state.imdbRating}</Text>
          </View>
        <View style={{flex:2,padding:10}}>
          <Text style={styles.title}>{this.state.Title} ({this.state.Year})</Text>
          <Text>Genre: {this.state.Genre} ({this.state.Runtime})</Text>
          {this.saperator()}
          <Text>Released: {this.state.Released} [{this.state.Rated}]</Text>
          {this.saperator()}
          <Text>{this.state.Plot}</Text>
          {this.saperator()}
          <Text>Director: {this.state.Director}</Text>
          {this.saperator()}
          <Text>Write: {this.state.Writer}</Text>
          {this.saperator()}
          <Text>Actors: {this.state.Actors}</Text>
        </View>
      </View>

    );
  }
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    padding:10,
    paddingTop:70,
    flex:1
  },
  image:{
    height:200
  },
  titile:{
    fontSize:25
  },
  subTitle:{
    fontSize:20
  }
});
