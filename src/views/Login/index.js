import React from "react";
import  {View, Text, StyleSheet, Button, Dimensions} from "react-native"

const { width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
    return (
        <View style={styles.container} >
            <Text style={{ backgroundColor: '#000' ,marginHorizontal: 10, width: width - 90, height: 100}}>Tela de Login</Text>
            <Button  title='Home' onPress={function(){navigation.navigate('Home')}}></Button>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});