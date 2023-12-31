import { teal, deepOrange, cyan } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: deepOrange,
        secondary: cyan
      }
    },
    dark: {
      palette: {
        primary: deepOrange,
        secondary: teal
      }
    }
  }
})

export default theme
