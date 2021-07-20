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
import { Button , Divider, Surface , Card ,Paragraph} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
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
    title_one:{
        fontSize: 17 ,
    },
    logo:{
        height: 16,
        width: 16,
        marginLeft: windowWidth*0.02,
        marginTop: windowHeight*0.01
    }
});

class MyProfile extends Component {
    render() {
        return (
            <ScrollView>
                <Surface style={{minHeight: windowHeight*0.887}}>
                    <View>
                        <View style={styles.first}>
                            <Image 
                                source={Images.profile}
                                style={styles.img}
                            />
                        </View>
                        <Text></Text>
                        <Divider style={{borderColor: '#E0E0E0' , borderWidth: 2}} />
                        <Text></Text>
                        <Text></Text>
                        
                        <View style={{display: 'flex' , flexDirection: 'row'}}>
                            <Text style={{fontSize: 19 , marginLeft: 25 , fontWeight: 'bold'}}>
                                Username
                            </Text>
                            <Text style={{fontSize: 19 , marginLeft: windowWidth*0.40 }}>
                                harshit     
                            </Text>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo}
                                />
                        </View>
                        <Divider style={{marginLeft: 25 , marginTop: 5 ,marginRight: 30}} />
                        <Text></Text>
                        <View style={{display: 'flex' , flexDirection: 'row'}}>
                            <Text style={{fontSize: 19 , marginLeft: 25 , fontWeight: 'bold'}}>
                                Gender
                            </Text>
                            <Text style={{fontSize: 19 , marginLeft: windowWidth*0.40 }}>
                                Male     
                            </Text>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo}
                                />
                        </View>
                        <Divider style={{marginLeft: 25 , marginTop: 5 ,marginRight: 30}} />
                        <Text></Text>
                        <View style={{display: 'flex' , flexDirection: 'row'}}>
                            <Text style={{fontSize: 19 , marginLeft: 25 , fontWeight: 'bold'}}>
                                Location
                            </Text>
                            <Text style={{fontSize: 19 , marginLeft: windowWidth*0.40 }}>
                                Lucknow     
                            </Text>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo}
                                />
                        </View>
                        <Divider style={{marginLeft: 25 , marginTop: 5 ,marginRight: 30}} />
                        <Text></Text>
                        <View style={{display: 'flex' , flexDirection: 'row'}}>
                            <Text style={{fontSize: 19 , marginLeft: 25 , fontWeight: 'bold'}}>
                                Bio
                            </Text>
                            <Text style={{fontSize: 19 , marginLeft: windowWidth*0.40 }}>
                                This is me     
                            </Text>
                            <Image 
                                    source={Images.right}
                                    style={styles.logo}
                                />
                        </View>
                        <Divider style={{marginLeft: 25 , marginTop: 5 ,marginRight: 30}} />

                    </View> 
                </Surface>
            </ScrollView>
        );
    }
}

export default MyProfile;
