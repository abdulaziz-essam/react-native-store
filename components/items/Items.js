import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Cupcake',
    description: '',
    price:10,
    imageSource: require('../../assets/favicon.png'),
  },
  {
    id: '2',
    title: 'Water',
    price:34,
    description: '',
    imageSource: require('../../assets/favicon.png'),
  },
  {
    id: '3',
    title: 'Milk',
    description: '',
    price:20,
    imageSource: require('../../assets/favicon.png'),
  },
  {
    id: '4',
    title: 'Milk',
    price:83,
    description: '',
    imageSource: require('../../assets/favicon.png'),
  },
];

const Item = ({ title, description,price, imageSource }) => {
  const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.navigate('itempage', { item: { title, description ,price} });
    };


  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <View style={styles.itemContent}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ItemList = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} imageSource={item.imageSource} price={item.price} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 75,
    marginBottom: 10,
  },
});

export default ItemList;