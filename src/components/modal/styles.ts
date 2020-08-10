import styled, {css} from 'styled-components/native';

interface IModalProps {
  width?: number;
  height?: number;
}

export const Container = styled.View`
  ${(props: IModalProps) => css`
        /* width: ${props.width ? props.width : 50}%;
        height: ${props.height ? props.height : 50}%; */
        padding-right: 16px;
        padding-left: 16px;
        padding-top: 24px;
        padding-bottom: 16px;
        background-color: #F2F2F2;
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
