import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';
import Tasks from './Components/Tasks';


export default function App() {

  const [todo,setTodo]=useState();
  // array to store all new todos
  const [todoItems, setTodoItems]=useState([]);

  const handleAddTodo=()=>{
    Keyboard.dismiss();
    setTodoItems([...todoItems,todo]);
    setTodo(null);

  }

  // remove todo after completing
  const completeTodo=(index)=>{
    let itemsCopy=[...todoItems];
    itemsCopy.splice(index,1);
    setTodoItems(itemsCopy);


  }


  return (
    <>
    <View style={styles.container}>

      {/* My ToDo */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}>My Todo's</Text>

        {/* My Tasks */}
        <View style={styles.items}>
          {
            todoItems.map((item, index)=>{
              return(
                <TouchableOpacity key={index} onPress={()=>completeTodo(index)}>
                  <Tasks text={item} /> 
                </TouchableOpacity>
              )

            })
          }
          {/* <Task text={'Task 1'} />
          <Task text={'Task 2'} /> */}
        </View>
      
      </View>

      {/* Write a new task */}
      {/* behaviour defines that if the platform is IOS then have some padding otherwise give some height to android */}

      <KeyboardAvoidingView behavior={Platform.OS==='ios'?"padding":"height"} style={styles.addNewTask}>
        <TextInput style={styles.input} placeholder={'Add new Todo'} value={todo} onChangeText={text =>setTodo(text)}/>

        <TouchableOpacity onPress={()=>handleAddTodo()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },

  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

},

Title:{
    fontSize:24,
    fontWeight:'bold'

},

items:{
  marginTop:30,

},

addNewTask:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'

},

input:{
  paddingVertical:15,
  paddingHorizontal:15,
  width:270,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1


},

addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#C0C0C0',
  borderWidth:1
  

},

addText:{

}
  
});
