import React, { Component } from 'react'
import { View,  StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import IconCall from './icon';

const BottomBar =(props)=>{
    const [active, setActive] = React.useState('home');
    
    const setActiveIcon = (icon)=>{
        setActive(icon)
    }
    const change = (page)=>{
        setActive(page);
        props.page(page)
    }
    return (
      <View style={Styles.main}>
          <IconCall bottom color="#FF9824" clicked={()=>change('home')}  active={active=='home'} name="home-outline" />
          <IconCall bottom color="#FF9824" clicked={()=>change('settings')} active={active=='settings'} name="settings-outline" />
         
      </View>
    )
  
}

const Styles = StyleSheet.create({
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32,
      },
})



const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)
