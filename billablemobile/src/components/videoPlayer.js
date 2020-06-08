import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Video } from 'expo-av';

const { height } = Dimensions.get("window");
class VideoPlayer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
           <>
              <Video
            source={{ uri: 'https://res.cloudinary.com/augani/video/upload/v1591447191/video_2.mp4' }}
            isMuted={true}
            repeat={true}
            resizeMode={"cover"}
            rate={1.0}
            shouldPlay
             isLooping
            ignoreSilentSwitch={"obey"}
        style={Styles.main}
            />
           </>
        )
    }
}

const Styles  = StyleSheet.create({
    main: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    }
})

VideoPlayer.propTypes = {
    videoUri: PropTypes.string
  };

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
