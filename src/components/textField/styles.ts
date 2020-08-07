import styled, {css} from 'styled-components/native';

interface ITextField {
  border?: boolean;
}

const TextInput = styled.TextInput`
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  ${(props: ITextField) => css`
    border-width: ${props.border ? 2 : 1}px;
    border-bottom-color: ${props.border ? '#FFEC3F' : '#e9e9e9'};
  `}
  width: 90%;
  font-size: 20px;
  font-family: showcard-gothic;
  margin-bottom: 8px;
`;

export {TextInput};
