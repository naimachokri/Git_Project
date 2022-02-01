import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';


const Task = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}> {props.title}</Text>
        </View>
        <View style={styles.circular}>

        </View>

     
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between', //push the left side right and the left side
        marginBottom: 20 , //between the item
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
      width:24,
      height:24,
      backgroundColor:'orange',
      opacity:0.4,
      borderRadius:5,
      marginLeft:10,
      marginRight:15,
     
    },
    itemText:{

    },
    circular:{
        width: 12,
        height:12,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 5,
    },

});
