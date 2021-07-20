/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React, {Component} from 'react';
 // import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
   Linking,
   Alert,
 } from 'react-native';
 import Navigation from './Android_app/Navigation/StackNavigation';
 
import {DefaultTheme, Provider as PaperProvider , Snackbar} from 'react-native-paper';
 
const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
};
 
class App extends Component {
  state = {
    connection_status: false,
    snackbar: false,
  };

  render() {
    return (
          <PaperProvider theme={theme}>
            <SafeAreaView style={styles.container}>
              <StatusBar backgroundColor="#0050cb" />
                <Navigation />
            </SafeAreaView>
          </PaperProvider>
    );
  }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 