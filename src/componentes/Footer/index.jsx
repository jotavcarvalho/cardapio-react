import React from 'react'
import Styles from './Footer.module.css';

export default function Footer() {
   
    return (
        <footer>
            <div className={`limite-largura ${Styles.footer_content}`}>
                <p className={Styles.p_footer}>
                    Desenvolvido por <span className={Styles.span_footer}>João Carvalho</span>
                </p>
            </div>
        </footer>
    )
}

