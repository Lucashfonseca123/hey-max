import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #FFEF60;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`;

const ContainerBottom = styled.View`
  margin-top: 26px;
  width: 100%;
   /* justify-content: center; */
  align-items: center;
  /* flex: 1;   */
`;

const ContainerImage = styled.View`
  top: 6px;
  right: 100px;
`;

const ContainerPopUp = styled.View`
  bottom: 135px;
  right: 182px;
`;


export { Container, ContainerBottom, ContainerImage, ContainerPopUp }

