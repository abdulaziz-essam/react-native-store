import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

const PaymentComponent = ({ route }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const { price } = route.params;

  const handlePayment = () => {
    // Perform payment processing logic here
    if (cardNumber && expiryDate && cvv) {
      Alert.alert('Payment Successful', `Thank you for your purchase! Price: ${price}`);
    } else {
      Alert.alert('Payment Failed', 'Please enter valid payment details.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
      />
      <Button title="Pay" onPress={handlePayment} />
      <Text style={styles.priceText}>Price: {price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  priceText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentComponent;