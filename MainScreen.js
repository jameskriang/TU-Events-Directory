import React from 'react';
import { StatusBar, TouchableHighlight ,TextInput,ListView,Image, AppRegistry, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import api from './api';
let ds;

export default class ListScreen extends React.Component {

  constructor(){
    super();
    ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2});
    this.state ={
      dataSource: ds.cloneWithRows(['row 1','row 2','row 3','row 4']),
    };
    this.search= this.search.bind(this);
    this.search('batman');
  }

  search(text){
    api.search(text).then((data)=>{
     this.setState({dataSource: ds.cloneWithRows(data)});
   });

  }

  render(){
      return (

        <View style={styles.container}>
        <TouchableHighlight>
            <TextInput
              style={{height:50,borderColor:'gray',borderWidth:1,borderRadius:10,margin:3,padding:5}}
              placeholder="search"
            />
            </TouchableHighlight>
          <TouchableHighlight onPress={()=>this.props.navigator.push({index:2})}>
            <View style={styles.popularBar}>
              <Text style={styles.detailText}> Popular Event </Text>
            </View>
          </TouchableHighlight>

          <Image
            style={{height: 350}}
            source={require('./map.png')}
          />


        <TouchableHighlight onPress={()=>this.props.navigator.push({index:1})}>
          <View style={styles.detailBar}>
            <Text style={styles.detailText}> Event Name </Text>
            <Text> Location : some where </Text>
            <Text> Time : 16:00  </Text>
          </View>
        </TouchableHighlight>
        </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    paddingTop:64,
    flex:1
  },
  searchBar:{
    height:50,
    marginBottom:5,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor:'black',
    borderRadius: 10
  },
  row:{
    flexDirection: 'row',
    height: 100
  },
  image:{
    height:100
  },
  titile:{
    fontSize:20
  },
  popularBar:{
    width: 320,
    height: 50
  },
  detailBar:{
    width: 320,
    height: 80,
    backgroundColor:'green'
  },
  detailText:{
    textAlign: 'center',

  }
});
