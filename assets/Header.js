import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


function HeaderDesign(){
    return (
        <View>
            <Text style={styles.textHeader}>Jogo da Memória</Text>
        </View> 
    )
}

export default class Header extends Component {
    render() {
      return (
        <View style={styles.header}>

            <HeaderDesign/>
          
        </View>
      );
    }
    
  }

const styles = StyleSheet.create({
  
    header: {
        flex: 0.2,
        backgroundColor: '#ab50ca',
        justifyContent: 'center',
        alignItems: 'center',
        
      },

    textHeader: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        
    },
  
    
  })