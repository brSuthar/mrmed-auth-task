import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  layout: {
    alignItems: 'center',
    marginTop: 32,
  },
  hello: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.font_light,
  },
  welcome: {
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 16,
    marginTop: 8,
    letterSpacing: 0.4,
    marginBottom: 24,
  },
  btn: {
    marginTop: 16,
  },
  privacy: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.text_dark,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 15,
  },
  highlight: {
    color: colors.white,
  },
  view: {
    flex: 1,
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 2,
    alignSelf: 'flex-start',
    color: 'red',
  },
});
