import React, { useState } from 'react'
import Styles from '../../styles/Home.module.css';
import Categoria from '../../componentes/Categoria';
import CampoBusca from '../../componentes/CampoBusca';
import Card from '../../componentes/Card';
import { produtosEntradas } from '../../servico';

export default function Home() {
    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
    return (
        <>
            <section className={Styles.banner}>
                <div className={`limite-largura ${Styles.banner_content}`}>
                    <div className={Styles.titulo}>
                        <h1>RESTAURANT</h1>
                        <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
                    </div>
                </div>
            </section>
            <Categoria dadosFiltrados={dadosFiltrados} setDadosFiltrados={setDadosFiltrados} />
            <CampoBusca setDadosFiltrados={setDadosFiltrados} />
            <section className={Styles.show_pratos}>
                <h1>Cardápio</h1>
                <div className={`limite-largura ${Styles.show_card_container}`}>
                    {
                        dadosFiltrados.map((produto) => (
                            <Card
                                key={produto.id}
                                produto={produto}
                            />
                        ))}
                </div>
            </section>
        </>
    )
}
