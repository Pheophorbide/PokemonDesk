import React, { useState, useEffect } from 'react';
import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

import styles from './Parallax.module.scss';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseEvent = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseEvent);

    return function cleanUp() {
      window.removeEventListener('mousemove', handleMouseEvent);
    };
  }, [screenX, screenY]);

  return (
    <div className={styles.root}>
      <div
        className={styles.smallPokeBall}
        style={{
          transform: `translate(${screenX * 0.07}px, ${screenY * 0.08}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={styles.cloud}
        style={{
          transform: `translate(${screenX * 0.03}px, ${screenY * 0.04}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={styles.cloudBig}
        style={{
          transform: `translate(${screenX * 0.04}px, ${screenY * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        className={styles.pokeBall}
        style={{
          transform: `translate(${screenX * 0.1}px, ${screenY * 0.11}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={styles.pikachu}
        style={{
          transform: `translate(${screenX * 0.09}px, ${screenY * 0.1}px)`,
        }}>
        <img src={PikachuPng} alt="PikachuPng" />
      </div>
    </div>
  );
};

export default Parallax;
