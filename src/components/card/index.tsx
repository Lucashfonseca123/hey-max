import React, {ReactNode, memo} from 'react';
import {Card, CardWithImage, TouchableCard} from './styles';

interface ICard {
  children?: ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
  backgroundColor?: string;
  width?: number;
  onPress?: Function;
  borderColor?: string;
  borderWidth?: number;
  source?: NodeRequire | string;
  image?: boolean;
}

interface NodeRequire {
  (id: string): any;
}

const CardText = ({
  children,
  paddingTop,
  paddingBottom,
  backgroundColor,
  onPress,
  width,
  borderColor,
  borderWidth,
  source,
  image,
}: ICard) => {
  return (
    <>
      {image ? (
        <>
          <CardWithImage source={{uri: source}}>
            <TouchableCard onPress={onPress ? onPress : null}>
              {children}
            </TouchableCard>
          </CardWithImage>
        </>
      ) : (
        <Card
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          backgroundColor={backgroundColor}
          width={width}
          onPress={true}
          borderColor={borderColor}
          borderWidth={borderWidth}>
          {children}
        </Card>
      )}
    </>
  );
};

export default memo(CardText);
