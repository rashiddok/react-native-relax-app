import React, { useEffect } from 'react';
import {useState} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {AsyncStorage} from 'react-native';

import axios from 'axios';

const Horoscope = ({navigation}) => {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getData();
      }, [])

    const getData = async () => {
        axios.get(`https://my-json-server.typicode.com/rashiddok/horoscope-api/horoscope`).then(res=> {
            const product = res.data
            console.log(res)
            setData(product)
        })

    }

    return (
        <View style={styles.view}>
          {
              data.map((v, key)=>{
                  return(
                      <View key={key} style={styles.row}>
                          <Text style={styles.header}>{v.title}</Text>
                          <Text style={styles.text}>{v.description}</Text>
                      </View>
                  )
              })
          }
          
          
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
        color: '#2a3637'
    },
    header: {
        fontSize: 22,
        color: '#2a3637'
    }
})

export default Horoscope;