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

const ContainerLoading = styled.View`
  padding: 8px;
`;

const PaddingButton = styled.View`
  padding-right: 8px;
`;

export {Container, PaddingButton, ContainerLoading};
