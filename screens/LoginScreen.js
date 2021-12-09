import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native'
import { Button, View, StyleSheet, Text } from 'react-native';
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
    style={styles.button}
      // style={{flex:1, justifyContent: 'center', alignItems: 'center'}}
    >  
      <Button
        style={styles.button}
        disabled={!request}
        title="Logine"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
        width: '100%',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
  }
});