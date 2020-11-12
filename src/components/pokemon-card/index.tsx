import React from 'react';
import Heading, { HeaderType } from '../Heading';

import styles from './PokemonCard.module.scss';

interface PokemonCardInterface {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: string[];
  img: string;
}

const PokemonCard: React.FC<PokemonCardInterface> = ({ name, stats: { attack, defense }, types, img }) => {
  return (
    <div className={styles.root}>
      <div className={styles.infoWrap}>
        <Heading type={HeaderType.h5} className={styles.titleName}>
          {name}
        </Heading>
        <div className={styles.statWrap}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{attack}</div>
            Attack
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={styles.labelWrap}>
          {types &&
            types.map((type) => (
              <span key={type} className={styles.label}>
                {type}
              </span>
            ))}
        </div>
      </div>
      <div className={styles.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
