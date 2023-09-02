import React from 'react'
import styles from './MainWrapper.module.scss'
import lolo from '../../images/Vector.svg'

export const MainWrapper:React.FC = () => {
  return (
    <div className={styles.mainWrapper} id='main'>
      <div className={styles.mainWrapperTittle}>
            <h1>QOBILJON IBAYDULLAYEV</h1>
            <h2>WEB DEVELOPPER</h2>
            
          </div>
          <img className={styles.vectorLine} src={lolo} alt="" />
    </div>
  );
}
