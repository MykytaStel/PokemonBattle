import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {battleScreenStyles as styles} from './styles';
import HealthBar from '../../components/Healthbar';
import {getData, randomInt, storeData} from '../../helpers';
import {useAppDispatch, useAppSelector} from '../../helpers/hooks';
import {requestOpponentPokemonData, requestPokemonData} from './actions';
import AttackButton from '../../components/AttackButton';
import AttackText from '../../components/AttackText';
import WinModal from '../../components/Modals/WinModal';
import GameOverModal from '../../components/Modals/GameOverModal';
import {setLoses, setPlayerPokemon, setWins} from './reducers';
import Pokemon from '../../components/Pokemon';
import {NavigationProp} from '@react-navigation/native';

const TOTAL_POKEMONS = 500;
// const DAMAGE_MULTIPLIER = 2;

interface Props {
  navigation: NavigationProp<any, any>;
}
const BattleScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const [currentHealth, setCurrentHealth] = useState(100);
  const [currentEnemyHealth, setCurrentEnemyHealth] = useState(100);
  const [enemyDraw, setEnemyDraw] = useState(0);
  const [isGameOver, setGameover] = useState(false);
  const [isContinue, setContinue] = useState(false);
  const [playerDraw, setPlayerDraw] = useState(0);
  const userName = useAppSelector(state => state.entities.login.user);
  const opponentPokemon = useAppSelector(
    state => state.entities.battle.opponentPokemon,
  );
  const pokemon = useAppSelector(state => state.entities.battle.pokemon);
  const wins = useAppSelector(state => state.entities.battle.wins);
  const loses = useAppSelector(state => state.entities.battle.loses);
  const enemyAttackTxt = `Your opponent hit for ${enemyDraw}`;
  const playerAttackTxt = `You hit for ${playerDraw}`;
  const getRandomPokemons = () => {
    // @ts-ignore
    dispatch(requestPokemonData(`${randomInt(1, TOTAL_POKEMONS)}`));
    // @ts-ignore
    dispatch(requestOpponentPokemonData(`${randomInt(1, TOTAL_POKEMONS)}`));
  };
  const savePokemonDataToStorage = async () => {
    await storeData('pokemon', pokemon);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(requestOpponentPokemonData(`${randomInt(1, TOTAL_POKEMONS)}`));
    void savePokemonDataToStorage();
  }, [pokemon]);

  useEffect(() => {
    void getRandomPokemons();
  }, [dispatch, isGameOver]);

  useEffect(() => {
    gameOver();
  }, [currentHealth]);

  useEffect(() => {
    onContinue();
  }, [currentEnemyHealth]);

  useEffect(() => {
    setEnemyHealth();
  }, [playerDraw]);

  useEffect(() => {
    attackPlayer();
  }, [playerDraw, enemyDraw]);

  useEffect(() => {
    setPlayerHealth();
  }, [enemyDraw]);
  const rollDice = (func: (arg: number) => void) => {
    func(Math.round(Math.random() * 5 + 1));
  };
  const turnStatusOfTheGameOff = () => {
    setGameover(false);
    setContinue(false);
  };

  const onContinue = () => {
    if (currentEnemyHealth <= 0) {
      setGameover(false);
      setContinue(true);
      setPlayerDraw(0);
      setEnemyDraw(0);
      dispatch(setWins(wins + 1));
    }
  };

  const gameOver = () => {
    if (currentHealth <= 0) {
      setGameover(true);
      setContinue(false);
      setPlayerDraw(0);
      setEnemyDraw(0);
      dispatch(setLoses(loses + 1));
    }
  };

  const setEnemyHealth = () => {
    setCurrentEnemyHealth(currentEnemyHealth - playerDraw);
    // setCurrentEnemyHealth(
    //   prevState => prevState - playerDraw * DAMAGE_MULTIPLIER,
    // );
  };

  const setPlayerHealth = () => {
    setCurrentHealth(currentHealth - enemyDraw);
    // setCurrentHealth(prevState => prevState - enemyDraw * DAMAGE_MULTIPLIER);
  };

  const oneMoreRollAlert = () =>
    Alert.alert('You roll 6', 'You can roll dice one more time', [
      {
        text: 'Roll Dice',
        onPress: () => {
          rollDice(setPlayerDraw);
          setEnemyHealth();
        },
      },
    ]);

  const attackPlayer = () => {
    if (playerDraw === 6) {
      oneMoreRollAlert();
    } else if (enemyDraw === 6) {
      rollDice(setEnemyDraw);
      setPlayerHealth();
    }
  };

  const attackPokemon = () => {
    rollDice(setEnemyDraw);
    rollDice(setPlayerDraw);
    setEnemyHealth();
    setPlayerHealth();
  };
  const resetToDefault = () => {
    turnStatusOfTheGameOff();
    setCurrentEnemyHealth(100);
    setCurrentHealth(100);
  };

  const startNewGame = () => {
    resetToDefault();
    getRandomPokemons();
  };

  const startNewGameWithTheSamePokemon = async () => {
    const samePokemon = await getData('pokemon');
    resetToDefault();
    dispatch(setPlayerPokemon(samePokemon));
  };
  const onContinuePress = () => {
    turnStatusOfTheGameOff();
    startNewGame();
    navigation.navigate('Statistic');
  };

  return (
    <>
      {isContinue && (
        <WinModal
          startNewGameWithTheSamePokemon={startNewGameWithTheSamePokemon}
          changePersonPokemon={startNewGame}
          onContinuePress={onContinuePress}
          isContinue={isContinue}
        />
      )}
      {isGameOver && (
        <GameOverModal startNewGame={startNewGame} gameOver={isGameOver} />
      )}
      <View style={styles.container}>
        <Text style={[styles.headerText]}>Pokemon battle</Text>
        <View style={styles.battleGround}>
          {opponentPokemon && (
            <View style={styles.opponent}>
              <Text style={styles.playersName}>Opponent</Text>
              <HealthBar
                currentHealth={currentEnemyHealth}
                label={opponentPokemon.name}
              />
              <Pokemon
                pokemonImgUrl={
                  opponentPokemon.sprites.other.dream_world.front_default
                }
              />
            </View>
          )}

          {pokemon && (
            <View style={styles.currentPlayer}>
              <Text style={styles.playersName}>{userName}</Text>
              <HealthBar currentHealth={currentHealth} label={pokemon.name} />
              <Pokemon
                pokemonImgUrl={pokemon.sprites.other.dream_world.front_default}
              />
            </View>
          )}

          {/*{currentHealth < 100 && currentEnemyHealth < 100 && (*/}
          <AttackText
            enemyDraw={enemyDraw}
            playerAttackTxt={playerAttackTxt}
            enemyAttackTxt={enemyAttackTxt}
          />
          {/*)}*/}

          <AttackButton attack={attackPokemon} />
        </View>
      </View>
    </>
  );
};

export default BattleScreen;
