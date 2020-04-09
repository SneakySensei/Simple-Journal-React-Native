import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function ListItem(props) {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.goalCard}>
            <Text>{ props.title }</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goalCard:{
        borderWidth: 1,
        marginTop: 3,
        height: 30,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 8
    }
})