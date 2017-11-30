import React, {Component} from 'react';
import {TextInput,TouchableOpacity, AppRegistry, ListView, StyleSheet, Text, View, Image} from 'react-native';
import api from './api.js';
eventData = [
{Title: "James's Event", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University", Detail:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"},
{Title: "Gift's Event", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University", Detail:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
{Title: "Fluke's Event", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University"},
{Title: "TU Freshy Game", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University"},
{Title: "Tald 4.0", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University"},
{Title: "Hackathon", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University"},
{Title: "JC show", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University"},
{Title: "TU Graduation", Date: "20 July 2018", Poster: require('./images/attention.png'), Type: "Exhibition",Location:"Thammasat University"}

];
class ListScreen extends Component {
  constructor(props) {
   super(props);
   const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2}
   );
   this.state = {
     dataSource: ds.cloneWithRows([]),
   };
   api.search('batman').then((data)=>{
     console.log(data);
     console.log(eventData);
     this.setState({dataSource: ds.cloneWithRows(eventData)});
   });
  }

  render() {

    return (
      <View style={styles.container}>
        <View>
          <TextInput style={styles.searchBox} placeholder="Search event ..."/>
        </View>
      <ListView style={{marginTop:15}}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData) => {
          console.log('rowData', rowData);
          return (
            <TouchableOpacity onPress={()=> this.props.navigator.push({index: 1,
               passProps:{title: rowData.Title,poster: rowData.Poster, date: rowData.Date,type: rowData.Type,location: rowData.Location,detail: rowData.Detail}})}>
              <View style={styles.row}>
                  <View style={{flex:3}}>
                    <Image style={styles.image} source={rowData.Poster}/>
                  </View>
                  <View style={{flex:10, padding: 10}}>
                    <Text style={styles.title}>{rowData.Title} ({rowData.Date})</Text>
                  </View>
                  <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={styles.title}>></Text>
                  </View>
              </View>
            </TouchableOpacity>
          )
        }

        }
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          <View key={rowID} style={{height:1, backgroundColor: 'lightgray'}}/>
        }
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop:65,
    flex:1
  },
  row:{
    flexDirection: 'row',
    height: 100
  },
  image:{
    height: 100
  },
  title:{
    fontSize: 20
  },
  searchBox:{
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2
  }
});

export default ListScreen;
