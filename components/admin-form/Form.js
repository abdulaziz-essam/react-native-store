import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CameraScreen, } from 'react-native-camera-kit';

class MyCameraScreen extends Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    console.log(captureImages);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CameraScreen
          actions={{ leftButtonText: 'Cancel', rightButtonText: 'Done' }}
          onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
          flashImages={{
            on: require('../../assets/favicon.png'),
            off: require('../../assets/icon.png'),
            auto: require('../../assets/adaptive-icon.png'),
          }}
        />
      </View>
    );
  }
}

export default MyCameraScreen;
