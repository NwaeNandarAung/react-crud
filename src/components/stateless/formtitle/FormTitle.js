import React, { Component } from 'react';
import styles from './formtitle.module.css';
import Zoom from 'react-reveal/Zoom'

class FormTitle extends Component {
    render() {
        return (
            <Zoom>
                <h1 className = {`${styles.fontHeading} text-center`}>Add Car</h1>
            </Zoom>
        )
    }
}

export default FormTitle