import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import ItemList from './components/Items';
import Product from './components/product/ProductScreen'
import ContactUs from './components/Contact';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="contact">
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{title: 'item'}}
        />
          <Stack.Screen
          name="itempage"
          component={Product}
          options={{title: 'item page'}}
        />
           <Stack.Screen
          name="contact"
          component={ContactUs}
          options={{title: 'Contact'}}
        />
             <Stack.Screen
          name="items"
          component={ItemList}
          options={{title: 'Welcome'}}
        />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack