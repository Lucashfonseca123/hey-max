import React, {memo, useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {Container, DivButtonModal, DivImageModal} from './styles';
import {Modal, Markdown, Button, Image} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetStage} from 'features/player/redux/reducer/playerReducer';
import {AppState} from 'store/RootReducer';

interface IResultAnswered {
  type: 'success' | 'errored' | 'nextLevel' | 'finishLevel' | 'endGame';
  isVisible: boolean;
  closeModal: Function;
  typeProgress?: 'baby' | 'child' | 'teenager' | 'young' | 'adult' | 'old';
}

const ResultAnswered = (props: IResultAnswered) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const idMenu = useSelector(
    (appState: AppState) => appState.PlayerFeature.player.idMenu,
  );

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeGoodLuck = useRef(new Animated.Value(0)).current;

  console.log(fadeAnim);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeGoodLuck, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      delay: 2500,
    }).start();
  }, [fadeAnim, fadeGoodLuck]);

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
        switch (props.typeProgress) {
          case 'baby':
            return (
              <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
                <Container>
                  <Markdown title="This is baby modal" />
                </Container>
              </Modal>
            );
          case 'child':
            return (
              <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
                <Container>
                  <Animated.View
                    style={[
                      {
                        opacity: fadeAnim,
                      },
                    ]}>
                    <Markdown
                      textAlign="center"
                      title="Olá, vamos começar nossa jornada!"
                      fontColor="#FFEF60"
                      fontSize={22}
                    />
                  </Animated.View>
                  <Animated.View style={[{opacity: fadeGoodLuck}]}>
                    <Markdown
                      textAlign="center"
                      title="Boa sorte!"
                      fontColor="#FAE519"
                      fontSize={32}
                    />
                  </Animated.View>
                  <Animated.View
                    style={[
                      {
                        opacity: fadeAnim,
                      },
                    ]}>
                    <DivImageModal>
                      <Image type="FelizOrelhaDente" width={120} height={150} />
                    </DivImageModal>
                  </Animated.View>
                  <Animated.View style={[{opacity: fadeGoodLuck}]}>
                    <Button
                      text="Vamos!"
                      onPress={() => props.closeModal()}
                      widthSize={160}
                      heightSize={10}
                      fontSize={16}
                    />
                  </Animated.View>
                </Container>
              </Modal>
            );
          case 'teenager':
            return (
              <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
                <Container>
                  <Markdown
                    textAlign="center"
                    title="Parabéns, você evoluiu!"
                    fontColor="#FFEF60"
                    fontSize={22}
                  />
                  <Markdown
                    title="Novo status:"
                    fontColor="#FFFFFF"
                    fontSize={22}
                  />
                  <Markdown title="Criança" fontColor="#FFEF60" fontSize={22} />
                  <DivImageModal>
                    <Image type="Criança" width={70} height={150} />
                  </DivImageModal>
                  <Button
                    text="Continuar"
                    onPress={() => props.closeModal()}
                    widthSize={160}
                    heightSize={10}
                    fontSize={16}
                  />
                </Container>
              </Modal>
            );
          case 'young':
            return (
              <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
                <Container>
                  <Markdown
                    textAlign="center"
                    title="Parabéns, você evoluiu!"
                    fontColor="#FFEF60"
                    fontSize={22}
                  />
                  <Markdown
                    title="Novo status:"
                    fontColor="#FFFFFF"
                    fontSize={22}
                  />
                  <Markdown
                    title="Adolescente"
                    fontColor="#FFEF60"
                    fontSize={22}
                  />
                  <DivImageModal>
                    <Image type="Adolescente" width={70} height={150} />
                  </DivImageModal>
                  <Button
                    text="Continuar"
                    onPress={() => props.closeModal()}
                    widthSize={160}
                    heightSize={10}
                    fontSize={16}
                  />
                </Container>
              </Modal>
            );
          case 'adult':
            return (
              <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
                <Container>
                  <Markdown
                    textAlign="center"
                    title="Parabéns, você evoluiu!"
                    fontColor="#FFEF60"
                    fontSize={22}
                  />
                  <Markdown
                    title="Novo status:"
                    fontColor="#FFFFFF"
                    fontSize={22}
                  />
                  <Markdown title="Adulto" fontColor="#FFEF60" fontSize={22} />
                  <DivImageModal>
                    <Image type="Adulto" width={70} height={150} />
                  </DivImageModal>
                  <Button
                    text="Continuar"
                    onPress={() => props.closeModal()}
                    widthSize={160}
                    heightSize={10}
                    fontSize={16}
                  />
                </Container>
              </Modal>
            );
          case 'old':
            return (
              <Modal isVisible={props.isVisible} closeModal={props.closeModal}>
                <Container>
                  <Markdown
                    textAlign="center"
                    title="Parabéns, você finalizou o jogo!"
                    fontColor="#FFEF60"
                    fontSize={22}
                  />
                  <Markdown
                    title="Novo status:"
                    fontColor="#FFFFFF"
                    fontSize={22}
                  />
                  <Markdown title="Idoso" fontColor="#FFEF60" fontSize={22} />
                  <DivImageModal>
                    <Image type="Velho" width={70} height={150} />
                  </DivImageModal>
                  <Button
                    text="Continuar"
                    onPress={() => props.closeModal()}
                    widthSize={160}
                    heightSize={10}
                    fontSize={16}
                  />
                </Container>
              </Modal>
            );
        }

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
