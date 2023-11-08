import * as React from 'react';
import { Pressable, Image, View, Text, Linking, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Vinicius Sartre</Text>
      <Image source={require('./assets/vini.jpg')}
        style={{
          width: 200,
          height: 200,
        }} />
      <Pressable
        onPress={() => navigation.navigate('Cardapio')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Currículo</Text>
      </Pressable>
    </View>
  );
}

function Cardapio() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textStyle}> Confira o meu {''}
        <Text style={styles.hyperlinkStyle}
        onPress={
          () => {Linking.openURL('https://viniciussartreportifolio.netlify.app')}
        }
        >
          Portifolio
        </Text>
      </Text>
    </View>
  );
}

function Sugestoes() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deixe Sua Sugestão!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Sugestoes" component={Sugestoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
textStyle: {
  fontSize: 20,
},
hyperlinkStyle: {
  color : 'blue',
},

});

export default App;
