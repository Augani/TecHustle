import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Platform, StatusBar, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import Logo from '../components/logo'
import IconCall from '../components/icon';
import BottomBar from '../components/bottomBar';
import Home from './home';
import Settings from './settings';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;



export const Index = ({navigation, state}) => {
  
    const [active, setActive] = React.useState('home')

    const gotoCreateTimeCard = (p)=>{
        navigation.navigate('Create')
    }

    const changePage = (page)=>{
        setActive(page)
    }

    const renderPage = (page)=>{
        switch(page){
            case 'home':
            return <Home/>;
            case 'settings':
            return <Settings/>
        }
    }
  return (
    <SafeAreaView>
     <View style={Styles.header}>
        <Logo size={16}/>
        <IconCall clicked={gotoCreateTimeCard}  color="#FF9824" active={true} name="plus-outline" />
     </View>
     <View style={Styles.page}>
        {renderPage(active)}
     </View>
     <View style={Styles.footer}>
        <BottomBar page={changePage} />
     </View>
    </SafeAreaView>
  )

}

const Styles = StyleSheet.create({
    main:{
        flex: 1,
       
    },
    header:{
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#010C13',
        paddingEnd: 10,
        paddingStart: 10
    },
    page:{
        width: '100%',
        height: '75%',
        backgroundColor: '#010C13'
    },
    footer:{
        height: '10%',
        width: '100%',
        backgroundColor: '#010C13'
    },
    statusBar: {
        height: STATUSBAR_HEIGHT
        }
})

const mapStateToProps = (state) => (state)

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Index)