import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
   Keyboard.dismiss();
   setTaskItems([...taskItems, task])
   setTask(null);
  }
  
  const completeTask =(index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  } 

  return (
    <View style={styles.container}>
     {/* Today's tasks*/}
     <View style={styles.tesksWrapper}>
       <Text style= {styles.sectionTitle}>To Do List</Text>
       <View style={styles.items}>
         {/*this is where the tasks will go*/}
         {
           taskItems.map((item , index) => {
             return (
              <TouchableOpacity onPress={() => completeTask()} >
                 <Task key={index} text={item} />
              </TouchableOpacity>
             
             )
            
           }) 
         }

       </View>
     </View>
     {/* write a task*/}
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
     >
       <TextInput style={styles.input} placeholder={'Write a task'}
       value ={task} onChangeText= {text => setTask(text)}
       />
       

       <TouchableOpacity onPress={() => handleAddTask()}>
         <View style={styles.addWrapper}>
           <Text style={styles.addText}>+</Text>
         </View>
       </TouchableOpacity>

     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   },
   tesksWrapper:{
     paddingTop:80,
     paddingHorizontal:20,
   },
   sectionTitle:{
    fontWeight: 'bold',
    fontSize:24,
   },
   items:{
     marginTop:30
   },
   writeTaskWrapper:{
    position:'absolute',   //placed whetever we want 
    bottom: 60,
    width: '100%', 
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
   },
   input: {
    paddingHorizontal: 15,
    paddingVertical:15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor:'orange',
    borderWidth:1,
    width:250,
   },
   addWrapper:{
    width:60,
    height:60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'orange',
    borderWidth:1,
   },
   addText:{
    color: 'black',
   },

});
