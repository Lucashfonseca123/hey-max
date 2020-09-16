import styled, {css} from 'styled-components/native';

interface IModalProps {
  width?: number;
  height?: number;
  noPadding?: boolean;
}

export const Container = styled.View`
  ${(props: IModalProps) => css`
    /* width: ${props.width ? props.width : 50}%;
    height: ${props.height ? props.height : 50}%; */
    padding-right: ${props.noPadding ? 0 : 16}px;
    padding-left: ${props.noPadding ? 0 : 16}px;
    padding-top: 24px;
    padding-bottom: 16px;
    background-color: #f2f2f2;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    elevation: 10;
  `}
`;

export const ContainerButton = styled.View`
  margin-left: 260px;
`;

export const ContainerModal = styled.View`
  align-items: center;
`;
