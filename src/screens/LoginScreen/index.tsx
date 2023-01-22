import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useAppDispatch} from '../../helpers/hooks';
import {userLogin} from './reducer';
import {styles} from './styles';

interface Props {
  navigation: NavigationProp<any, any>;
}

const LoginScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState('');
  const login = () => {
    dispatch(userLogin(userName));
    navigation.navigate('BattleScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.headerText}>Pokémon Battles</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.label}>Enter username</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={username => setUserName(username)}
          value={userName}
        />

        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
