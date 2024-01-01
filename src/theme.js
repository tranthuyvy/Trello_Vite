import { teal, deepOrange, cyan } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
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
