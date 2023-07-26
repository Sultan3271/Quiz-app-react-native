import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styling'
import { useRoute } from '@react-navigation/native'

const Result = ({navigation}) => {
  const route=useRoute()
  const score=route.params?.score;
  const lose='https://cdn-icons-png.flaticon.com/128/1712/1712851.png';
  const win='https://cdn-icons-png.flaticon.com/128/9718/9718462.png';

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
       <Image style={styles.bannerImage} source={{uri: score >5? win: lose  }} />
      </View>
      {
        score>5 ? 
      <Text style={styles.scoreText}>Congrats!You passed</Text> : 
      <Text style={[styles.scoreText,{color:'orange'}]}>You lose, Best of Luck next Time!</Text>
}
      <Text style={styles.scoreText}>You Scored: {score}</Text>
   <View>
    <TouchableOpacity style={{alignItems:'center',marginTop:10,}} onPress={()=>navigation.navigate("Home")}>
<Text style={{color:'white',borderRadius:10,padding:10, fontSize:20, backgroundColor:'lightblue'}}>Home</Text>
    </TouchableOpacity>
   </View>
    </View> 
  )
}

export default Result