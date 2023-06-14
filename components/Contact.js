import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ContactUs = () => {
  const handleWhatsAppPress = () => {
    // Replace the phone number with your own phone number
    const whatsappUrl = 'https://wa.me/1234567890';
    Linking.openURL(whatsappUrl);
  };

  const handleLinkedInPress = () => {
    // Handle LinkedIn press event
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleWhatsAppPress}>
        <AntDesign name="twitter" size={32} color="white" />
        <Text style={styles.iconLabel}>Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLinkedInPress}>
        <FontAwesome name="linkedin" size={32} color="white" />
        <Text style={styles.iconLabel}>LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 40,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ContactUs;