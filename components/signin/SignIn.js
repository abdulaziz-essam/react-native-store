import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform sign-in logic here
    if (email && password) {
      // Send an Axios POST request to the server
      axios
        .get('http:// 10.0.2.2:3001/', {
        })
        .then(response => {
          // Handle the response from the server
          if (response.data.success) {
            Alert.alert('Success', 'Sign-in successful!');
          } else {
            Alert.alert('Error', response.data.message);
          }
        })
        .catch(error => {
          Alert.alert('Error', 'An error occurred during sign-in.');
          console.error(error);
        });
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignInComponent;