import React, { useEffect } from 'react';
import {useState} from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Profile = ({navigation}) => {

    return (
        <View style={styles.view}>
            <Image source={require('../avatar.jpeg')} style={styles.userAvatar}></Image>
            <Text style={styles.userName}>Эмиль</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.profileImage} source={require('../12556223_paisagem15.png')}></Image>
                <Image style={styles.profileImage} source={require('../sunset-d863fdd4.png')}></Image>
                <Image style={styles.profileImage} source={require('../Unknown-6.png')}></Image>
                <Image style={styles.profileImage} source={require('../Unknown-7.png')}></Image>
            </View>
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

export default Profile;