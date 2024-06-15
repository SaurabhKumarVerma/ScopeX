import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import {colors} from '../../theme/color/color';
import Animated, {FadeInDown} from 'react-native-reanimated';
import IconButton from '../../base/Text/IconButton/IconButton';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

GoogleSignin.configure({
  webClientId:
    '130899099638-sc7jejuhu9jmq20unprt2l0j79ad356d.apps.googleusercontent.com',
  offlineAccess: false,
});

const Login = () => {
  const {width, height} = useWindowDimensions();

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const idToken = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      idToken.idToken,
    );
    const userCredential = await auth().signInWithCredential(googleCredential);

    console.log('====================================');
    console.log('userCredential', userCredential);
    console.log('====================================');
    // if(userCredential.user.multiFactor?.enrolledFactors){

    // }

    // await authStore.saveUserToken(idToken as ITokenData);
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <ImageBackground
      source={require('../../../assets/logIn.png')}
      resizeMode="cover"
      style={{width: width, height: height}}>
      <View style={styles.viewContainer}>
        <LottieView
          source={require('../../../assets/Lottie/Login.json')}
          autoPlay
          loop
          style={{width: width, aspectRatio: 1}}
        />
        <View>
          <AnimatedPressable
            onPress={onGoogleButtonPress}
            style={styles.container}
            entering={FadeInDown.delay(700)}>
            <IconButton
              icon={'google-plus'}
              size={'medium'}
              iconColor={colors.white}
              style={{backgroundColor: colors.transparent}}
              iconFamily="FontAwesome"
            />
            <Text style={styles.textStyle}>Sign in with Google</Text>
          </AnimatedPressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginHorizontal: 10,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
