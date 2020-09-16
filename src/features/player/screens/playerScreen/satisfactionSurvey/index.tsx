import React, {memo} from 'react';
import {Markdown} from 'components';
import Modal from 'react-native-modal';

import {
  Container,
  Line,
  TouchableSurvey,
  Header,
  Padding,
  ContainerModal,
} from './styles';
import {ActivityIndicator, FlatList} from 'react-native';

interface ISatisfactionSurver {
  loading?: boolean;
  onPressed: Function;
  isVisible: boolean;
}

const SatisfactionSurvey = ({
  loading,
  onPressed,
  isVisible,
}: ISatisfactionSurver) => {
  const optionsSatisfaction = [
    'Gostei muito, jogaria de novo',
    'Gostei bastante',
    'Não gostei de algumas coisas',
    'Poderia ser melhor',
  ];

  return (
    <Modal isVisible={isVisible ? isVisible : false}>
      {loading ? (
        <ContainerModal>
          <ActivityIndicator size="large" color="#B07B3E" />
        </ContainerModal>
      ) : (
        <Container>
          <Header>
            <Markdown
              textAlign="center"
              title="Queremos te ouvir!"
              fontColor="#FFEF60"
              fontSize={22}
            />
            <Padding />
            <Markdown
              textAlign="center"
              title="O que você achou do jogo?"
              fontColor="#FFEF60"
              fontSize={20}
            />
          </Header>
          <FlatList
            style={{paddingTop: 16}}
            data={optionsSatisfaction}
            keyExtractor={(item, index) => `${index}`}
            ListHeaderComponent={() => <Line />}
            ItemSeparatorComponent={() => <Line />}
            renderItem={({item, index}) => (
              <TouchableSurvey onPress={() => onPressed(item)}>
                <Markdown
                  textAlign="center"
                  title={item}
                  fontColor="#F0A754"
                  fontSize={18}
                />
              </TouchableSurvey>
            )}
          />
        </Container>
      )}
    </Modal>
  );
};

export default memo(SatisfactionSurvey);
