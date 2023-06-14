import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './SignUp';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignUpScreen;