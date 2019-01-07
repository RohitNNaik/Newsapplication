//i did not get the api for liked data from the server.
//so i used redux here to store the data of liked .


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator,ScrollView,Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { connect } from 'react-redux';
import mostpopular from '../Actions'
import * as services from '../Services/GetNews';


export default class Favauorate extends Component{
    static navigationOptions =  ({ navigation }) => ({
      title: 'NewsEditor',
      headerStyle: {
        backgroundColor: 'black',
      },
    });
    constructor(props) {
      super(props);
      this.state = {
        isLoading:false,
        data:[]
      }
      this.onrender = this.onrender.bind(this);
    }
    componentDidMount(){
      export const getIteam = async () => {
        try {
            Id = await AsyncStorage.getItem('Id') || null;
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return Id;
    }
    //if you are using redux
    data = this.props.state.mostpopular
    
    //   services.GetNews(Id).then((response)=>{
    //   console.log(response);
    //   this.setState({
    //     data:responce
    //   })
    //   })
    }
    render() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loaderSytle}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
      return (
        <ScrollView style={styles.container}>
            <View style={styles.commonStyle}>
           { //this.state.data.length > 0 && this.state.data.map((item, index) => {
             data.map((item, index)=>{
              //this.onrender(item)
              <Card>
    <CardImage 
      source={{uri: item.image}} 
     
    />
    <CardTitle 
       title={item.title}
     // subtitle="This is subtitle"
     />
    <CardContent text={item.description} />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => { this.dispatch.mostpopular}}
        title="Push"
        color="blue"
      />
    </CardAction>
  </Card>
  
           })
           }
            </View>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'white',
    },
     //Loader Style.
     loaderSytle: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonStyle:{
      justifyContent: 'center',
       alignItems: 'center',
    },
    image:{
      height:300,
      width:300
    }
  })
  const mapStateToProps = state => ({
    mostpopular:state.mostpopular
   })
   
   const mapDispatchToProps = dispatch => ({
    cardsDispatchData,
   })
   
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(Favauorate)
  