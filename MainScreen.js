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
            <TextInput onChangeText={(text)=>this.search(text)}
              style={{height:50,borderColor:'gray',borderWidth:1,borderRadius:10,margin:3,padding:5}}
              placeholder="search"
            />
            </TouchableHighlight>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>

              <TouchableOpacity onPress={()=> this.props.navigator.push({index:1,passProps:{imdbID: rowData.imdbID}})}>
                <View style={styles.row}>
                  <View style={{flex:3}}>
                    <Image style={styles.image} source={{uri: rowData.Poster}}/>
                  </View>
                  <View style={{flex:10,padding:10}}>
                    <Text style={styles.title}> {rowData.Title} ({rowData.Year})</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={styles.title}> > </Text>
                  </View>
                </View>
              </TouchableOpacity>

            }
            renderSeparator={(sectionID , rowID , adjacentRowHighlighted) =>
              <View key={rowID} style={{height:1 , backgroundColor: 'lightgray'}}/>
            }
          />

        </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    padding:10,
    paddingTop:65,
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
  }
});
