import styled, {css} from 'styled-components/native';

interface IPlayerScreenProps {
  noPadding?: boolean;
}

export const Container = styled.View`
  padding-top: 16px;
  align-items: center;
`;

export const DivButtonModal = styled.View`
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

export const DivImageModal = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`;
