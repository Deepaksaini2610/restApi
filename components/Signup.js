import React, { Component } from "react";
import { TextInput, View,StyleSheet, TouchableOpacity,Text } from "react-native";





export default class Signup extends Component {
  constructor(){
    super();
    this.state = ({
        name:"",
        data:[]
    })
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
  }
    getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch("https://reactnative.dev/movies.json");
    const json = await response.json();
    return json.description;
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
    this.state.data = getMoviesFromApiAsync();
}, [])

  handleChange(e){
    this.setState({name:e.target.value});
  }
  
  handleSubmit(e){
    const ans = this.getMoviesFromApiAsync()
    this.state.data = ans
    // console.log(this.state.name);

  }
  render() {
    return (
      <View style={styles.mainContainer}>





        <form onSubmit={this.handleSubmit}>
          <TextInput
            style={styles.inputstyle}
            placeholder="put color here"
            placeholderTextColor="blue"
            value={this.state.name}
            onChange = {this.handleChange}
          />
          <TextInput
            style={styles.inputstyle}
            placeholder="put color here"
            placeholderTextColor="blue"
          />
          <TextInput
            style={styles.inputstyle}
            placeholder="put color here"
            placeholderTextColor="blue"
          />
          <TextInput
            style={styles.inputstyle}
            placeholder="put color here"
            placeholderTextColor="blue"
          />
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              width: 100,
              textAlign: "center",
              cursor: "pointer",
            }}
            onPress ={this.handleSubmit}
          >
            <Text>signup</Text>
          </TouchableOpacity>
        </form>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor:'whitesmoke',
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        marginTop:90,
        marginBottom:0,
        padding:30,
        // borderWidth:2,
        width:'50%',
        height:'100%',
        margin:'auto'
    },
    inputstyle:{
        // flex:1,
        borderWidth:1,
        color:'black',
        // width:'50%',
        // alignItems:'center',
        justifyContent:'center',
        position:'relative',
        left:2,
        textAlign:'center'
    }
})