import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import firebase from 'react-native-firebase'
import Loading from './Loading';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null, loading: false };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    var self = this;
    const { email, password } = self.state;
    self.setState({ loading: true });
    if (!email || !password)
      self.setState({ errorMessage: "Input fields cannot be blank.", loading: false });
    else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          self.setState({ loading: false });
          self.props.navigation.navigate('App');
        })
        .catch(error => {
          self.setState({ errorMessage: error.message, email: '', password: '', loading: false });
        })
    }
  }

  render() {
    if (this.state.loading)
      return <Loading />;
    else
      return (
        <View style={styles.container}>
          <Text style={[styles.textstyles, { textAlign: 'center' }]}>Login</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red', textAlign: 'auto' }}>
              {this.state.errorMessage}
            </Text>}
          <View style={styles.miniContainer}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor="white"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <View style={styles.buttonstyles}>
              <Button title="Login" color="#cd5c5c" onPress={this.handleLogin} />
            </View>
            <View style={styles.buttonstyles}>
              <Button
                color="#cd5c5c"
                title="Don't have an account? Sign Up"
                onPress={() => this.props.navigation.navigate('SignUp')}
              />
            </View>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    color: 'white',
    backgroundColor: '#cd5c5c',
    borderColor: '#cd5c5c',
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  textstyles: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'sans-serif-thin',
  },
  buttonstyles: {
    marginVertical: 8
  }
})

