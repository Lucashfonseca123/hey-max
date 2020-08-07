import styled, {css} from 'styled-components/native';

interface IContainerPopUp {
  posTop: number | undefined;
  posLeft: number | undefined;
  width: number | undefined;
}

const ContainerPopUp = styled.View`
  ${(props: IContainerPopUp) => css`
    position: absolute;
    top: ${props.posTop ? props.posTop : 80}px;
    left: ${props.posLeft ? props.posLeft : 45}px;
    width: ${props.width ? props.width : 59}%;
  `}
`;

export {ContainerPopUp};
