import React, {memo, useCallback} from 'react';
import {Container, DivButtonModal} from './styles';
import {Modal, Markdown, Button} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetStage} from 'features/player/redux/reducer/playerReducer';
import {AppState} from 'store/RootReducer';

interface IResultAnswered {
  type: 'success' | 'errored' | 'nextLevel' | 'finishLevel' | 'endGame';
  isVisible: boolean;
  closeModal: Function;
}

const ResultAnswered = (props: IResultAnswered) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const idMenu = useSelector(
    (appState: AppState) => appState.PlayerFeature.player.idMenu,
  );

  const getModal = useCallback(() => {
    switch (props.type) {
      case 'success':
        return (
          <Modal
            isVisible={props.isVisible}
            typeMax="FelizOrelhaBaixoDente"
            closeModal={props.closeModal}>
            <Markdown
              textAlign="center"
              title="Parabéns, você acertou!"
              fontColor="#FFEF60"
              fontSize={22}
            />
            <Markdown title="" fontColor="#FFEF60" fontSize={22} />
            <DivButtonModal noPadding>
              <Button
                text="Menu"
                onPress={() => navigate('MenuScreen')}
                widthSize={110}
                heightSize={10}
                fontSize={16}
              />
              <Button
                text="Próximo"
                onPress={() => props.closeModal()}
                widthSize={160}
                heightSize={10}
                fontSize={16}
              />
            </DivButtonModal>
          </Modal>
        );
      case 'errored':
        return (
          <Modal
            isVisible={props.isVisible}
            typeMax="Feliz"
            closeModal={props.closeModal}>
            <Markdown
              title="Ops, foi por pouco."
              fontColor="#FFEF60"
              fontSize={22}
            />
            <Markdown
              title="Tente novamente"
              fontColor="#FFEF60"
              fontSize={22}
            />
            <DivButtonModal>
              <Button
                text="Menu"
                onPress={() => navigate('MenuScreen')}
                widthSize={110}
                heightSize={10}
                fontSize={16}
              />
              <Button
                text="Tentar de novo"
                onPress={() => props.closeModal()}
                widthSize={160}
                heightSize={10}
                fontSize={16}
              />
            </DivButtonModal>
          </Modal>
        );
      case 'nextLevel':
        return (
          <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
            <Container>
              <Markdown title="This is nextLevel modal" />
            </Container>
          </Modal>
        );
      case 'finishLevel':
        return (
          <Modal
            isVisible={props.isVisible}
            typeMax="FelizOrelhaBaixoDente"
            closeModal={props.closeModal}>
            <Markdown
              title="Parabéns, você finalizou essa fase."
              textAlign="center"
              fontColor="#FFEF60"
              fontSize={22}
            />
            <DivButtonModal>
              <Button
                text="Menu"
                onPress={() => navigate('MenuScreen')}
                widthSize={110}
                heightSize={10}
                fontSize={16}
              />
              <Button
                text="Vamos de novo"
                onPress={() => {
                  dispatch(resetStage({idMenu: idMenu}));
                  props.closeModal();
                }}
                widthSize={160}
                heightSize={10}
                fontSize={16}
              />
            </DivButtonModal>
          </Modal>
        );
      case 'endGame':
        return (
          <Modal
            isVisible={props.isVisible}
            typeMax="FelizOrelhaBaixoDente"
            closeModal={props.closeModal}>
            <Markdown
              title="Parabéns, você finalizou o jogo."
              textAlign="center"
              fontColor="#FFEF60"
              fontSize={22}
            />
            <DivButtonModal>
              <Button
                text="Menu"
                onPress={() => navigate('MenuScreen')}
                widthSize={110}
                heightSize={10}
                fontSize={16}
              />
              <Button
                text="Vamos de novo"
                onPress={() => props.closeModal()}
                widthSize={160}
                heightSize={10}
                fontSize={16}
              />
            </DivButtonModal>
          </Modal>
        );
    }
  }, [props.type, props.isVisible, props.closeModal]);

  return getModal();
};

export default memo(ResultAnswered);
