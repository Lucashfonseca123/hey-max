import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Markdown, Image} from '../';
import {Container, PaddingButton, ContainerLoading} from './styles';

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
        <ContainerLoading>
          <ActivityIndicator size="small" color="#FFFF" />
        </ContainerLoading>
      ) : (
        <TouchableOpacity
          disabled={props.disabled}
          onPress={props.onPress ? props.onPress : null}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: props.widthSize,
            paddingTop: props.heightSize,
            paddingBottom: props.heightSize,
            flexDirection: 'row',
          }}>
          {props.text === 'Menu' ? (
            <>
              <PaddingButton>
                <Image type="Menu" width={20} height={20} />
              </PaddingButton>
            </>
          ) : null}
          <Markdown title={props.text} fontSize={props.fontSize} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default React.memo(Button);
