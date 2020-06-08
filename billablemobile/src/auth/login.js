import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback} from 'react-native'
import {connect} from 'react-redux'
import Logo from '../components/logo'
import Video from '../components/videoPlayer';
import FlashMessage, {
    showMessage,
    hideMessage
  } from 'react-native-flash-message';

import {Icon, Input, Button} from '@ui-kitten/components';

const AlertIcon = (props) => (<Icon {...props} name='alert-circle-outline'/>);

export const login = ({navigation}) => {
  const [values,setValues] = React.useState({password: '', username: ''});
  const [secureTextEntry,
    setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const changeValue = (val, name) =>{
  
      setValues({
          ...values,
          [name]:val
      })
  }

  const Login = ()=>{
      const {username, password} = values;
      if(!username || !password){
          return showMessage({
            message: 'Please provide login details',
            type: 'warning'
          })
      }
      if(username == 'Root' && password == '1234'){
        showMessage({
            message: `${username} logged in successfully`,
            type: 'success'
          })
        navigation.navigate('Home')
      }
  }

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry
        ? 'eye-off'
        : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={Styles.main}>
      <Video/>
      <View style={Styles.loginForm}>
        <View style={Styles.header}>
          <Logo sub/>
        </View>
        <View style={Styles.formFields}>
          <Input
            value={values.username}
            label='Username'
            size="large"
            textStyle={{color: 'white'}}
            placeholder='Debra'
            style={Styles.input}
            onChangeText={(e) => changeValue(e, 'username')}/>
          <Input
            value={values.password}
            label='Password'
            placeholder='****'
            size="large"
            textStyle={{color: 'white'}}
            accessoryRight={renderIcon}
            style={Styles.input}
            secureTextEntry={secureTextEntry}
            onChangeText={(e) => changeValue(e, 'password')}/>
          <Button onPress={Login}>Login</Button>
        </View>
      </View>

    </SafeAreaView>
  )

}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#010C13'

  },
  loginForm: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(1, 12, 19, 0.7)',
    padding: 30
  },
  formFields:{
      margin:20
  },
  head: {
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 10,
    color: 'white'
  }
})

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(login)
