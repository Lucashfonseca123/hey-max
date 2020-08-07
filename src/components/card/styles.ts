import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface ICardProps {
  paddingTop?: number;
  paddingBottom?: number;
  backgroundColor?: string;
  width?: number;
  onPress?: boolean;
  borderColor?: string;
  borderWidth?: number;
}

const ContainerCard = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;

const Card = styled.View`
  ${(props: ICardProps) => css`
    background-color: ${props.backgroundColor
      ? props.backgroundColor
      : 'white'};
    justify-content: center;
    align-items: center;
    width: ${props.width ? props.width : 100}%;
    border-radius: 24px;

    ${props.onPress
      ? css`
          padding-left: 16px;
          padding-right: 16px;
          padding-top: ${props.paddingTop ? props.paddingTop : 16}px;
          padding-bottom: ${props.paddingBottom ? props.paddingBottom : 16}px;
        `
      : css`
          overflow: hidden;
        `}
    elevation: 2;
    border-color: ${props.borderColor ? props.borderColor : 'black'};
    border-width: ${props.borderWidth ? props.borderWidth : 0.2}px;
  `}
`;

const CardWithImage = styled.ImageBackground`
  flex: 1;
  border-radius: 30px;
  overflow: hidden;
  elevation: 4;
`;

const TouchableCard = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export {Card, ContainerCard, CardWithImage, TouchableCard};
