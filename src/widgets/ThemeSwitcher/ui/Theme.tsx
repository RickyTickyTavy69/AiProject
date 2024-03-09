import React, { useEffect } from 'react'
import { useTheme } from '../index'
import Icon from 'src/shared/assets/theme-switch.svg?react';

const Theme = (): React.ReactNode => {
  const { theme, handleThemeSwitch } = useTheme()

  useEffect(() => {
    document.body.className = theme === 'Dark' ? 'dark' : '';
  }, [theme])

  return (
            <Icon onClick={handleThemeSwitch} className={'cursor-pointer h-7 w-7 hover:h-8 hover:w-8'} />
  )
}

export default Theme
