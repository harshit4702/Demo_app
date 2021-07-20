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
        marginTop: 110,
        margin: 10,
        padding: 4,
        backgroundColor: '#007bff'
    },
      title: {
        textAlign: 'center',
        padding:5
      },
      error_clr: {
        marginBottom: 60,
        // marginBottom: windowHeight*0.658,
        backgroundColor: 'red'
      },
      success_clr: {
          marginBottom: 68,
        // marginBottom: windowHeight*0.658,
        backgroundColor: '#009000'
      }
});

class Register extends Component {
    state = {
        name: "",
        email: "",
        age: "",
        password: "",
        visible: false,
        message: "",
        disable_btn: false
    }

    onSubmit = ()=>{
        this.setState({disable_btn: true});
        this.setState({visible: true , message: 'Logging In'})
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
                        <TextInput
                            style={styles.field}
                            label="Enter your Email"
                            value={this.state.email}
                            mode="outlined"
                            onChangeText={email => this.setState({email: email})}
                        />
                        <TextInput
                            style={styles.field}
                            label="Enter your name"
                            value={this.state.name}
                            mode="outlined"
                            onChangeText={name => this.setState({name: name})}
                        />
                        <TextInput
                            keyboardType="numeric" 
                            style={styles.field}
                            label="Enter your age"
                            value={this.state.age}
                            mode="outlined"
                            onChangeText={age => this.setState({age: age})}
                        />
                        <TextInput
                            style={styles.field}
                            label="Create Password"
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
                            Register
                        </Button>
                    </View> 
                </Surface>
            </ScrollView>
        );
    }
}

export default Register;
