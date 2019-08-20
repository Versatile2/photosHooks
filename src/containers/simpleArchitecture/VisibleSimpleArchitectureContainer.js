import React, { useState } from 'react';
import styles from './simpleArchitecture.scss';

const VisibleSimpleArchitectureContainer = (props) => {


    return (
        <div className={styles.SimpleArchitectureContainer}>
            {JSON.stringify(props)}
        </div>
    );
}

export default VisibleSimpleArchitectureContainer;