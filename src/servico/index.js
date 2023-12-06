import React,{useState} from 'react'
import { produtos } from '../dados/dados-colecao';

export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
  };

export const produtosEntradas = filtrarProdutos("Entradas");

export const buscarPratos = (textoDigitado, setDadosFiltrados) => {
    if(textoDigitado.length >= 3){
    const resultado = produtos.filter((produto) =>
       produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
       produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase()));
    setDadosFiltrados(resultado);
}
};