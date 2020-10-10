import React from 'react';
import { Image } from './styles';

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
  | 'Cavalo'
  | 'Coelho'
  | 'Dog'
  | 'Galinha'
  | 'Gato'
  | 'Porco'
  | 'Rato'
  | 'Vaca'
  | 'Aviao'
  | 'Caminhao'
  | 'Camionete'
  | 'Carro'
  | 'Foguete'
  | 'Moto'
  | 'Navio'
  | 'Trem'
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
            source={require('../../assets/avatar/adolescente.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Adulto': {
        return (
          <Image
            source={require('../../assets/avatar/adulto.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Bebe': {
        return (
          <Image
            source={require('../../assets/avatar/bebe.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Criança': {
        return (
          <Image
            source={require('../../assets/avatar/crianca.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Velho': {
        return (
          <Image
            source={require('../../assets/avatar/velho.png')}
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
            source={require('../../assets/icons/arrowRight.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Question': {
        return (
          <Image
            source={require('../../assets/icons/question.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Checkbox': {
        return (
          <Image
            source={require('../../assets/icons/checkbox.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'CheckboxConfirmed': {
        return (
          <Image
            source={require('../../assets/icons/checkboxConfirmed.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Exit': {
        return (
          <Image
            source={require('../../assets/icons/exit.png')}
            width={props.width}
            height={props.height}
            default247
          />
        );
      }
      case 'Close': {
        return (
          <Image
            source={require('../../assets/icons/close.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Menu': {
        return (
          <Image
            source={require('../../assets/icons/menu.png')}
            width={props.width}
            height={props.height}
          />
        );
      }

      case 'Gmail': {
        return (
          <Image
            source={require('../../assets/icons/gmail.png')}
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
            source={require('../../assets/pictures/geometricFigures/quadrado.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Circulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/circulo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Retangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/retangulo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Triangulo': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/triangulo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Pentagono': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/pentagono.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Hexagono': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/hexagono.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Trapezio': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/trapezio.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Elipse': {
        return (
          <Image
            source={require('../../assets/pictures/geometricFigures/elipse.png')}
            width={props.width}
            height={props.height}
          />
        );
      }

      //*** FIM GEOMETRIC PICTURES ***/
      //*** INICIO FOOD PICTURES ***/

      case 'Apple': {
        return (
          <Image
            source={require('../../assets/pictures/food/apple.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Chicken': {
        return (
          <Image
            source={require('../../assets/pictures/food/chicken.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'FrenchFries': {
        return (
          <Image
            source={require('../../assets/pictures/food/frenchFries.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Macarrao': {
        return (
          <Image
            source={require('../../assets/pictures/food/macarrao.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Pineapple': {
        return (
          <Image
            source={require('../../assets/pictures/food/pineapple.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Pizza': {
        return (
          <Image
            source={require('../../assets/pictures/food/pizza.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'PorCorn': {
        return (
          <Image
            source={require('../../assets/pictures/food/popCorn.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Watermellon': {
        return (
          <Image
            source={require('../../assets/pictures/food/watermellon.png')}
            width={props.width}
            height={props.height}
          />
        );
      }

      //*** FIM FOOD PICTURES ***/
      //*** INICIO ANIMALS PICTURES ***/
      case 'Cavalo': {
        return (
          <Image
            source={require('../../assets/pictures/animals/cavalo.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Coelho': {
        return (
          <Image
            source={require('../../assets/pictures/animals/coelho.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Dog': {
        return (
          <Image
            source={require('../../assets/pictures/animals/dog.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Galinha': {
        return (
          <Image
            source={require('../../assets/pictures/animals/galinha.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Gato': {
        return (
          <Image
            source={require('../../assets/pictures/animals/gato.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Porco': {
        return (
          <Image
            source={require('../../assets/pictures/animals/porco.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Rato': {
        return (
          <Image
            source={require('../../assets/pictures/animals/rato.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Vaca': {
        return (
          <Image
            source={require('../../assets/pictures/animals/vaca.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      //*** FIM ANIMALS PICTURES ***/
      //*** INICIO VEHICLES PICTURES ***/
      case 'Aviao': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/aviao.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Caminhao': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/caminhao.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Camionete': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/camionete.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Carro': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/carro.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Foguete': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/foguete.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Moto': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/moto.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Navio': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/navio.png')}
            width={props.width}
            height={props.height}
          />
        );
      }
      case 'Trem': {
        return (
          <Image
            source={require('../../assets/pictures/vehicles/trem.png')}
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
