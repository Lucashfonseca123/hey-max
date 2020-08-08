import React from 'react';
import {Image} from './styles';

interface IImage {
  type:
    | 'Confuso'
    | 'Feliz'
    | 'FelizOrelhaBaixoDente'
    | 'FelizOrelhaDente'
    | 'Inteiro'
    | 'TristeChoro'
    | 'Adolescente'
    | 'Adulto'
    | 'Bebe'
    | 'Criança'
    | 'Nene'
    | 'Velho'
    | 'ArrowRight'
    | 'Question'
    | 'Checkbox'
    | 'CheckboxConfirmed'
    | 'Exit'
    | 'Close'
    | 'Menu'
    | 'Quadrado'
    | 'Circulo'
    | 'Octogono'
    | 'Pentagono'
    | 'Retangulo'
    | 'Trapezio'
    | 'Triangulo'
    | 'FundoRetangulo'
    | 'Elipse'
    | 'Hexagono'
    | 'Apple'
    | 'Chicken'
    | 'FrenchFries'
    | 'Macarrao'
    | 'Pineapple'
    | 'Pizza'
    | 'PorCorn'
    | 'Watermellon'
    | 'Gmail'
    | string;
  width?: number;
  height?: number;
}

const MaxImage = (props: IImage) => {
  const getUrl = () => {
    switch (props.type) {
      //**** ICONS MAX ****/
      case 'Confuso': {
        return (
          <Image
            source={require('../../assets/max/Confuso.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Feliz': {
        return (
          <Image
            source={require('../../assets/max/Feliz.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'FelizOrelhaBaixoDente': {
        return (
          <Image
            source={require('../../assets/max/FelizOrelhaBaixoDente.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'FelizOrelhaDente': {
        return (
          <Image
            source={require('../../assets/max/FelizOrelhaDente.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Inteiro': {
        return (
          <Image
            source={require('../../assets/max/Inteiro.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'TristeChoro': {
        return (
          <Image
            source={require('../../assets/max/TristeChoro.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      /**** FIM ICON MAX ****/
      /*** INICIO ICON AVATAR ***/
      case 'Adolescente': {
        return (
          <Image
            source={require('../../assets/avatar/Adolescente.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Adulto': {
        return (
          <Image
            source={require('../../assets/avatar/Adulto.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Bebe': {
        return (
          <Image
            source={require('../../assets/avatar/Bebe.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Criança': {
        return (
          <Image
            source={require('../../assets/avatar/Crianca.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Velho': {
        return (
          <Image
            source={require('../../assets/avatar/Velho.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }

      //*** FIM ICON AVATAR ***/
      //*** INICIO GENERAL ICONS ***/

      case 'ArrowRight': {
        return (
          <Image
            source={require('../../assets/icons/ArrowRight.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Question': {
        return (
          <Image
            source={require('../../assets/icons/Question.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Checkbox': {
        return (
          <Image
            source={require('../../assets/icons/Checkbox.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'CheckboxConfirmed': {
        return (
          <Image
            source={require('../../assets/icons/CheckboxConfirmed.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Exit': {
        return (
          <Image
            source={require('../../assets/icons/Exit.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Close': {
        return (
          <Image
            source={require('../../assets/icons/Close.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Menu': {
        return (
          <Image
            source={require('../../assets/icons/Menu.png')}
            width={props.width}
            height={props.height}
          />
        );
      }

      case 'Gmail': {
        return (
          <Image
            source={require('../../assets/icons/Gmail.png')}
            width={props.width}
            height={props.height}
          />
        );
      }

      //*** FIM GENERAL ICONS ***/
      //*** INICIO GEOMETRIC PICTURES ***/

      case 'Quadrado': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Quadrado.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Circulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Circulo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Retangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Retangulo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Triangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Triangulo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Pentagono': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Pentagono.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Hexagono': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Hexagono.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Trapezio': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Trapezio.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Elipse': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/Elipse.png')}
            width={props.width}
            height={props.height}
          />
        );
      }

      //*** FIM GEOMETRIC PICTURES ***/
      //*** FIM FOOD PICTURES ***/

      case 'Apple': {
        return (
          <Image
            source={require('../../assets/pictures/food/Apple.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Chicken': {
        return (
          <Image
            source={require('../../assets/pictures/food/Chicken.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'FrenchFries': {
        return (
          <Image
            source={require('../../assets/pictures/food/FrenchFries.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Macarrao': {
        return (
          <Image
            source={require('../../assets/pictures/food/Macarrao.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Pineapple': {
        return (
          <Image
            source={require('../../assets/pictures/food/Pineapple.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Pizza': {
        return (
          <Image
            source={require('../../assets/pictures/food/Pizza.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'PorCorn': {
        return (
          <Image
            source={require('../../assets/pictures/food/PopCorn.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Watermellon': {
        return (
          <Image
            source={require('../../assets/pictures/food/Watermellon.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
    }
  };
  return <>{getUrl()}</>;
};

export default React.memo(MaxImage);
