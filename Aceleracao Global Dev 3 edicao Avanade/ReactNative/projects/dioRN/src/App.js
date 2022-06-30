import React from "react";
import {
    View, 
    Image,     
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGihub = '#4F565E';

const imageProfileGithub = 
    "https://avatars.githubusercontent.com/u/63924886?s=400&u=9c0f4a4c4e3ab76c1d46c6dd0bbc3fa71fce7449&v=4";
const urlToMyGithub = 'https://github.com/Virgiliopc';

const App = () =>{
    const handlePressGoToGithub = async ()=> {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);   
        if(res){
            console.log('link aprovado');
        console.log('Abrindo link...');
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style ={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
            <View style={style.content}>
                <Image
                    accessibilityLabel="Virgiio no trabalho fundo branco"
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}}
                />
                <Text 
                    accessibilityLabel="Nome: virgiio pires da costa" 
                    style={[style.defaultText, style.name]}>
                    Virgílio Pires da Costa
                </Text>
                <Text 
                    accessibilityLabel="Nickname: virgiiopc" 
                    style={[style.defaultText, style.nickname]}>
                    virgiliopc
                </Text>
                <Text 
                    accessibilityLabel="Descrição: Systems Analysis and Development Student | Developer Training Front-End Development Student | 
                    Bachelor of Business Administration | Profile under construction! |"
                    style={[style.defaultText, style.description]}>
                    Systems Analysis and Development Student | Developer Training Front-End Development Student | 
                    Bachelor of Business Administration | Profile under construction! |
                </Text>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>                
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { 
        // column
        backgroundColor: colorGithub,
        flex: 1, // expandir para a tela inteira
        justifyContent: 'center',
        alignItems: "center",
        //flexDirection: "row", // um do lado do outro
    },
    content:{
        alignItems: "center",
        padding: 20,
    },
    avatar:{
        height: 250,
        width: 250,
        borderRadius: 125,
        borderColor: 'green',
        borderWidth: 6,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 20,
        color: colorDarkFontGihub,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    button:{
        marginTop: 30,
        backgroundColor: colorDarkFontGihub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
});
