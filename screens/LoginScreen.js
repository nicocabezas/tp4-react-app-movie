import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native'
import { Button, View, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext'




WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {

  const navigation = useNavigation();

  const { setAuth } = React.useContext(AuthContext);
 
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '739255668856-jdv51nh7ukjj1fgmsdbr3uv440vholjo.apps.googleusercontent.com',
  }); 

  React.useEffect(() => {
    if (response?.type === 'success') {
        navigation.navigate("DrawerNavigator");
        setAuth(response.authentication);
    }
  }, [response]);

  return (
    
    <View 
          style={styles.container}
          // ={{flex:1, justifyContent: 'center', alignItems: 'center', }}
    >

      
      <Image
        style={styles.image}
        source={{
          uri: 'https://thumbs.dreamstime.com/b/logotipo-del-tiempo-de-pel%C3%ADcula-en-el-fondo-blanco-135314604.jpg',
        }}
      />
       
      
      <Button
        style={styles.buton}
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      marginTop: 20
      
  },
  buton:{
    flex: 1,
    padding: '20',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FF8800',
  }
  
});

