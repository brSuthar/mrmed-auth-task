import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  underlineStyleBase: {
    height: 45,
    width: 45,
    backgroundColor: colors.dark_light,
    borderWidth: 0,
  },
  underlineStyleHighLighted: {
    borderColor: colors.blue_color,
    backgroundColor: colors.dark_light,
    borderWidth: 1,
    height: 45,
    width: 45,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    alignSelf: 'flex-start',
    color: 'red',
  },
  view: {
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    color: colors.font_light,
    marginTop: 40,
  },
  desc: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: colors.text_dark,
    textAlign: 'center',
    marginTop: 8,
  },
  cellRoot: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark_light,
    borderRadius: 16,
    borderColor: colors.white,
  },
  cellText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
  },
  focusCell: {
    borderWidth: 1,
    borderColor: colors.blue_color,
  },
  resend: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.blue_color,
    marginTop: 35,
  },
  flex: {
    flex: 1,
    marginTop: 100,
  },
  btn: {
    marginBottom: 16,
  },
});
