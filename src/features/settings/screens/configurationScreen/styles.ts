import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  padding-top: 32px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #ffef60;
  flex: 1;
  flex-direction: row;
`;

export const DivCard = styled.View`
  padding-left: 30px;
  flex: 1;
  margin-top: 20px;
`;

export const Padding = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const PaddingBar = styled.View`
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const DivButtonModal = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const DivVersion = styled.View`
  width: 100%;
  align-items: flex-end;
`;
