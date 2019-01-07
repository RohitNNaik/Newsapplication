import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AsyncStorage } from "react-native";
import { connect } from 'react-redux'

import * as Services from '../Services/PostNews'


export default class NewsEditor extends Component{
 
  static navigationOptions =  ({ navigation }) => ({
    title: 'NewsEditor',
    headerStyle: {
      backgroundColor: 'black',
    },
  });
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
        category: '',
        author:'',
        image:'',
    };
  }
  onHandletitle(text) {
    this.setState({
      title: text
    })
}

onHandleDescription(text) {
  this.setState({
    description: text
  })
}

onHandleCategory(text) {
  this.setState({
    category: text
  })
}

onHandleAuthor(text) {
  this.setState({
    author: text
  })
}
onHandleImage(text) {
  this.setState({
    image: text
  })
}
onPublish(){
  Services.PostNews(this.state.title,this.state.description,this.state.category
    ,this.state.author,this.state.image).then((responce)=>{
     

//Save User Token into the local storage.
export const saveIteam = async Token => {
    try {
        await AsyncStorage.setItem('Id', Id);
    } catch (error) {
        // Error Storing data
        console.log(error.message);
    }
};
//if you are using redux 
this.props.Dispatch(Id)
    })

}


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.titleLayout}>
                    <TextInput style={styles.layoutcustome}
                        placeholder='title'
                        onChangeText={this.onHandletitle}
                        value={this.state.title}
                    />
                    </View>
                    <View style={styles.descreptionLayout}>
                    <TextInput style={styles.layoutcustome}
                        placeholder='Description'
                        onChangeText={this.onHandleDescription}
                        value={this.state.Description}
                    />
                    </View>
                    <View style={styles.catogeryLayout}>
                    <TextInput style={styles.layoutcustome}
                        placeholder='Category'
                        onChangeText={this.onHandleCategory}
                        value={this.state.Category}
                    />
                    </View>
                    <View style={styles.authorLayout}>
                    <TextInput style={styles.layoutcustome}
                        placeholder='Author'
                        onChangeText={this.onHandleAuthor}
                        value={this.state.Author}
                    />
                    </View>
                    <View style={styles.imageLayout}>
                    <TextInput style={styles.layoutcustome}
                        placeholder='Image URL only'
                        onChangeText={this.onHandleImage}
                        value={this.state.Image}
                    />
                    </View>
                    <View style={ styles.buttonSpace}>
                                <TouchableOpacity
                                    onPress={this.onPublish} 
                                >
                                    <Text style={styles.buttonTextStyle}>PUBLISH</Text>
                                </TouchableOpacity>
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
  buttonSpace: {
    paddingTop: 40
},
 //Button Text Style.
 buttonTextStyle: {
  fontSize: 20,
  color: 'blue',
  textAlign: 'center'
},

//Button Style.
buttonStyle: {
  padding: 10,
  backgroundColor: 'white',
  borderRadius: 5,
  width: 250
},
layoutcustome: {
  borderBottomWidth: 1,
  borderColor: 'grey',
  width: "90%",
  padding: 10
},

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsEditor)