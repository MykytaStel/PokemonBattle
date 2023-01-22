import React from 'react';
import {View} from 'react-native';
import SVGImage from '../SVGimage';

interface Props {
  height?: number;
  width?: number;
  pokemonImgUrl: string;
}
const Pokemon = ({pokemonImgUrl, height = 80, width = 120}: Props) => {
  return (
    <View>
      <SVGImage height={height} width={width} uri={pokemonImgUrl} />
    </View>
  );
};

export default Pokemon;
