import React, {Component} from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,Image,
    useColorScheme,
    View,Dimensions
  } from 'react-native';
import Images from '../Assets/image';
import { Button , Surface ,Card, Paragraph } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    top:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: windowWidth*0.03,
    },
    first: {
        width: windowWidth*0.47,
    },
    img: {
        width: 150,
        height: 150,
        marginLeft: windowWidth*0.32,
        marginBottom: 8,
        marginTop: 20,
        borderRadius: 50
    },
    card_first:{
        borderColor: '#E0E0E0',
        borderWidth: 1,
        marginLeft: windowWidth*0.03,
        marginRight: windowWidth*0.03,
        marginBottom: windowHeight*0.01,
    },
    title_one:{
        fontSize: 17 ,
    },
    logo:{
        height: 16,
        width: 16,
        marginLeft: windowWidth*0.55,
        marginTop: windowHeight*0.005
    },
    logo1:{
        height: 16,
        width: 16,
        marginLeft: windowWidth*0.6,
        marginTop: windowHeight*0.005
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
                                source={Images.lumi}
                                style={styles.img}
                            />
                    </View>
                    <Text></Text>

                    <Card  style={styles.card_first}>
                        <Card.Content style={{display: 'flex',flexDirection: 'row'}}>
                            <Paragraph style={styles.title_one}>Privacy policy</Paragraph>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo}
                                />
                        </Card.Content>
                    </Card>

                    <Card  style={styles.card_first}>
                        <Card.Content style={{display: 'flex',flexDirection: 'row'}}>
                            <Paragraph style={styles.title_one}>Terms Of use</Paragraph>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo}
                                />
                        </Card.Content>
                    </Card>
                    
                    <Card  style={styles.card_first}>
                        <Card.Content style={{display: 'flex',flexDirection: 'row'}}>
                            <Paragraph style={styles.title_one}>Contact Us</Paragraph>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo1}
                                />
                        </Card.Content>
                    </Card>
                    </View> 
                </Surface>
            </ScrollView>

        );
    }
}

export default Home;
