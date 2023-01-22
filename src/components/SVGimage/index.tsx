import React from 'react';
import {SvgUri} from 'react-native-svg';

interface Props {
  width: number;
  uri: string;
  height: number;
}

const SVGImage = ({height, width, uri}: Props) => {
  return <SvgUri height={height} width={width} uri={uri} />;
};

export default SVGImage;
