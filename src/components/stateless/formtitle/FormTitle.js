import React, { Component } from 'react';
import styles from './formtitle.module.css'

class FormTitle extends Component {
    render() {
        return (
            <>
                <h1 className = {`${styles.fontHeading} text-center`}>Add Car</h1>
            </>
        )
    }
}

export default FormTitle