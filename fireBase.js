import React, {Component} from 'react';
import Firestack from 'react-native-firestack'
import moment from 'moment';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppState,
  Modal
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAjW3TKnys11WvWWQlZS9Ux0vY-FBNcqeY",
  authDomain: "mobi-84d28.firebaseapp.com",
  databaseURL: "https://mobi-84d28.firebaseio.com",
  storageBucket: "mobi-84d28.appspot.com",
  messagingSenderId: "45406091902"
};
firebase.initializeApp(config);
const firestack = new Firestack();
