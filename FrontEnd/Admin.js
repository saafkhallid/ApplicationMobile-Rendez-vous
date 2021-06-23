import React from 'react';
import {

    StyleSheet,
    View,
    Text,
    Pressable,
    TextInput, 
    Button,

} from 'react-native';

export default function ScreenA({ navigation }) {
    const [text1, onChangeText1] = React.useState("Nom");
    const [text2, onChangeText2] = React.useState("Prénom");
    const [text3, onChangeText3] = React.useState("CIN");
    const [text4, onChangeText4] = React.useState("Date de naissence");



    const onPressHandler = () => {
        navigation.navigate('Screen_B');
    }
    
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
            Nom
            </Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
             />
              <Text style={styles.text}>
                    Prénom
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
             />
              <Text style={styles.text}>
            CIN
            </Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={text3}
             />

            <Text style={styles.text}>
             Date de naissance
            </Text>

            <TextInput
            style={styles.input}
            onChangeText4={onChangeText4}
            value={text4}
             />
             <View style={styles.divbotton} >

             <Button style={styles.botton}
            title="Learn More"
            accessibilityLabel="connecter"
            />

            <Button style={styles.botton}
            title="Learn More"
            accessibilityLabel="Reset"
            />
             </View>


            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        marginTop:10,
        marginLeft:10,
        flex: 1,
       
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
    divbotton:{
        height:150,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flexWrap: "wrap",
        margin: 0,
        
    },
    botton:{
        
        marginTop:40,
        backgroundColor:"red",
        padding: 10,      
    },


})