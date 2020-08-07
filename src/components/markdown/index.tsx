import React from 'react';
import {View} from 'react-native';
import {MarkdownT} from './styles';

interface IMarkdown {
  title: string;
  fontSize?: number;
  fontColor?: string;
  fontFamily?: string;
  textAlign?: string;
  lineHeight?: number;
}

const Markdown = ({
  title,
  fontSize,
  fontColor,
  fontFamily,
  textAlign,
  lineHeight,
}: IMarkdown) => {
  return (
    <View>
      <MarkdownT
        fontSize={fontSize}
        fontColor={fontColor}
        fontFamily={fontFamily}
        textAlign={textAlign}
        lineHeight={lineHeight}>
        {title}
      </MarkdownT>
    </View>
  );
};

export default React.memo(Markdown);
