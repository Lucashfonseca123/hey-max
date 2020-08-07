import styled, {css} from 'styled-components/native';

interface IPlayerScreenProps {
  noPadding?: boolean;
}

const Container = styled.View`
  background-color: #ffef60;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
`;

const DivImage = styled.View`
  position: absolute;
  top: -30px;
  left: 235px;
  transform: rotate(310deg);
`;

const DivTop = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 36px;
`;

const DivMiddle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const DivButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const DivButtonModal = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  ${(props: IPlayerScreenProps) =>
    props.noPadding
      ? css`
          margin-top: 0px;
        `
      : css`
          margin-top: 32px;
        `}
`;

const DivImageModal = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export {
  Container,
  DivButton,
  DivMiddle,
  DivTop,
  DivImage,
  DivButtonModal,
  DivImageModal,
};
