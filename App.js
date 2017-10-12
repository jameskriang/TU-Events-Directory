import React from 'react';
import { StatusBar, TouchableHighlight, AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import MainScreen from './MainScreen.js';
import DetailScreen from './DetailScreen.js';

const routes = [{index:0,title:'Explore'},{index:1, title:'Event Detail'}];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={
            (route,navigator) =>{
              switch (route.index){
                case 0: return (<MainScreen navigator={navigator}
                  route={routes[route.index]}{...route.passProps}></MainScreen>);
                  case 1: return (<DetailScreen navigator={navigator}
                    route={routes[route.index]}{...route.passProps}></DetailScreen>);
                  }
                }
          }

          configureScene={
            (route, routeStack)=>
              Navigator.SceneConfigs.FloatFromBottom
          }
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route,navigator,index,navState) =>
                  {if(route.index==0){
                    return null;
                  }
                    return (
                      <TouchableHighlight onPress={()=>navigator.pop()}>
                        <Text style={styles.navigationBarText}>Back</Text>
                      </TouchableHighlight>
                    )
                },
                RightButton: (route,navigator,index,navState) =>
                  {return null; },
                Title: (route,navigator,index,navState) =>
                  {return (<Text style={[styles.navigationBarText,styles.titleText]}> {route.title}</Text>); },
              }}
              style={styles.navigationBar}
              />
          }





          ></Navigator>
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
    fontSize:15
  },
  titleText:{
    fontSize:20,
    paddingTop:5
  }
});
