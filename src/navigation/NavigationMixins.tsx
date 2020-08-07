import React, {ReactNode, useContext} from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {View, TouchableOpacity} from 'react-native';
import {HeaderButtonContainer} from './styles';
import {Markdown, Image} from '../components';
// // import SolidIcons from 'assets/SolidIcons';

export interface IHeaderComposerProps {
  showHeader?: boolean;
  leftComponent?: React.ReactNode;
  middleComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  middleElementAlignment?: 'center' | 'left';
  backgroundColor?: string;
  elevation?: boolean;
}

export function headerComposer(
  props: IHeaderComposerProps,
): StackNavigationOptions {
  const {
    leftComponent,
    rightComponent,
    middleComponent,
    middleElementAlignment,
    showHeader,
  } = props;
  const headerOptions: StackNavigationOptions = {
    headerShown: showHeader,
    headerLeftContainerStyle: leftComponent ? {marginLeft: 8} : undefined,
    headerRightContainerStyle: rightComponent ? {marginRight: 8} : undefined,
    headerLeft: leftComponent ? () => leftComponent : undefined,
    headerRight: rightComponent ? () => rightComponent : undefined,
    headerTitle: middleComponent ? () => middleComponent : undefined,
    headerTitleAlign: middleElementAlignment
      ? middleElementAlignment
      : 'center',
    headerStyle: {
      height: 72,
      elevation: props.elevation ? 1 : 0,
      backgroundColor: props.backgroundColor,
    },
  };
  return headerOptions;
}

export class Header {
  /**
   * name
   */
  static Title(
    text: string,
    fontSize: number,
    fontFamily?: 'showcard-gothic',
  ): ReactNode {
    return (
      <View>
        <Markdown
          title={text}
          fontColor="white"
          fontSize={fontSize}
          fontFamily={fontFamily}
        />
      </View>
    );
  }
  static BackButton(onPress: Function, color?: string): ReactNode {
    return (
      <HeaderButtonContainer>
        <TouchableOpacity onPress={() => onPress()} disabled={false}>
          <HeaderButtonContainer>
            <Image type="ArrowRight" width={45} height={45} />
            {/* <SolidIcons icon="LeftArrow" size={12} color={color} /> */}
          </HeaderButtonContainer>
        </TouchableOpacity>
      </HeaderButtonContainer>
    );
  }
  static CloseButton(onPress: Function, color?: string): ReactNode {
    return (
      <HeaderButtonContainer>
        <TouchableOpacity onPress={() => onPress()} disabled={false}>
          <HeaderButtonContainer>
            {/* <SolidIcons icon="Close" size={12} color={color} /> */}
          </HeaderButtonContainer>
        </TouchableOpacity>
      </HeaderButtonContainer>
    );
  }
  static ConfigButton(onPress: Function): ReactNode {
    return (
      <HeaderButtonContainer>
        <TouchableOpacity onPress={() => onPress()} disabled={false}>
          <HeaderButtonContainer>
            <Image type="Question" width={32} height={39} />
          </HeaderButtonContainer>
        </TouchableOpacity>
      </HeaderButtonContainer>
    );
  }
}
