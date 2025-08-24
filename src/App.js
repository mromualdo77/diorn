import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const matrixDio = [
  [0, 0, 0, 0,    0, 0, 0, 0, 0,    0, 0, 0, 0,],
  [0, 1, 1, 0,    0, 0, 1, 0, 0,    0, 1, 0, 0,],
  [0, 1, 0, 1,    0, 0, 1, 0, 0,    1, 0, 1, 0,],
  [0, 1, 0, 1,    0, 0, 1, 0, 0,    1, 0, 1, 0,],
  [0, 1, 1, 0,    0, 0, 1, 0, 0,    0, 1, 0, 0,],
  [0, 0, 0, 0,    0, 0, 0, 0, 0,    0, 0, 0, 0, ],
];

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/90730177?v=4';
const urlToMyGithub = 'https://github.com/mromualdo77';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link.....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />

      <View style={styles.container}>
        <Image
          accessibilityLabel="Foto da maria com fundo branco"
          style={styles.avatar}
          source={{ uri: imageProfileGithub }}
        />
        <Text
          accessibilityLabel="Nome: maria romualdo"
          style={[styles.defaultText, styles.name]}
        >
          Maria Romualdo
        </Text>

        <Text
          accessibilityLabel="Nickname: mromualdo77"
          style={[styles.defaultText, styles.nickname]}
        >
          mromualdo77
        </Text>

        <Text
          accessibilityLabel="Estudante de Front-end Developer"
          style={[styles.defaultText, styles.description]}
        >
          Estudante Front-end Developer
        </Text>

        <View style={styles.quadradinhosLed}>
          {matrixDio.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, colIndex) => (
                <View
                  key={colIndex}
                  style={[styles.pixel, cell ? styles.pixelOn : styles.pixelOff]}
                />
              ))}
            </View>
          ))}
        </View>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, //expande para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorGithub,
    // paddingTop: 30,
    // paddingInlineStart: 10,
  },
  /*text: {
        fontSize:20,
        color:'#fff',
    },*/
  content: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    borderRadius: 100,
    height: 180,
    width: 187,
    borderColor: '#FF5E9A',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  quadradinhosLed: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    width: 185,
    height: 100,
  },

  pixel: {
    width: 13,
    height: 13,
    margin: 1.5,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  pixelOn: {
    backgroundColor: '#7cfc00',
  },
  pixelOff: {
    backgroundColor: '#006400',
  },

  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
