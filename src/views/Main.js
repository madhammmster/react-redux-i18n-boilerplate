import React from "react";
import { translate } from 'react-i18next';
import i18n from '../services/i18n/i18n';


class Main extends React.Component {

    render(){
        const {t} = this.props

        return(
            <div>
                <h1>{t('title')}</h1>
                <h3>{t('description')}</h3>
            </div>
        )
    }

}

export default translate('main')(Main);