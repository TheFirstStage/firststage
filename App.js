/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login/index';
import Signup from './src/screens/SignUp/index';
import Dashboard from './src/screens/dashboard/index';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



//  import React, { Component } from 'react';
// import { View,Button } from 'react-native';
// import { ApplePayButton, PaymentRequest } from 'react-native-payments';

// type Props = {};

// export default class App extends Component<Props> {
//   showPaymentSheet = () => {
//     const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);
//     paymentRequest.show();
//   };
//   render() {
//     return (
//       <View style={{ margin: 50 }}>
//         <View style={{ height: 44 }}>
//           <Button
//             title="continue"
         
//             onPress={this.showPaymentSheet}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const METHOD_DATA = [{
//   supportedMethods: ['android-pay'],
//   data: {
//     supportedNetworks: ['visa', 'mastercard', 'amex'],
//     currencyCode: 'USD',
//     environment: 'TEST', // defaults to production
//     paymentMethodTokenizationParameters: {
//       tokenizationType: 'NETWORK_TOKEN',
//       parameters: {
//         publicKey: 'BOdoXP+9Aq473SnGwg3JU1aiNpsd9vH2ognq4PtDtlLGa3Kj8TPf+jaQNPyDSkh3JUhiS0KyrrlWhAgNZKHYF2Y='
//       }
//     }
//   }
// }];

// const DETAILS = {
//   id: 'basic-example',
//   displayItems: [
//     {
//       label: 'Movie Ticket',
//       amount: { currency: 'USD', value: '15.00' },
//     },
//   ],
//   total: {
//     label: 'Merchant Name',
//     amount: { currency: 'USD', value: '15.00' },
//   },
// };