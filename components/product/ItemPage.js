import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItemPage = () => {
  const route = useRoute();
  const { item } = route.params;

  const { title, description,price } = item;
  const navigation = useNavigation();

  const handleAddToCart = () => {
    // Perform the logic to add the item to the cart
    console.log('Item added to cart:', item);

    // Navigate to the cart screen and pass the title and price as route parameters
    navigation.navigate('cart', {
      title,
      price // Replace `item.price` with your actual price value
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.description}>Description: {description}</Text>
      <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ItemPage;