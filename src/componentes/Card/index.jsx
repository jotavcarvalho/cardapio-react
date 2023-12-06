import React from 'react';
import Image from 'next/image';
import Style from './Card.module.css';

export default function Card({ produto }) {
    const formatarPreco = (preco) => {
        return preco.toFixed(2).replace('.',',');
    }
    return (
        <div className={Style.container_card}>
            <div className={Style.img_div}>
                <Image className={Style.img_card} src={produto.imagem} alt={produto.nome} />
            </div>
            <div className={Style.text_div}>
                <p>{produto.nome}</p>
                <p>{produto.categoria}</p>
                <p>{produto.descricao}</p>
                <p>R$ {formatarPreco(produto.preco)}</p>
            </div>
        </div>
    )
}
