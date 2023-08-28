import React, {useState} from "react"
import {View, Text, Button, StyleSheet, ScrollView, TextInput} from "react-native";
import Todo from './Todo';

const TodoList = () => {

    const [title, setTitle] = useState ("TodoList")
    const [text, setText] = useState ("")
    const [List, setList] = useState (["Hello world"])

    // This is for adding Items
    const addItem = () => {
        const updateList = List;
        updateList.push(text)
        setList(updateList)
        setText("")
    }

    // This is for deleting items
    const deleteItem = (index) => {
        const updateList = List.filter((todo) => todo !== index)
        setList(updateList)
    }
    return (
        
        <View style={{ width: "80%", marginBottom: 60 }}>
        
        <Text style={[styles.align, styles.font]}> {title} </Text>

        <ScrollView> 

        {List.map ((x, index) => 
        <Todo key={index} item= {x} index={index} delete={deleteItem}/>)}

        </ScrollView>

        <View>
        <TextInput 
        style={styles.input} 
        value= {text}
        onChangeText={(text) => setText(text)}
        />
        <Button title= "Add Item" onPress={addItem} />

        </View>
        
       
        </View>
    )
}

const styles = StyleSheet.create ({
    align: {
        alignSelf: "center"
    },

    font: {
        fontSize: 20,
        fontWeight: "bold"
    },

    input: {
         borderRadius: 5,
         borderWidth: 1,
         marginBottom: 8,
         padding: 8
    }
})

export default TodoList;