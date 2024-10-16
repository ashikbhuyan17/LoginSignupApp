import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const [isPressed, setIsPressed] = useState(false);
  return (
    // <SafeAreaView>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/man.png')} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem, ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            {backgroundColor: isPressed ? '#251F21' : colors.primary},
          ]}
          onPressIn={() => setIsPressed(true)} // Set pressed state to true on press
          onPressOut={() => setIsPressed(false)} // Reset state when released
          onPress={handleLogin}>
          <Text
            style={[
              styles.loginButtonText,
              {
                color: isPressed ? 'black' : colors.white,
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, //whole screen size
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    alignItems: 'center',
    marginVertical: 20,
  },
  bannerImage: {
    height: 250,
    width: 231,
    alignItems: 'center',
    marginVertical: 10,
    // backgroundColor: 'gray',
    borderRadius: 50,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    // fontStyle: 'italic',
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    textAlign: 'center',
  },
  subTitle: {
    // fontStyle: 'italic',
    fontFamily: fonts.Medium,
    color: colors.secondary,
    textAlign: 'center',
    padding: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 100,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
