import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import firebase from 'react-native-firebase'
import Loading from './Loading'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null, loading: false };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    var self = this;
    const { email, password } = this.state;
    self.setState({ loading: true });
    if (!email || !password)
      self.setState({ errorMessage: "Input fields cannot be blank.", loading: false });
    else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          self.setState({ loading: false });
          this.props.navigation.navigate('App');
        })
        .catch(error => self.setState({ errorMessage: error.message, loading: false }))
    }
  }

  render() {
    if (this.state.loading)
      return <Loading />;
    else
      return (
        <View style={styles.container}>
          <Text style={[styles.textstyles, { textAlign: 'center' }]}>Sign Up</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red', textAlign: 'auto' }}>
              {this.state.errorMessage}
            </Text>}
          <View style={styles.miniContainer}>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="white"
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholderTextColor="white"
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <View style={styles.buttonstyles}>
              <Button color="#cd5c5c" title="Sign Up" onPress={this.handleSignUp} />
            </View>
            <View style={styles.buttonstyles}>
              <Button
                color="#cd5c5c"
                title="Already have an account? Login"
                onPress={() => this.props.navigation.navigate('Login')}
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
