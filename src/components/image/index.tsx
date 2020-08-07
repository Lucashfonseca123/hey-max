import React from 'react';
import {Image} from 'react-native';

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
    | 'Gmail';
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
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Feliz': {
        return (
          <Image
            source={require('../../assets/max/Feliz.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'FelizOrelhaBaixoDente': {
        return (
          <Image
            source={require('../../assets/max/FelizOrelhaBaixoDente.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'FelizOrelhaDente': {
        return (
          <Image
            source={require('../../assets/max/FelizOrelhaDente.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Inteiro': {
        return (
          <Image
            source={require('../../assets/max/Inteiro.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'TristeChoro': {
        return (
          <Image
            source={require('../../assets/max/TristeChoro.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      /**** FIM ICON MAX ****/
      /*** INICIO ICON AVATAR ***/
      case 'Adolescente': {
        return (
          <Image
            source={require('../../assets/avatar/adolescente.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Adulto': {
        return (
          <Image
            source={require('../../assets/avatar/adulto.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Bebe': {
        return (
          <Image
            source={require('../../assets/avatar/bebe.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Criança': {
        return (
          <Image
            source={require('../../assets/avatar/crianca.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Velho': {
        return (
          <Image
            source={require('../../assets/avatar/velho.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }

      //*** FIM ICON AVATAR ***/
      //*** INICIO GENERAL ICONS ***/

      case 'ArrowRight': {
        return (
          <Image
            source={require('../../assets/icons/arrowRight.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Question': {
        return (
          <Image
            source={require('../../assets/icons/question.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Checkbox': {
        return (
          <Image
            source={require('../../assets/icons/checkbox.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'CheckboxConfirmed': {
        return (
          <Image
            source={require('../../assets/icons/checkbox-confirmed.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Exit': {
        return (
          <Image
            source={require('../../assets/icons/exit.png')}
            style={{
              width: props.width ? props.width : 247,
              height: props.height ? props.height : 200,
            }}
          />
        );
      }
      case 'Close': {
        return (
          <Image
            source={require('../../assets/icons/close.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Menu': {
        return (
          <Image
            source={require('../../assets/icons/menu.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }

      //*** FIM GENERAL ICONS ***/
      //*** INICIO GEOMETRIC PICTURES ***/

      case 'Quadrado': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/quadrado.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Circulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/circulo.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Retangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/retangulo.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Triangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/triangulo.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'FundoRetangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/retangulo.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Pentagono': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/pentagono.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Hexagono': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/hexagono.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Trapezio': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/trapezio.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Elipse': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/elipse.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }

      //*** FIM GEOMETRIC PICTURES ***/
      //*** FIM FOOD PICTURES ***/

      case 'Apple': {
        return (
          <Image
            source={require('../../assets/pictures/food/apple.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Chicken': {
        return (
          <Image
            source={require('../../assets/pictures/food/chicken.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'FrenchFries': {
        return (
          <Image
            source={require('../../assets/pictures/food/frenchFries.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Macarrao': {
        return (
          <Image
            source={require('../../assets/pictures/food/macarrao.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Pineapple': {
        return (
          <Image
            source={require('../../assets/pictures/food/pineapple.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Pizza': {
        return (
          <Image
            source={require('../../assets/pictures/food/pizza.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'PorCorn': {
        return (
          <Image
            source={require('../../assets/pictures/food/popCorn.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
      case 'Watermellon': {
        return (
          <Image
            source={require('../../assets/pictures/food/watermellon.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }

      case 'Gmail': {
        return (
          <Image
            source={require('../../assets/icons/gmail.png')}
            style={{
              width: props.width ? props.width : 147,
              height: props.height ? props.height : 100,
            }}
          />
        );
      }
    }
  };
  return <>{getUrl()}</>;
};

export default React.memo(MaxImage);
