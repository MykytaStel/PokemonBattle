import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text} from 'react-native';
import {healthBarStyles as styles} from './styles';

const AVAILABLE_WIDTH = 100;
const TOTAL_HEALTH = 100;
interface Props {
  currentHealth: number;
  label: string;
}

const HealthBar = ({currentHealth, label}: Props) => {
  const [currentPokemonHealth, setCurrentPokemonHealth] =
    useState(currentHealth);
  const healthAnim = useRef(new Animated.Value(currentHealth)).current;

  const mounted: any = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      healthAnim.addListener(progress => {
        setCurrentPokemonHealth(progress.value);
      });
      Animated.timing(healthAnim, {
        duration: 100,
        toValue: currentHealth,
        useNativeDriver: false,
      }).start();
    }
  }, [currentHealth]);

  const getCurrentHealthStyles = () => {
    const animated_width = healthAnim.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, AVAILABLE_WIDTH / 2, AVAILABLE_WIDTH],
    });

    const color_animation = healthAnim.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [
        'rgb(199, 45, 50)',
        'rgb(224, 150, 39)',
        'rgb(101, 203, 25)',
      ],
    });

    return {
      width: animated_width,
      height: 8,
      backgroundColor: color_animation,
    };
  };

  return (
    <View>
      <Text style={styles.label}>{`pokemon name: ${label}`}</Text>
      <View style={styles.container}>
        <View style={styles.rail}>
          <Animated.View style={[getCurrentHealthStyles()]} />
        </View>
        <View style={styles.percent}>
          <Text style={styles.percentText}>
            {Math.ceil(currentPokemonHealth)} / {TOTAL_HEALTH}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HealthBar;
