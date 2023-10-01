import React, { useState } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from "react-native-image-picker"

const AdminForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.uri) {
        console.log('Selected image URI: ', response.uri);
        // Handle the selected image here
      }
    });
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={selectedImage} style={styles.image} resizeMode="contain" />
      )}
      <Button title="Pick Image from Library" onPress={handleImagePicker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default AdminForm;