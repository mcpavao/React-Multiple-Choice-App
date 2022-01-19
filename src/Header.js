import React from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
    const { t } = useTranslation()
    return (
        <div className="main-header">
            <h1>QUIZ APP</h1>
            <h1>{t('welcome_message')}</h1>
        </div>
    )
}

export default Header
