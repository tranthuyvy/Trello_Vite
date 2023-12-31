import { teal, deepOrange, cyan } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
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