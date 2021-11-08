import React, { useEffect } from 'react';
import {useState} from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import {AsyncStorage} from 'react-native';

import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

const Login = ({navigation}) => {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getData();
      }, [])

    const getData = async () => {
        AsyncStorage.getItem('login').then(res=>{
            navigation.navigate('Home')
        })
    }

    const authorize = async() => {
        const creds = {
            login: 'max@gmail.com',
            password: '12345678'
        }
        AsyncStorage.setItem('login', creds).then(res=>{
            
        })
        // AsyncStorage.getItem('login').then(res=>{
        //     navigation.navigate('Home')
        // })
        
    }
    

    return (
        <View style={styles.view}>
          <Text style={styles.header}>Sign in</Text>
          <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#fff"></TextInput>
          <TextInput placeholder="Пароль" secureTextEntry={true} style={styles.input} placeholderTextColor="#fff"></TextInput>
          <Pressable style={styles.card__button} onPress={() => authorize()}>
              <Text style={styles.text}>Sign in</Text>
          </Pressable>
          
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#2a3637',
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%'
    },
    row: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },
    header: {
        fontSize: 22,
        color: '#fff',
        marginTop: 100,
        textAlign: 'center',
        marginBottom: 50
    },
    card__button: {
        backgroundColor: '#c1c1c1',
        width: 200,
        paddingTop: 10,
        borderRadius: 10,
        textAlign: 'center',
        paddingBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30
      },
    input: {
        color: '#c1c1c1',
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    }
})

export default Login;