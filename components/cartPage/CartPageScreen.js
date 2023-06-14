import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CartPage from './CartPage';

const CartScreen = ({ navigation }) => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];

  const handleRemoveItem = (itemId) => {
    // Remove the item from the cart
    console.log(`Removed item with ID ${itemId}`);
  };

  return (
    <View style={styles.container}>
      <CartPage cartItems={cartItems} onRemoveItem={handleRemoveItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CartScreen;