import { View, Text,StyleSheet } from 'react-native'
import React from 'react'



const styles = StyleSheet.create({
    container:{
      marginTop:30,
      marginBottom:15,
      height:'100%',
      flex:1,
      backgroundColor:'#cce3de',
      borderRadius:10,
    },
    title:{
    fontSize:26,
    color:'#2a9d8f',
    textAlign:'center',
    fontWeight:'800',
    },
    text:{
      fontSize:16,
      color: '#001d3d',
      padding:5,
  
    },
    bannerContainer:{
     padding:5,
     margin:20,
     alignItems:'center',
     justifyContent:'center',
    },
    bannerImage:{
        height:200,
        width:200,
        padding:5,
        marginTop:10,
    },
    scoreText:{
    fontSize:24,
    fontWeight:'800',
    color:'green',
    padding:5,
    textAlign:'center',

    },
    question:{
        padding:5,
        
        margin:5,
        marginTop:10,
        marginLeft:10,
    },
    questionText:{
        fontSize:20,
        color:'#669bbc',
    },
    answersBox:{
        margin:5,
        padding:5,
    },
    answer:{
        fontSize:16,
        margin:4,
        marginRight:10,
        marginLeft:10,
        padding:10,
        backgroundColor:'skyblue',
        borderRadius:10,
    
    }
    ,
    selectedAns:{
     backgroundColor:'blue',
     padding:7,

    },
    buttons:{
        margin:5,
        padding:3,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,

    },
    start:{
    justifyContent:'center',
    margin:20,
    padding:5,
    alignItems:'center',
    
    },
    startBtn:{ 
     backgroundColor:'green',
     padding:10,
     width:100,
     marginTop:10,
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center',

    },
    next:{
        backgroundColor:'green',
        padding:5,
        borderRadius:10,
        width:90,
        
    },
    skip:{
        backgroundColor:'#0077b6',
        borderRadius:10,
        padding:5,
        width:90,

    },
    end:{
        backgroundColor:'#0077b6',
        borderRadius:10,
        padding:5,
        width:90,
    },
    btnText:{
        fontSize:20,
        color:'white',
        textAlign:'center',
    }
  });

  export default styles