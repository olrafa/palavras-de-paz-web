import React from "react";
import Image from "next/image";

import Logo from "../../../public/static/images/logo.svg";

import LINKS from "./links";

import styles from "./publicacoes.module.css";

const Publicacoes = () => (
  <>
    {LINKS.map(({ id, href, title, img }) => (
      <div key={id} className={styles.externalLink}>
        <a href={href} target="_blank" rel="noreferrer">
          <Image src={img || Logo} alt={title} />
        </a>
      </div>
    ))}
  </>
);

export default Publicacoes;
