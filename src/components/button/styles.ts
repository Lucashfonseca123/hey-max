import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface IButton {
  widthSize?: number | string;
  heightSize?: number | string;
  color?: 'disabled' | 'enable';
}

const Container = styled(RectButton)`
  ${(props: IButton) => css`
    background-color: ${props.color === 'disabled' ? '#BCB46D' : '#E1CB00'};
  `}
  align-items: center;
  ${(props: IButton) => css`
    width: ${props.widthSize ? props.widthSize : 100}px;
  `}
  border-radius: 20px;
  elevation: 2;
  overflow: hidden;
`;

const ButtonInside = styled.TouchableOpacity`
  ${(props: IButton) => css`
    width: ${props.widthSize}px;
    padding-top: ${props.heightSize}px;
    padding-bottom: ${props.heightSize}px;
  `}

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ContainerLoading = styled.View`
  ${(props: IButton) => css`
    width: ${props.widthSize}px;
    padding: ${props.heightSize + 3}px;
  `}
`;

const PaddingButton = styled.View`
  padding-right: 8px;
`;

export {Container, PaddingButton, ContainerLoading, ButtonInside};
