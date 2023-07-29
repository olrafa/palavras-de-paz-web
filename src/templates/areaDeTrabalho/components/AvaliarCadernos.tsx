import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import useGetNotebooks from "../../../hooks/useGetNotebooks";

import styles from "../styles/AvaliarCadernos.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);
  console.log(notebooks);

  const nome = "Ricardo da Silva";
  const reservado = "25/05/2023";
  const preencher = "Preencher Formulário";

  // TODO: separar header das linhas, para poder dar um notebooks.map pra preencher a tabela.

  return (
    <section className={styles.avaliar_section}>
      <h1>Avaliar Cadernos</h1>
      <div className={styles.avaliar_itens}>
        <div className={styles.avaliar_titles}>
          <span />
          <h2>Aluno</h2>
          <h2>Reservado em</h2>
          <h2>Baixar Caderno</h2>
          <h2>Formulário de avaliação</h2>
        </div>
        {notebooks &&
          notebooks.map(({ studentName, reservationDate }) => (
            <div key={studentName} className={styles.avaliar_status}>
              <input type="checkbox" />
              <p>{studentName}</p>
              {reservationDate === null ? (
                "Não reservado"
              ) : (
                <p>{reservationDate}</p>
              )}
              <div className={styles.avaliar_status_div}>
                <Image src={DownloadImage} alt="icone de download" />
                <p>Download</p>
              </div>
              <p className={styles.avaliar_status_p5}>{preencher}</p>
            </div>
          ))}
        ;
      </div>
    </section>
  );
};

export default AvaliarCadernos;
