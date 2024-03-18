import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import images from '../../constants/images';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['top']} style={styles.view}>
      <StatusBar backgroundColor={colors.dark} />
      <View style={styles.conatiner}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <Image source={images.arrow_icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 100,
    backgroundColor: colors.dark,
  },
  conatiner: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'center',
  },
});

export default Navbar;
