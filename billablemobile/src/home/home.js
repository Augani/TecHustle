import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {connect} from 'react-redux';
import {Text,Divider, List, ListItem, Spinner } from '@ui-kitten/components';
import Card from '../components/card';
import DateView from '../components/dateView';
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const Home = (props) => {
    const [mounted, setMounted] = React.useState(false)
    const [day,setDay] = React.useState(new Date());
    const [data, setData] = React.useState(props.TIME_DATA)
    const renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
        />
      );

      const noTime = (date)=>{
        date.setHours(0, 0, 0, 0);
        return date;
      }

      const filterData = ()=>{
        let filtered =  props.TIME_DATA.filter(item=>new Date(item.Date).toString().split('T')[0] == day.toString().split('T')[0]);
        setData(filtered);
      }

     
      React.useEffect(()=>{
        setMounted(true)
        filterData()


      },[day])

  return (
    <View style={Styles.main}>
      <View style={Styles.dates}>
        <Text style={Styles.month} category='s1' status="primary">{monthNames[new Date().getMonth()]}</Text>
        <DateView dateChanged={setDay} />
      </View>
     <ScrollView style={Styles.page}>
     {mounted && data.length?data.map((item, index)=>(
         <Card data={item} key={item.id}/>
     )): <View style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
         <Spinner size='large'/>
         </View>}
     </ScrollView>
    </View>
  )

}

const Styles = StyleSheet.create({
  main: {
    flex: 1
  },
  dates: {
    height: '15%',
    width: '100%'
  },
  month: {
    marginStart: 10,
    fontFamily: 'Tera'
  },
  page:{
      flex:1,
  },
  container:{
      height: '100%'
  }
})



  
  

const mapStateToProps = (state) => (state)

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
