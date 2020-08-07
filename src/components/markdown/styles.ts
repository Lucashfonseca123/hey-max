import styled, {css} from 'styled-components/native';

interface IMarkdown {
  fontSize: number | undefined;
  fontColor: string | undefined;
  fontFamily: string | undefined;
  textAlign: string | undefined;
  lineHeight?: number | undefined;
}

const MarkdownT = styled.Text`
  ${(props: IMarkdown) => css`
    font-size: ${props.fontSize ? props.fontSize : 26}px;
    color: ${props.fontColor ? props.fontColor : 'white'};
    font-family: ${props.fontFamily ? props.fontFamily : 'showcard-gothic'};
    text-shadow: 1px 1px 1px black;
    text-align: ${props.textAlign ? props.textAlign : 'auto'};
    ${props.lineHeight
      ? css`
          line-height: ${props.lineHeight}px;
        `
      : null}
  `}
`;

export {MarkdownT};
