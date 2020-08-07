import React, {memo, useState, useRef, useEffect, useCallback} from 'react';
import {Dimensions, BackHandler, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Card, Markdown} from 'components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {headerComposer, Header} from 'navigation/NavigationMixins';
import {Container, BottomContainer, Item} from './styles';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const {width: screenWidth} = Dimensions.get('window');

interface IPagination {
  activeSlide: number;
}

interface IListItem {
  item: {name: string; object?: object; image?: string};
  index: number;
}

const MenuScreen = () => {
  const [onSnapItem, setOnSnapItem] = useState<IPagination>({activeSlide: 0});
  const [stage, setStage] = useState([{}]);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  const stages = useSelector(
    (appState: AppState) => appState.MenuFeature.state.menus,
  );

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate('WelcomeScreen');
      return true;
    });
  }, [navigation]);

  useEffect(() => {
    setStage(stages);
  }, [stages]);

  navigation.setOptions(
    headerComposer({
      leftComponent: Header.BackButton(() =>
        navigation.navigate('WelcomeScreen'),
      ),
      backgroundColor: '#FFEF60',
      rightComponent: Header.ConfigButton(() =>
        navigation.navigate('ConfigurationScreen'),
      ),
    }),
  );

  const renderItem = useCallback(
    ({item, index}: IListItem) => {
      const {activeSlide} = onSnapItem;

      return (
        <Item>
          <Card
            source={item.image}
            image={true}
            onPress={() =>
              navigation.navigate('PlayerScreen', {
                params: item,
              })
            }>
            <Markdown
              title={item.name}
              lineHeight={40}
              fontSize={32}
              textAlign="center"
            />
          </Card>
          <Pagination
            dotsLength={stage.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.pagination}
            inactiveDotStyle={{}}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </Item>
      );
    },
    [navigation, onSnapItem, stage.length],
  );

  return (
    <Container>
      <Carousel
        ref={carouselRef}
        itemWidth={screenWidth - 60}
        sliderWidth={screenWidth}
        data={stages}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={(index) => setOnSnapItem({activeSlide: index})}
      />
      <BottomContainer>
        <Markdown title="Deslize para outros temas" fontSize={19} />
      </BottomContainer>
    </Container>
  );
};

export default memo(MenuScreen);

const styles = StyleSheet.create({
  pagination: {
    width: 15,
    height: 15,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
