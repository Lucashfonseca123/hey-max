import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  background-color: #ffef60;
`;

const ContainerTop = styled.View`
  left: -36px;
  top: 140px;
  position: absolute;
  transform: rotate(57deg);
`;

const ContainerMiddle = styled.View`
  flex: 1;
  margin-top: 320px;
  align-items: center;
  justify-content: center;
`;

const ContainerBottom = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export { Container, ContainerTop, ContainerMiddle, ContainerBottom };
