import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Markdown, Image} from '../';
import {
  Container,
  PaddingButton,
  ContainerLoading,
  ButtonInside,
} from './styles';

interface IButton {
  text: string;
  onPress: Function;
  disabled?: boolean;
  loading?: boolean;
  widthSize?: number | string;
  heightSize?: number | string;
  fontSize?: number;
  backgroundColor?: string;
  paddingLeft?: number;
  paddingRight?: number;
  color?: 'disabled' | 'enable';
}

const Button = (props: IButton) => {
  return (
    <Container color={props.color} widthSize={props.widthSize}>
      {props.loading ? (
        <ContainerLoading
          widthSize={props.widthSize}
          heightSize={props.heightSize}>
          <ActivityIndicator size="small" color="#FFFF" />
        </ContainerLoading>
      ) : (
        <ButtonInside
          disabled={props.disabled}
          widthSize={props.widthSize}
          heightSize={props.heightSize}
          onPress={props.onPress ? props.onPress : null}>
          {props.text === 'Menu' ? (
            <>
              <PaddingButton>
                <Image type="Menu" width={20} height={20} />
              </PaddingButton>
            </>
          ) : null}
          <Markdown title={props.text} fontSize={props.fontSize} />
        </ButtonInside>
      )}
    </Container>
  );
};

export default React.memo(Button);
