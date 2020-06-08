import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {connect} from 'react-redux';
import {
  Text,
  Divider,
  List,
  ListItem,
  Spinner,
  Input,
  Button
} from '@ui-kitten/components';
import Card from '../components/card';
import DateView from '../components/dateView';
import {addTime} from '../redux/actions'
import Icon from '../components/icon';
import DateTimePicker from '@react-native-community/datetimepicker';
import FlashMessage, {showMessage, hideMessage} from 'react-native-flash-message';

const Create = (props) => {
  const [values,
    setValues] = React.useState({for: '', from: new Date(), to: new Date(), rate: '',time1: false, time2: false})
  

  const changeValue = (val, name) => {
    setValues({
      ...values,
      [name]: val
    })
  }

  const updateTime = () => {}

  const CreateCard = () => {
    for (let c in values) {
      if (!values[c] && (c == 'time1'&& c == 'time2')) 
        return showMessage({message: 'Please fill all fields', type: 'warning'})
    }
    let newValues = values;
    newValues.id = new Date().valueOf();
    let year = new Date().getFullYear();
    let month  = new Date().getMonth()+1;
    let day = new Date().getDate();
    newValues.Date = `${year}-${month.toString().length == 1?'0'+month:month}-${day.toString().length ==1?'0'+day: day}`;
    
    delete newValues.time1;
    delete newValues.time2;
    props.addTime(newValues)
    showMessage({message: 'Timecard created successfuly', type: 'success'});
    props
      .navigation
      .goBack()
  }
  const Close = () => {
    props
      .navigation
      .goBack();
  }

  const onChange = (e, time) => {
   
    if (time == 'time1') {
      let t = e.nativeEvent.timestamp;
      time = new Date(t);
      var hours = time.getHours();
      var minutes = "0" + time.getMinutes();
      var formattedTime = hours + ':' + minutes.substr(-2);
    setValues({
        ...values,
        from: formattedTime,
        time1: false
    })
    // setTime1(false)
    }else {
        let t = e.nativeEvent.timestamp;
        time = new Date(t);
        var hours = time.getHours();
        var minutes = "0" + time.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
      setValues({
          ...values,
          to: formattedTime,
          time2: false
      })
    }
   
    
  }
  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <Text status="primary" category="h5">Create time card</Text>
        <Icon
          clicked={Close}
          color="#FF9824"
          active={true}
          name="close-circle-outline"/>
      </View>

      <View style={Styles.page}>
        <View style={Styles.formFields}>
          <Input
            value={values.username}
            label='Company name'
            size="large"
            textStyle={{
            color: 'white'
          }}
            placeholder='Google'
            style={Styles.input}
            onChangeText={(e) => changeValue(e, 'for')}/>
          <View style={Styles.timepicker}>
            <Input
              value={values.from}
              label='Start Time'
              size="large"
              textStyle={{
              color: 'white'
            }}
              placeholder='08:30'
              disabled
              onPress={updateTime}
              style={Styles.timeInput}
              onChangeText={(e) => changeValue(e, 'from')}/>
            <Button style={Styles.button} onPress={() => setValues({...values,time1: 'time'})}>Set</Button>
            {values.time1
              ? <DateTimePicker
                  testID="dateTimePicker1"
                  value={new Date()}
                  mode={values.time1}
                  is24Hour={true}
                  display="default"
                  onChange={(e) => onChange(e, 'time1')}/>
              : null}

          </View>

          <View style={Styles.timepicker}>
            <Input
              value={values.to}
              label='End TIme'
              size="medium"
              placeholder="16:40"
              disabled
              textStyle={{
              color: 'white'
            }}
              style={Styles.timeInput}
              onChangeText={(e) => changeValue(e, 'to')}/>
            <Button style={Styles.button} onPress={() => setValues({...values, time2: 'time'})}>Set</Button>

            {values.time2
              ? <DateTimePicker
                  testID="dateTimePicker2"
                  value={new Date()}
                  mode={values.time2}
                  is24Hour={true}
                  display="default"
                  onChange={(e) => onChange(e, 'time2')}/>
              : null}

          </View>

          <Input
            value={values.rate}
            label='Your rate'
            size="large"
            textStyle={{
            color: 'white'
          }}
            placeholder='200'
            style={Styles.input}
            onChangeText={(e) => changeValue(e, 'rate')}/>
          <Button onPress={CreateCard}>Create</Button>
        </View>
      </View>
    </View>
  )

}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#010C13',
    display: 'flex'
  },
  page: {
    height: '85%',
    width: '100%',
    display: 'flex',
    padding: 10
  },
  button: {
    backgroundColor: 'transparent',

    borderColor: 'transparent'
  },
  formFields: {
    width: '100%',
    height: '100%'
  },
  timepicker: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  header: {
    height: '15%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 10
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 10,
    color: 'white'
  },
  timeInput: {
    backgroundColor: 'transparent',
    marginBottom: 10,
    color: 'white',
    borderColor: 'transparent'
  }
})

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  addTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
