import React from "react";
import { View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const navigation = useNavigation();

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Tela inicial
            </Text>
            <Button 
            title='Voltar' 
            onPress={function () {
                navigation.goBack();
                }} />
            
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});