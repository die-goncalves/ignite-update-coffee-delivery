import { Moon, SunDim } from 'phosphor-react'
import { useThemes } from '../../hooks/useThemes'
import { ThemesContainer } from './styles'

export function SelectTheme() {
  const { currentTheme, changeTheme } = useThemes()
  return (
    <>
      {(() => {
        if (currentTheme.name === 'dark-theme') {
          return (
            <ThemesContainer onClick={() => changeTheme('LIGHT')}>
              <Moon weight="fill" />
            </ThemesContainer>
          )
        } else {
          return (
            <ThemesContainer onClick={() => changeTheme('DARK')}>
              <SunDim />
            </ThemesContainer>
          )
        }
      })()}
    </>
  )
}
