import React from 'react';
import styles from './heading.module.css'

const Heading = (props) => {
    const style = `${styles.fontHeading} border border-dark p-2 m-2 bg-primary rounded text-white text-center`;
    return (
        <>
            <h1 className={style}>{props.children}</h1>
        </>
    )
}

export default Heading
