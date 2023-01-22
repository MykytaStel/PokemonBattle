import {StyleSheet} from 'react-native';

export const healthBarStyles = StyleSheet.create({
  container: {
    height: 10,
    width: 130,
    marginBottom: 15,
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    paddingBottom: 2,
    color: '#212121',
  },
  rail: {
    height: 10,
    width: 100,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#616161',
  },
  healthOK: {
    backgroundColor: '#5db56d',
  },
  healthWarning: {
    backgroundColor: '#fcc419',
  },
  healthCritical: {
    backgroundColor: '#fa5252',
  },
  percent: {
    paddingLeft: 3,
  },
  percentText: {
    fontSize: 10,
    color: '#212121',
  },
});
