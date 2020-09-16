import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 16px;
  background: white;
  border-radius: 32px;
  overflow: hidden;
`;

export const ContainerModal = styled.View`
  padding: 16px;
  background: white;
  border-radius: 32px;
  overflow: hidden;
`;

export const Line = styled.View`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #cdcdcd;
`;

export const TouchableSurvey = styled.TouchableOpacity`
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Header = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

export const Padding = styled.View`
  padding: 4px;
`;
