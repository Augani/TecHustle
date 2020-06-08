import React from 'react'
import { StyleSheet} from 'react-native'
import {Icon} from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IconCustom = (props) => (
  <TouchableOpacity style={props.active && props.bottom?Styles.active:props.bottom?{width: '100%', height: '100%',padding:20,}:{}} onPress={props.clicked}>
    <Icon
      style={Styles.icon}
      fill={props.active
      ? props.color
      : 'grey'}
      name={props.name}/>
  </TouchableOpacity>
);

const Styles = StyleSheet.create({

  icon: {
    width: 32,
    height: 32
  },
  active:{
      width: '100%',
      height: '100%',
      borderTopColor: '#FF9824',
      borderTopWidth: 1,
      padding:20,
      
  }
})

export default IconCustom;
