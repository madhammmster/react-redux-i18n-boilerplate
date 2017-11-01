import React from "react";
import { translate } from 'react-i18next';
//components
import Button from '../components/Buttons/Button'

class About extends React.Component {

    render(){
        const t = this.props.t;

        return(
            <div>
                <h1>{t('title')}</h1>
                <Button  text={ t('button') }/>
            </div>
        )
    }

}

export default translate('about')(About);