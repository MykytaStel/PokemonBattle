import {StyleSheet} from 'react-native';

export const battleScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  battleGround: {
    flex: 8,
    padding: 12,
    flexDirection: 'column',
  },
  currentPlayer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  opponent: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  controls: {
    flex: 3,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#404040',
  },
  controlsHeader: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  backButton: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  controlsHeaderText: {
    paddingTop: 5,
  },
  message: {
    fontSize: 15,
  },
  pokemonImg: {
    width: 150,
  },
  playersName: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});
