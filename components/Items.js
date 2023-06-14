import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'Cupcake',
    description: '',
    imageSource: require('../assets/favicon.png'),
  },
  {
    id: '2',
    title: 'Water',
    description: '',
    imageSource: require('../assets/favicon.png'),
  },
  {
    id: '3',
    title: 'Milk ',
    description: '',
    imageSource: require('../assets/favicon.png'),
  },
];

const Item = ({ title, description, imageSource }) => (
  <View style={styles.item}>
    <View style={styles.itemContent}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const ItemList = () => {
    const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} imageSource={item.imageSource} />
  );
//   this method for navigate for specific item page
  const handlePress = () => {
    navigation.navigate('MyScreen');
  };

  return (
 
    <View style={styles.container}>
      <FlatList
        data={DATA}
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