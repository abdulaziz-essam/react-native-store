import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import ItemList from './components/Items';
import Product from './components/product/ProductScreen'
import ContactUs from './components/Contact';
import SignInScreen from './components/signin/SignInScreen';
import SignUp from './components/signup/SignUp';
import AdminScreen from './components/adminPage/AdminScreen';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{title: 'item'}}
        />
            <Stack.Screen
          name="admin"
          component={AdminScreen}
          options={{title: 'Admin Page'}}
        />
           <Stack.Screen
          name="signin"
          component={SignInScreen}
          options={{title: 'signin'}}
        />
            <Stack.Screen
          name="signup"
          component={SignUp}
          options={{title: 'signup'}}
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