import styled, {css} from 'styled-components/native';

interface IImage {
  width?: number;
  height?: number;
  default247?: boolean;
}

export const Image = styled.Image`
  ${(props: IImage) => css`
    ${props.default247
      ? css`
          width: ${props.width ? props.width : 247}px;
          height: ${props.height ? props.height : 200}px;
        `
      : css`
          width: ${props.width ? props.width : 147}px;
          height: ${props.height ? props.height : 100}px;
        `}
  `}
`;
