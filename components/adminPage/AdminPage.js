import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import axios from 'axios';

const AdminPage = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://your-api.com/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddItem = async () => {
    try {
      const response = await axios.post('https://your-api.com/items', {
        name: itemName,
        price: itemPrice,
      });
      setItems([...items, response.data]);
      setItemName('');
      setItemPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateItem = async (itemId, newName, newPrice) => {
    try {
      const response = await axios.put(`https://your-api.com/items/${itemId}`, {
        name: newName,
        price: newPrice,
      });
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return response.data;
        }
        return item;
      });
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`https://your-api.com/items/${itemId}`);
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <TextInput
            style={styles.itemNameInput}
            value={item.name}
            onChangeText={(text) => handleUpdateItem(item.id, text, item.price)}
          />
          <TextInput
            style={styles.itemPriceInput}
            value={item.price}
            onChangeText={(text) => handleUpdateItem(item.id, item.name, text)}
          />
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteItem(item.id)}
        >
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Page</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={(text) => setItemName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Price"
          value={itemPrice}
          onChangeText={(text) => setItemPrice(text)}
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemNameInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  itemPriceInput: {
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff3b30',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 50,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminPage;