import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Details extends Component{
  componentDidMount(){
    const {data} = this.props.navigation.state
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:0.5}}>
          <Image style={styles.selectedimage}
            source={{ uri: data.Image }}
          />
          </View>
          <View style={{flex:0.5}}>
          <Text style={{color:'black',fontSize:20}}>{data.title}</Text>
          <View>
            <Text>{data.description}</Text>
          </View>
          </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  selectedimage: {
    width: "90%",
    height: "90%",
  },
})