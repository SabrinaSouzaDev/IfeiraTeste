import React from "react";
import { View, StyleSheet, Text, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

export default function Header(){
    return(
        <View style={style.container}>
            <View>
                <Text style={style.title}> 
                Icode Mobile
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:'#000',
        marginVertical: 23,
        width: width,
        height: 50,
    },
    title: {
        fontSize:20,
    },
});