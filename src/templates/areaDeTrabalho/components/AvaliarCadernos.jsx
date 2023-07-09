import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";

import styles from "../styles/AreaDeTrabalho.module.css";

export default function AvaliarCadernos() {
  const nome = "Ricardo";
  const reservado = "Reservado";
  const preencher = "Preencher Formulário";
  const download = "Download";

  return (
    <section className={styles.avaliarCadernos_section}>
      <h1>Avaliar Cadernos</h1>
      <div className={styles.avaliarCadernos_itens}>
        <div className={styles.avaliarCadernos_opcoes}>
          <input type="checkbox" />
        </div>
      </div>
      <div className={styles.avaliarCadernos_itens}>
        <h2>Aluno</h2>
        <div className={styles.avaliarCadernos_opcoes}>
          <div>{nome}</div>
        </div>
      </div>
      <div className={styles.avaliarCadernos_itens}>
        <h2>Reservado em</h2>
        <div className={styles.avaliarCadernos_opcoes}>
          <div>{reservado}</div>
        </div>
      </div>
      <div className={styles.avaliarCadernos_itens}>
        <h2>Baixar Caderno</h2>
        <div className={styles.avaliarCadernos_baixar}>
          <Image src={DownloadImage} alt="icone de download" />
          <div>{download}</div>
        </div>
      </div>
      <div className={styles.avaliarCadernos_itens}>
        <h2>Formulário de avaliação</h2>
        <div className={styles.avaliarCadernos_opcoes}>
          <div>{preencher}</div>
        </div>
      </div>
    </section>
  );
}
