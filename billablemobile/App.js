import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from './theme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigation from './navigation'
import Reducer from './src/redux/reducer';
import FlashMessage, {
  showMessage,
  hideMessage
} from 'react-native-flash-message'
const store = createStore(Reducer);

export default function App() {
  return (
  <Theme>
   <Provider store={store}>
    <Navigation/>
    <FlashMessage position="top" style={{zIndex: 5000}} floating={true} />
   </Provider>
  </Theme>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
