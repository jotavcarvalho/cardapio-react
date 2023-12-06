import React,{useState} from 'react'
import Styles from './Categoria.module.css';
import Image from 'next/image';
import Entrada from '../../../public/Assets/entrada.png'
import Massas from '../../../public/Assets/massa.png'
import Carnes from '../../../public/Assets/carne.png'
import Bebidas from '../../../public/Assets/bebidas.png'
import Saladas from '../../../public/Assets/salada.png'
import Sobremesas from '../../../public/Assets/sobremesa.png'
import {filtrarProdutos} from '../../servico';

export default function Categoria({ dadosFiltrados, setDadosFiltrados }) {
    
  const [botaoClicado, setBotaoClicado] = useState("Entradas")

  const botaoClique = (categoria) => {
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
};

  return (
    <section className={`limite-largura ${Styles.btn_section}`}>
      <button className={`${Styles.btn_off} ${botaoClicado === "Entradas" ? Styles.btn_on : null}`}
      onClick={() => botaoClique("Entradas")}><Image src={Entrada}/>Entradas</button>
      <button className={`${Styles.btn_off} ${botaoClicado === "Massas" ? Styles.btn_on : null}`}
      onClick={() => botaoClique("Massas")}><Image src={Massas}/>Massas</button>
      <button className={`${Styles.btn_off} ${botaoClicado === "Carnes" ? Styles.btn_on : null}`}
      onClick={() => botaoClique("Carnes")}><Image src={Carnes}/>Carnes</button>
      <button className={`${Styles.btn_off} ${botaoClicado === "Bebidas" ? Styles.btn_on : null}`}
      onClick={() => botaoClique("Bebidas")}><Image src={Bebidas}/>Bebidas</button>
      <button className={`${Styles.btn_off} ${botaoClicado === "Saladas" ? Styles.btn_on : null}`}
      onClick={() => botaoClique("Saladas")}><Image src={Saladas}/>Saladas</button>
      <button className={`${Styles.btn_off} ${botaoClicado === "Sobremesas" ? Styles.btn_on : null}`}
      onClick={() => botaoClique("Sobremesas")}><Image src={Sobremesas}/>Sobremesas</button>
    </section>
  )
}

