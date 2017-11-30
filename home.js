import React,{Component} from 'react';
import {Button,Image,TouchableOpacity,StatusBar,TouchableHighlight,AppRegistry, StyleSheet, Text, View } from 'react-native';


const routes = [
  {
    title: 'Movie Explorer',
    index: 0
  }, {
    title: 'Movie Detail',
    index: 1
  },
  {
    title: 'Map',
    index: 2
  }
]



export default class HomeScreen extends Component {
  render() {
   return (
     <View style={styles.container}>
        <Image style={{flex:3,width:320,height:400,marginTop:70}} source={require('./1.jpg')}/>
        <View style={{alignSelf:"center",flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
        <Button
          onPress={()=>this.props.navigator.push({index: 0})}
          title="Event List"
          color="#841584"
        />
        <Button
          onPress={()=>this.props.navigator.push({index: 2})}
          title="Map Explorer"
          color="#841584"
        />
        </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
  navigationBarText:{
    color: 'white',
    padding: 10,
    fontSize: 15
  },
  titleText:{
    fontSize: 20,
    paddingTop:5
  }

});
