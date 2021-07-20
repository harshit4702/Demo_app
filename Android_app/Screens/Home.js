import React, {Component} from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,Dimensions,Image
  } from 'react-native';
  import Images from '../Assets/image';

import { Button , Surface } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    first: {
        width: windowWidth*0.47,
    },
    img: {
        width: 170,
        height: 180,
        marginLeft: windowWidth*0.3,
        marginBottom: 8,
        marginTop: 20,
        borderRadius: 20
    },
    button: {
        marginBottom: 10,
        margin: 10,
        padding: 4,
        backgroundColor: '#007bff',
        color: 'white'
    }
});

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <Surface style={{minHeight: windowHeight*0.887}}>

                <View>
                    <View style={styles.first}>
                        <Image 
                            source={Images.home}
                            style={styles.img}
                        />
                    </View>
                    <Text></Text>
                    <View>
                        <Button onPress={()=>{this.props.navigation.navigate('Login')}} style={styles.button} mode='contained' >Login</Button>
                        <Button onPress={()=>{this.props.navigation.navigate('Register')} } style={styles.button} mode='contained'>Register</Button>
                        <Button  onPress={()=>{this.props.navigation.navigate('Policy')}} style={styles.button} mode='contained'>
                            About Us
                        </Button>
                    </View> 
                </View>
                </Surface>
            </ScrollView>
        );
    }
}

export default Home;
