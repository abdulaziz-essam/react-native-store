import React from 'react';
import { StyleSheet, View } from 'react-native';
import AdminPage from './AdminPage';

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <AdminPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AdminScreen;