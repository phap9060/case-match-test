import * as S from "./style";

import {ResultData} from '../../TS/Types'

type CardProps = {
  image?: string,
  text?: string,
  price: number,
  comic: ResultData,
  cart: ResultData
}


export function Card(props: CardProps) {

  return (
    <S.card>
      <S.image src={props.image} />
      <S.content> Titulo: {props.text} </S.content>
      <S.Price> {props.price > 0 ? `Preço: R$ ${props.price}` : 'Sem Estoque'}</S.Price>
   </S.card>
  );
}
