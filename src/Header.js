import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
	{
		code: 'en',
		name: 'English',
		country_code: 'gb'
	},
	{
		code: 'fr',
		name: 'Français',
		country_code: 'fr'
	},
	{
		code: 'pt-br',
		name: 'Portuguese',
		country_code: 'pt-br'
	},
]

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
