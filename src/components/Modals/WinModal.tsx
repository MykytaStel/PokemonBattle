import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {modalWindowStyles as styles} from './styles';

interface Props {
  isContinue: boolean;
  onContinuePress: () => void;
  changePersonPokemon: () => void;
  startNewGameWithTheSamePokemon: () => void;
}

const WinModal = ({
  isContinue,
  onContinuePress,
  changePersonPokemon,
  startNewGameWithTheSamePokemon,
}: Props) => {
  const [isModalVisible, setModalVisible] = useState(isContinue);
  const closeModalAndStartNewGame = () => {
    setModalVisible(!isModalVisible);
  };
  const onChangePokemonPress = () => {
    changePersonPokemon();
    closeModalAndStartNewGame();
  };

  const onPress = () => {
    onContinuePress();
    closeModalAndStartNewGame();
  };

  const onPressWithSamePokemon = () => {
    startNewGameWithTheSamePokemon();
    closeModalAndStartNewGame();
  };
  const WinLayout = () => {
    return (
      <View style={styles.modalView}>
        <Text style={styles.modalText}>You win!</Text>
        <Text style={styles.modalText}>You can choose:</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onPressWithSamePokemon}>
          <Text>Stay with your Pokemon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onChangePokemonPress}>
          <Text>Change Pokemon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onPress}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <WinLayout />
        </View>
      </Modal>
    </View>
  );
};

export default WinModal;
