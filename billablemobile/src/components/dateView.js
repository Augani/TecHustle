import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';

function myFunction() {
  var today = new Date();
  var month = today.getMonth();
  return daysInMonth(month + 1, today.getFullYear());
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
export default function DateView(props) {


    const [theDay, setTheDay] = React.useState(new Date().getDate())
    const [thedata, setTheData] = React.useState([]);
  const setDate = (day) => {}

  const setIt = (num)=>{
      setTheDay(num);
      let updateDate = new Date(new Date().getFullYear(),new Date().getMonth(), num);
      props.dateChanged(updateDate);
  }

 

  React.useEffect(()=>{
    
        let days = myFunction();
        let day = theDay;
        let data = [];
        for (let x = 1; x <= days; x++) {
          data.push(x)
        }
        setTheData(data)
     
  },[])
  return (
    <ScrollView ref={scrollView=>{
       if(scrollView != null)scrollView.scrollTo({x:20 * new Date().getDate() * 1.2, animated: true})
    }} horizontal>
      {!thedata.length?null:
          thedata.map(i => (
            <TouchableOpacity key={i} onPress={()=>setIt(i)}>
              <Text
                style={Styles.text}
                status={i == theDay
                ? 'primary'
                : 'control'}
                category={i == theDay
                ? 'h1'
                : 'h4'}>
                {i}
              </Text>
            </TouchableOpacity>
          ))
      }
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  text: {
    marginEnd: 20,
    marginStart: 20,
    fontFamily: 'Tera'
  }
})
