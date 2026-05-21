import React,{Component} from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native';

export default class apk extends Component{
    render(){
        return(
        <SafeAreaView style={StyleSheet.container}>
          <Text>Olá mundo!!!</Text>
        </SafeAreaView>
        )
    }
}

let styles= StyleSheet.creat({
    container:{
        flex:1
    }
});