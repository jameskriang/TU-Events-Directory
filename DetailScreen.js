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
        <View style={{flex:1,padding:5}}>
          <Text style={styles.title}>Bit Coin Seminar</Text>
          {this.saperator()}
          <Image style={styles.image} source={require('./img/photo.jpg')}/>
          {this.saperator()}
          <Text style={styles.topic}>Description</Text>

          <Text style={styles.topicText}>One of the first major conferences dedicated to cryptocurrency investments.
          It will take place in Thammasat, a financial Thammasat hub and headquarter of many prospective companies.{"\n"}{"\n"}

          Smile-Expo, ICO Event organizer, has been holding events dedicated to blockchain and cryptocurrencies for several years.
          {"\n"}{"\n"}ICO Event London is a specialized event on the most popular and relevant cryptocurrency crowdsale topic.</Text>

          {this.saperator()}
          <Text style={styles.topic}>Event Date & Time</Text>

          <Text style={styles.topicText}>Thursday, November 13{"\n"}
                                          16:00 PM - 20:00 PM</Text>
          {this.saperator()}
          <Text style={styles.topic}>Location</Text>

          <Text style={styles.topicText}>SC Building, Thammasat Rangsit University</Text>
          {this.saperator()}
          <Text style={styles.topic}>More Infomation</Text>

          <Text style={styles.topicText}>Please contact:{"\n"}{"\n"}
                                        www.bitcoin.org/en{"\n"}
                                        (+66)2-999-9999</Text>
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
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  topic:{
    fontSize:12,
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:20
  },
  topicText:{
    fontSize:10
  }
});
