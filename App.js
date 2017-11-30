import React,{Component} from 'react';
import {TouchableOpacity,StatusBar,TouchableHighlight,AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import ListScreen from './listScreen.js';
import DetailScreen from './detailScreen.js';
import MapScreen from './mapScreen.js';
import HomeScreen from './home.js';
const routes = [
  {
    title: 'Event List',
    index: 0
  }, {
    title: 'Event Detail',
    index: 1
  },
  {
    title: 'Map Explorer',
    index: 2
  },
  {
    title: 'Home',
    index:3
  }
]



export default class App extends Component {
  render() {
   return (
     <View style={styles.container}>
       <StatusBar
        backgroundColor="blue"
        barStyle ="light-content"
        />
       <Navigator
         initialRoute={routes[3]}
         initialRouteStack={routes}
         renderScene={
           (route, navigator) => {
             switch (route.index) {
               case 0: return (<ListScreen navigator={navigator} route={routes[route.index]} {...route.passProps}></ListScreen>);
               case 1: return (<DetailScreen navigator={navigator} route={routes[route.index]} {...route.passProps}></DetailScreen>);
               case 2: return (<MapScreen navigator={navigator} route={routes[route.index]} {...route.passProps}></MapScreen>);
               case 3: return (<HomeScreen navigator={navigator} route={routes[route.index]} {...route.passProps}></HomeScreen>);
             }
           }
         }

         configureScene={
           (route, routeStack) =>
             Navigator.SceneConfigs.SwipeFromLeft
         }
         navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.index == 3){
                  return null;
                }
                return (
                  <TouchableOpacity onPress={()=>navigator.pop()}>
                    <Text style={styles.navigationBarText}>Back</Text>
                  </TouchableOpacity>
                )
              },
              RightButton: (route, navigator, index, navState) => { return null; },
              Title: (route, navigator, index, navState) =>
                { return (<TouchableHighlight onPress={()=>navigator.jumpTo(routes[2])}><Text style={[styles.navigationBarText, styles.titleText]}>{routes[route.index].title}</Text></TouchableHighlight>); },
            }}
            style={styles.navigationBar}
          />
       }
     />
   </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
