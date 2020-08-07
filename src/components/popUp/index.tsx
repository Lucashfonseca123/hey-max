import React from 'react';
import {ContainerPopUp} from './styles';
import {Markdown, Card} from '../../components';

interface IPopUp {
  title: string;
  width?: number | undefined;
  height?: number;
  posTop?: number | undefined;
  posLeft?: number | undefined;
  fontSize?: number;
}

const PopUp = (props: IPopUp) => {
  return (
    <ContainerPopUp
      posTop={props.posTop}
      posLeft={props.posLeft}
      width={props.width}>
      <Card>
        <Markdown
          title={props.title}
          fontSize={props.fontSize ? props.fontSize : 16}
          fontColor="#FFEC3F"
        />
      </Card>
    </ContainerPopUp>
  );
};

export default React.memo(PopUp);
