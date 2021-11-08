import React, { useEffect } from 'react';
import {useState} from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const About = ({navigation}) => {

    return (
        <View style={styles.view}>
            <Text style={styles.userName}>Рашевский Максим Вячеславович</Text>
            <Text style={styles.userName}>гр. 981063</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#2a3637',
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%'
    },
    userAvatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      userName: {
          fontSize: 26,
          marginTop: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#fff'
      },
      imageContainer: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: 20
      },
      profileImage: {
          borderRadius: 30,
          width: 175,
          height: 125,
          marginBottom: 20
      }
})

export default About;