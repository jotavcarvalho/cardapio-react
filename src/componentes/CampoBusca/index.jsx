import React, { useState } from 'react'
import Image from 'next/image';
import Lupa from '../../../public/Assets/lupa.png'
import Styles from './CampoBusca.module.css';
import { buscarPratos} from '../../servico';

export default function CampoBusca({setDadosFiltrados }) {
    const [textoDigitado, setTextoDigitado] = useState('');
   
    return (
        <section className={`limite-largura ${Styles.sec_input_busca}`}>
            <Image src={Lupa}/>
            <input
                type="text"
                placeholder="Digite o prato que deseja"
                onChange={(e) => buscarPratos(e.target.value,setDadosFiltrados)}
            />
        </section>
    )
}

