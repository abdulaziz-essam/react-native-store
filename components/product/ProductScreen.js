import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemPage from './ItemPage';

const ProductScreen = () => {
  // Example product data
  const product = {
    name: 'Product Name',
    price: '$9.99',
    details: 'Product details go here...',
  };

  return (
    <View style={styles.container}>
      <ItemPage
        name={product.name}
        price={product.price}
        details={product.details}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ProductScreen;