import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal
} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';


mapStyle = [
{
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#242f3e"
    }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#746855"
    }
  ]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#242f3e"
    }
  ]
},
{
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#d59563"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#d59563"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#005100"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#6b9a76"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#617283"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#d4d4d4"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#746855"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#1f2835"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#f3d19c"
    }
  ]
},
{
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#df20a6"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#d59563"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#00b0b0"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#515c6d"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#17263c"
    }
  ]
}];


class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 13.764884,
        longitude: 100.538265,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      },
      markers: [
        {
          latlng: {
            latitude: 13.764884,
            longitude: 100.538265
          },
          image: require('./images/attention.png'),
          photo: require('./images/Victory_Monument.jpg'),
          title: "Gift's Event",
          description: "GIft celebration event"
        },
        {
          latlng: {
            latitude: 13.763681,
            longitude: 100.538125
          },
          image: require('./images/music.png'),
          photo: require('./images/Saxophone.jpg'),
          title: "James's Event",
          description: "james celebration event"
        }, {
          latlng: {
            latitude: 13.764595,
            longitude: 100.537438
          },
          image: require('./images/shopping.png'),
          photo: require('./images/coco.jpg'),
          title: "Fluke's Event",
          description: "Gift celebration event"
        }
      ],
      modalVisible:false,
      current:0
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.moveMaptoLocation = this.moveMaptoLocation.bind(this);
    this.getUserLocation =this.getUserLocation.bind(this);
    this.goToDetail = this.goToDetail.bind(this);
    this.getUserLocation();
  }

  getUserLocation(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        var user ={
          latlng:{
            latitude: position.coords.latitude,
            longitude:position.coords.longitude
          },
          image: require('./images/jamesdekvanz.jpg'),
          photo: require('./images/jamesdekvanz.jpg'),
          title: "Me",
          description: "Your location"
        }
        this.state.markers.push(user);
        this.setState(
        {region: {latitude: position.coords.latitude,longitude:position.coords.longitude,latitudeDelta: 0.004,longitudeDelta: 0.004}
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentDidMount() {

  }

  onRegionChange(region) {
    this.setState({region});
  }
  moveMaptoLocation(latlng, key) {

    this.refs.map.animateToRegion({
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
      ...latlng
    }, 1000);
    console.log(key);
    this.setState({modalVisible:true});
    this.setState({current:key})
    console.log(this.state.current);

  }

  goToDetail(){
    this.setState({modalVisible: false});
    this.props.navigator.push({index: 1,
       passProps:{title: this.state.markers[this.state.current].title,poster: this.state.markers[this.state.current].image, date: this.state.markers[this.state.current].title,type: this.state.markers[this.state.current].type}});
  }


  render() {
    var current =this.state.current;
    console.log(this.state.markers[current]);
    let detailUI;
    detailUI = (
      <TouchableOpacity onPress={()=>this.goToDetail()}>
      <View style={styles.eventDetail}>
        <Image style={styles.pinImage} source={this.state.markers[current].image}/>
        <Text>{this.state.markers[current].title}</Text>
          <Text>{this.state.markers[current].description}</Text>

      </View>
      </TouchableOpacity>
    )

    return (
       <TouchableWithoutFeedback onPress={()=>{this.setState({modalVisible:false})}}>
      <View style={styles.container}>


        <MapView ref="map" style={styles.map}  region={this.state.region} onRegionChange={this.onRegionChange} provider={PROVIDER_GOOGLE} customMapStyle={mapStyle}>

          {this.state.markers.map((marker, i) => (
            <MapView.Marker key={i} ref={i} coordinate={marker.latlng} title={marker.title} description={marker.description} >
              <View style={styles.pin}>
                <Image style={styles.pinImage} source={marker.image}/>
                <Text style={styles.pinText}>
                  {marker.title}
                </Text>
              </View>
              <MapView.Callout   width={100} onPress={()=>this.moveMaptoLocation(marker.latlng,i)}>
                    <View style={styles.callout}>
                      <Image style={styles.calloutPhoto} source={marker.photo}/>
                      <Text style={styles.calloutTitle}>{marker.title}</Text>

                      <Text>{marker.description}</Text>
                    </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
        <Modal animationType={"slide"} transparent={true} visible={this.state.modalVisible}>
         <View style={{
           height: 100,
           width: 300,
           marginTop: 400,
           padding: 10,
           alignSelf: 'flex-end',
           backgroundColor: 'lightblue',
           margin: 10,
           borderRadius: 10,
           justifyContent: 'center',
           alignItems: 'center'
         }}>
           <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => this.setState({modalVisible: false})}>
             <Text style={{fontSize:16,width:20,height:20}}>X</Text>
           </TouchableOpacity>
           {detailUI}
         </View>
       </Modal>

      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    width: width,
    height: height
  },
  searchBar: {
    position: 'absolute',
    width: width*6/8,
    height: height*1/10,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',

  },
  searchText:{
    borderRadius: 10,
    backgroundColor:'pink'
  },
  eventDetail:{
    flex: 1,
    width: width,
    justifyContent: 'flex-start',

  },
  pin: {
    backgroundColor: '#fffa',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10
  },
  pinImage: {
    width: 40,
    height: 40
  },
  pinText: {
    color: 'red'
  },
  callout:{
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginBottom: 10
  },
  calloutPhoto:{
    flex: 1,
    width: 70,
    height: 70
  },
  calloutTitle:{
    fontSize: 10,
  }
});

export default MapScreen;
