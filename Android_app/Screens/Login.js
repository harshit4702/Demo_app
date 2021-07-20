import React, {Component} from 'react';
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
import { Button , Surface , TextInput , Snackbar} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    field: {
        margin:windowWidth*0.03,
        borderColor: 'red'
      },
      submit: {
        marginTop: 140,
        margin: 10,
        padding: 4,
        backgroundColor: '#007bff',
      },
      first: {
        width: windowWidth*0.47,
       },
     img: {
        width: 100,
        height: 100,
        marginLeft: windowWidth*0.38,
        marginBottom: 8,
        marginTop: 20,
        borderRadius: 30
      },
      success_clr: {
        marginBottom: 100,
        backgroundColor: '#009000'
      }
});

class Login extends Component {
    state = {
        email: "",
        password: "",
        visible: false,
        message: "",
        disable_btn: false
    }

    onSubmit = ()=>{
        this.setState({disable_btn: true});
        this.setState({visible: true , message: 'Login Successfull'})
        setTimeout(function(){
            this.setState({disable_btn: false})
            this.props.navigation.navigate('MyProfile');
        }.bind(this), 500);
    }

    render() {
        return (
            <ScrollView>
                <Surface style={{minHeight: windowHeight*0.887}}>
                    <View>
                        <View style={styles.first}>
                            <Image 
                                source={Images.log}
                                style={styles.img}
                            />
                        </View>
                        <Text></Text>
                        <TextInput
                            style={styles.field}
                            label="Enter Email"
                            value={this.state.email}
                            mode="outlined"
                            underlineColorAndroid="tran"
                            onChangeText={email => this.setState({email: email})}
                        />
                        <TextInput
                            style={styles.field}
                            label="Enter Password"
                            value={this.state.password}
                            mode="outlined"
                            onChangeText={password => this.setState({password: password})}
                        />
                        <Snackbar
                            duration={500}
                            visible={this.state.visible}
                            style={styles.success_clr}
                            onDismiss={()=> {this.setState({visible: false , message: "" })}} >
                            { this.state.message }
                        </Snackbar>

                        <Button 
                            disabled={this.state.disable_btn}
                            style={styles.submit}
                            onPress={this.onSubmit}
                            mode="contained"
                            >
                            Login
                        </Button>
                        <Text 
                            style={{textAlign: 'right', marginRight: windowWidth*0.02 ,marginTop: 10, fontSize: 17}}
                            onPress={()=>{this.props.navigation.navigate('ChangePass')}}
                        >
                            Forget Password
                        </Text>
                    </View> 
                </Surface>
            </ScrollView>
        );
    }
}

export default Login;
