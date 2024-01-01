import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AppsIcon from '@mui/icons-material/Apps'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import ModeSelect from '~/components/ModeSelect'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main', cursor: 'pointer' }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >

        <ModeSelect />
        {/* <SearchIcon sx={{ color: 'primary.main' }} /> */}
        <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }} />

        <Tooltip title="Notification">
          <Badge color='error' variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
