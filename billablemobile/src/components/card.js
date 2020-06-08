import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Card, Text, Button ,  ButtonGroup} from '@ui-kitten/components';

const card = (props) => {
  return (
    <>
        <Card style={styles.container}>
     
       
        <View style={styles.body}>
        <View style={styles.row}>
        <Text style={styles.text} status='control' category="label">From </Text>
        <Text style={styles.text} status='control' category="label"> {props.data.from} </Text>
        <Text style={styles.text} status='control' category="label">to </Text>
        <Text style={styles.text} status='control' category="label">{props.data.to}</Text>
        </View>

         <Text style={styles.text} status='control' category="label">at {props.data.for}</Text>
        </View>
        
        <View style={styles.footer}>
        <ButtonGroup style={styles.buttonGroup} appearance='outline'>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ButtonGroup>
        </View>
    </Card>
    
    </>
  )
}

export default card

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
   
  
  },
  text:{
      fontFamily: 'Tera',
      fontSize: 20
  },
  header: {
    height: '20%',
    width: '100%'
  },
  row:{
     
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems:'center',
  },
  body: {
    width: '100%',
    height: '70%',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  container:{
    borderWidth: 0,
      height: 200,
      padding: 0,
      backgroundColor: 'transparent'
  }
  
})
