import { useLocale, useTranslations } from 'next-intl'

import { locales } from '@/configs/i18n.config'

import { LocaleSwitchingSelect } from './LocaleSwitchingSelect'

export const LocaleSwitcher = () => {
    const t = useTranslations('Locale')
    const locale = useLocale()

    return (
        <LocaleSwitchingSelect defaultValue={locale} label={t('label')}>
            {locales.map((cur) => (
                <option key={cur} value={cur}>
                    {t('locale', { locale: cur })}
                </option>
            ))}
        </LocaleSwitchingSelect>
    )
}
