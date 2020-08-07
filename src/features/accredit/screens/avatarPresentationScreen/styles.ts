import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  background-color: #FFEF60;
`;

const ContainerTop = styled.View`
  flex: 1;
  margin-top: 105px;
  align-items: center;
  margin-right: 272px;
  transform: rotate(57deg);
`;

const ContainerMiddle = styled.View`
    flex: 1;
    margin-top: 10px;
    align-items: center;
`;

const ContainerBottom = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;


export { Container, ContainerTop, ContainerMiddle, ContainerBottom };
