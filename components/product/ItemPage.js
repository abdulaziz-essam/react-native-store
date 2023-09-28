import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

const ItemPage = () => {
  const route = useRoute();
  const { item } = route.params;

  const { title, description } = item;

  // Access the title and description and perform any necessary operations

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.description}>Description: {description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ItemPage;