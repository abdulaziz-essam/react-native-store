import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignIn from './SignIn';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignInScreen;