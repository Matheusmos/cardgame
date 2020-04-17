import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import Header from './assets/Header.js'
import Footer from './assets/Footer.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Header/>
      <ScrollView>

      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#772c9a',
  },
});
