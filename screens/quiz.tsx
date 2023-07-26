import { View, Text, TouchableOpacity } from 'react-native'
import {useState,useEffect} from 'react'
import React from 'react'
import Title from '../coponents/title';
import styles from '../styles/styling';

const shuffleArray =(array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {

 

  const [questions,setQuestions]=useState();
  const [ques,setQues]=useState(0);
  const [indexOf,setIndexOf]= useState(-1);
  const [options,setOptions]= useState();
  const [score,setScore]=useState(0);
  const [answer, setAnswer]= useState("null");

  const getQuiz = async ()=>{
    const url="https://opentdb.com/api.php?amount=14&category=18&difficulty=medium&type=multiple&encode=url3986";
    const res= await fetch(url);
    const data=await res.json();
    // console.log(data.results[0]);
    setQuestions(data.results)
    setOptions(generateOptionsAndShuffle(data.results[0]));
  }
useEffect (()=>{
  getQuiz();
},[])

function handleNext(){
  if (answer === questions[ques].correct_answer){
    setScore(score+1);
} 

  setIndexOf(-1);
  setQues(ques+1);
  setAnswer('null');
  setOptions(generateOptionsAndShuffle(questions[ques+1]));
  
}
const generateOptionsAndShuffle = (_question)=>{
 const options= [..._question.incorrect_answers]
 options.push(_question.correct_answer)

 
 shuffleArray(options);
 return options;
}



const handleAnswer = (ans,index)=>{
  setAnswer(ans);
 setIndexOf(index);
} 

  return (
    <View style={styles.container}>
      { questions&& questions.length>0 ? (
      <View>
      <Title/>
      <View style={styles.question}>
        <Text style={styles.questionText}>Q. { decodeURIComponent(questions[ques].question) }</Text>
      </View>
      <View style={styles.answersBox}>
        <TouchableOpacity style={[styles.answer, indexOf === 0 && styles.selectedAns]} onPress={()=>handleAnswer(options[0],0)}>
           { options && (
            <Text> 
               {decodeURIComponent (options[0])}
            </Text>
           ) 
}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.answer, indexOf === 1 && styles.selectedAns]} onPress={()=>handleAnswer(options[1],1)}>
        {options && (
            <Text>
               {decodeURIComponent (options[1])} 
            </Text>
           ) }
        </TouchableOpacity>
        <TouchableOpacity style={[styles.answer, indexOf === 2 && styles.selectedAns]} onPress={()=>handleAnswer(options[2],2)}>
      {  options && (
            <Text>
               {decodeURIComponent (options[2])}
            </Text>
           ) }
        </TouchableOpacity>
        <TouchableOpacity style={[styles.answer, indexOf === 3 && styles.selectedAns]} onPress={()=>
          handleAnswer(options[3],3)
          }>
       { options && (
            <Text>
               {decodeURIComponent (options[3])}
            </Text>
           )
       }
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        {/* <TouchableOpacity style={styles.skip}>
            <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity> */}
        { ques<10 && 
        <TouchableOpacity style={styles.next} onPress={handleNext}>
            <Text style={styles.btnText}>Next</Text> 
        </TouchableOpacity> 
        } 
        { ques>9 && 
        <TouchableOpacity style={styles.end} onPress={()=>navigation.navigate("Result",{score})}>
        <Text style={styles.btnText}>Finish</Text>
    </TouchableOpacity> 
        } 
        {/* */}
      </View>
      </View>
): null}
    </View>
  );
}

export default Quiz;