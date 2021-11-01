import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import axios from 'axios';
import ProductCard from '../components/ProductCard';
import {ScrollView} from 'react-native-gesture-handler';
import { TabNavigator } from '../navigators/TabNavigator';

const Home = ({navigation}) => {
  const [data, setData] = useState<any[]>([{}]);
  const [filterData, setFilterData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios.get('https://fakestoreapi.com/products').then(
      res => {
        const allProducts = res.data;
        setData(allProducts);
        setFilterData(allProducts);
      },
      err => {
        setFilterData([]);
      },
    );
  };

  const onSearchChange = (e: string) => {
    const filteredData = data.filter(v =>
      v.title.toLowerCase().includes(e.toLowerCase()),
    );
    setFilterData(filteredData);
  };

  if (filterData.length > 0) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileRow}>
          <Text style={styles.header}>С возвращением, Эмиль!</Text>
          <Text style={styles.subheader}>Каким ты ощущаешь себя сегодня?</Text>
          <View style={[styles.flexRow, styles.m_t_regular]}>
            <Pressable
              onPress={async () => navigation.navigate('Profile')}
              style={[styles.buttonWrapper]}>
              <Pressable style={styles.button}>
                <Image style={styles.buttonImage} source={require('../Focus.png')}></Image>
              </Pressable>
              <Text style={styles.buttonText}>Медитация</Text>
            </Pressable>
            <Pressable
              onPress={async () => navigation.navigate('Profile')}
              style={styles.buttonWrapper}>
              <Pressable style={styles.button}>
              <Image style={styles.buttonImage} source={require('../Calm.png')}></Image>
              </Pressable>
              <Text style={styles.buttonText}>Расслабление</Text>
            </Pressable>
            <Pressable
              onPress={async () => navigation.navigate('Profile')}
              style={styles.buttonWrapper}>
              <Pressable style={styles.button}>
              <Image style={styles.buttonImage} source={require('../Relax.png')}></Image>
              </Pressable>
              <Text style={styles.buttonText}>Координация</Text>
            </Pressable>
            <Pressable
              onPress={async () => navigation.navigate('Profile')}
              style={styles.buttonWrapper}>
              <Pressable style={styles.button}>
              <Image style={styles.buttonImage} source={require('../Focus.png')}></Image>
              </Pressable>
              <Text style={styles.buttonText}>Сосредочение</Text>
            </Pressable>
          </View>
          
          <View style={styles.m_t_regular}>
            <View style={[styles.card, styles.flexRow]}>
              <View>
              <Text style={styles.card__header}>Заголовок блока</Text>
              <Text style={styles.card__body}>Lorem ipsum dolor sit  amet consectetur adipisicing elit.</Text>
              <Pressable style={[styles.card__button, styles.m_t_regular]}>
              <Text style={styles.card__button_text}>Подробнее</Text>
              </Pressable>
              </View>
              <Image source={require('../img1.png')}></Image>
            </View>
          </View>
          <View style={styles.m_t_regular}>
            <View style={[styles.card, styles.flexRow]}>
              <View>
              <Text style={styles.card__header}>Заголовок блока</Text>
              <Text style={styles.card__body}>Lorem ipsum dolor sit  amet consectetur adipisicing elit.</Text>
              <Pressable style={[styles.card__button, styles.m_t_regular]}>
              <Text style={styles.card__button_text}>Подробнее</Text>
              </Pressable>
              </View>
              <Image source={require('../img2.png')}></Image>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
        }}>
        No data found:(
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a3637',
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
    
  },
  card__header: {
    fontSize: 20,
    color: '#2a3637'
  },
  card__body: {
    fontSize: 16,
    width: 200,
    color: '#2a3637'
  },
  card__button: {
    backgroundColor: '#2a3637',
    width: 200,

    paddingTop: 10,
    borderRadius: 10,

    paddingBottom: 10
  },
  card__button_text: {
    color: '#fff',
    textAlign: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  m_t_regular: {
    marginTop: 20,
  },
  header: {
    fontSize: 26,
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonImage: {
    width: 50,
    height: 50,

  },
  buttonText: {
    color: '#fff',
  },
  subheader: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  search: {
    width: '95%',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 20,
    paddingLeft: 15,
    marginRight: 20,
  },
  profileRow: {
    width: '100%',
    marginTop: 20,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Home;
