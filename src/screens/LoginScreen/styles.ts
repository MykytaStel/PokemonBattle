import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 20,
    backgroundColor: '#FFF',
  },
  top: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  main: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#eaeaea',
    padding: 5,
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#05a5d1',
  },
});
