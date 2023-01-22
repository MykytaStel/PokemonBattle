import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {modalWindowStyles as styles} from './styles';

interface Props {
  startNewGame: () => void;
  gameOver: boolean;
}

const GameOverModal = ({gameOver, startNewGame}: Props) => {
  const [isModalVisible, setModalVisible] = useState(gameOver);
  const closeModalAndStartNewGame = () => {
    startNewGame();
    setModalVisible(!isModalVisible);
  };
  const GamOverLayout = () => {
    return (
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Oh No! Your Pokemon Has Died!</Text>
        <Text style={styles.modalText}>Please start a new game</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={closeModalAndStartNewGame}>
          <Text>New Game</Text>
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
          <GamOverLayout />
        </View>
      </Modal>
    </View>
  );
};

export default GameOverModal;
