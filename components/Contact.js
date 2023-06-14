import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ContactUs = () => {
  const handleWhatsAppPress = () => {
    // Handle WhatsApp press event
  };

  const handleLinkedInPress = () => {
    // Handle LinkedIn press event
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleWhatsAppPress}>
        <AntDesign name="whatsapp" size={32} color="green" />
        <Text style={styles.iconLabel}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLinkedInPress}>
        <FontAwesome name="linkedin" size={32} color="#0077B5" />
        <Text style={styles.iconLabel}>LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:200
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactUs;