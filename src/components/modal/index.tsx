import React, {ReactNode} from 'react';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
import {Container, ContainerButton, ContainerModal} from './styles';
import {Image} from '../';

interface ModalComponent {
  isVisible?: boolean;
  closeModal?: Function;
  children?: ReactNode;
  width?: number;
  height?: number;
  typeMax?:
    | 'TristeChoro'
    | 'Confuso'
    | 'Feliz'
    | 'FelizOrelhaBaixoDente'
    | 'FelizOrelhaDente'
    | 'Inteiro'
    | 'TristeChoro';
}

const ModalComponent = ({
  children,
  isVisible,
  width,
  height,
  closeModal,
  typeMax,
}: ModalComponent) => {
  return (
    <Modal isVisible={isVisible} style={{paddingBottom: 70}}>
      <ContainerModal>
        <Image
          type={typeMax}
          width={200}
          height={typeMax === 'TristeChoro' ? 130 : 140}
        />
      </ContainerModal>
      <Container width={width} height={height}>
        {!typeMax ? (
          <ContainerButton>
            <TouchableOpacity onPress={closeModal}>
              <Image type="Close" width={18} height={18} />
            </TouchableOpacity>
          </ContainerButton>
        ) : null}
        {children}
      </Container>
    </Modal>
  );
};

export default React.memo(ModalComponent);
