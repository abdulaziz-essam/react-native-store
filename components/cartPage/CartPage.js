import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CartPage = () => {
  const route = useRoute();
  const { title, price } = route.params;
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: title, price: price },
    // Rest of the cart items
  ]);

  const [removalMessage, setRemovalMessage] = useState('');

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setRemovalMessage('Item has been removed');

    setTimeout(() => {
      setRemovalMessage('');
    }, 2000); // Adjust the duration as needed (e.g., 2000ms = 2 seconds)
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <TouchableOpacity onPress={() => removeItemFromCart(item.id)} style={styles.button}>
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleContinueShopping = () => {
    navigation.navigate('items');
  };

  const handleCheckout = () => {
    navigation.navigate('payment',{price});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      {removalMessage ? <Text style={styles.removalMessage}>{removalMessage}</Text> : null}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.cartList}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>{totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={handleContinueShopping} style={styles.button}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCheckout} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  cartList: {
    flex: 1,
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removalMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
});

export default CartPage;