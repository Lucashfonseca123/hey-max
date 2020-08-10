import styled, {css} from 'styled-components/native';

interface IPlayerScreenProps {
  noPadding?: boolean;
}

export const Container = styled.View``;

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
