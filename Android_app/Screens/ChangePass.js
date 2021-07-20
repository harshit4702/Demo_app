import React, {Component} from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,Dimensions
  } from 'react-native';
import { Button , Surface , TextInput , Snackbar} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    field: {
        margin:windowWidth*0.03
      },
      submit: {
        marginTop: 201,
        margin: 10,
        padding: 4,
        backgroundColor: '#007bff',
      },
      title: {
        textAlign: 'center',
        padding:5
      },
      success_clr: {
        marginBottom: 69,
        backgroundColor: '#009000'
      }
});

class Login extends Component {
    state = {
        email: "",
        password: "",
        confirm_pass: "",
        visible: false,
        message: "",
        disable_btn: false
    }

    onSubmit = ()=>{
        this.setState({disable_btn: true});
        this.setState({visible: true , message: 'Password Updated Successfully'})
        setTimeout(function(){
            this.setState({disable_btn: true})
            this.props.navigation.navigate('Home');
        }.bind(this), 500);
    }

    render() {
        return (
            <ScrollView>
                <Surface style={{minHeight: windowHeight*0.887}}>
                    <View>
                        <TextInput
                            style={styles.field}
                            label="Enter Email"
                            value={this.state.email}
                            mode="outlined"
                            onChangeText={email => this.setState({email: email})}
                        />
                        <TextInput
                            style={styles.field}
                            label="Enter Password"
                            value={this.state.password}
                            mode="outlined"
                            onChangeText={password => this.setState({password: password})}
                        />
                        <TextInput
                            style={styles.field}
                            label="Confirm Password"
                            value={this.state.confirm_pass}
                            mode="outlined"
                            onChangeText={confirm_pass => this.setState({confirm_pass: confirm_pass})}
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
                            Submit
                        </Button>

                    </View> 
                </Surface>
            </ScrollView>
        );
    }
}

export default Login;
