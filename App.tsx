import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View,ScrollView,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";
import styles from "./styles/styling";
import OurStack from "./navigation";

const App=()=>{
  return(
    <NavigationContainer>
     <OurStack />
      
    </NavigationContainer>
    
  );
}

export default App;

