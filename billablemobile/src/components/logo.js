import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Layout, Text, useTheme, Divider } from '@ui-kitten/components';

export const Logo =(props)=> {
   
    const theme = useTheme();
  
        return (
            <>
                <Text category='h1' style={{ margin: 5,fontSize: props.size||40,fontFamily: 'Tera',textAlign: 'center', color: theme['color-primary-default']}}> Lawyalty</Text>
                {props.sub?(<>
                    <Divider/>
                <Text style={{color: '#e3e3e3', textAlign: 'center', fontFamily: 'Mont', margin: 5}} category="label">Law redefined</Text>
                </>):null}
                  </>
        )
    
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo)
