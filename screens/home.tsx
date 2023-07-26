import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../coponents/title';
import styles from '../styles/styling';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title  />
      <View style={styles.bannerContainer}>
        <Image style={styles.bannerImage} source={{uri:'https://cdn-icons-png.flaticon.com/128/5182/5182538.png'}} />
      </View>
      <View style={styles.start}>
      <TouchableOpacity style={styles.startBtn} onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.btnText}>
          Start
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;