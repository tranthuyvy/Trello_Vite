import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ minWidth: '50px' }} size="small">

      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        IconComponent='null'
        sx={{
          color: 'white',
          '& fieldset': {
            border: '0px !important'
          }
        }}
      >
        <MenuItem value="light">
          <Box style={{ alignItems: 'center', gap: '8px' }}>
            <LightModeIcon frontsize="small" />
          </Box>
        </MenuItem>

        <MenuItem value="dark">
          <Box sx={{ alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon frontsize="small" />
          </Box>
        </MenuItem>

        <MenuItem value="system">
          <Box sx={{ alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon frontsize="small" />
          </Box>
        </MenuItem>

      </Select>
    </FormControl>
  )
}

export default ModeSelect
