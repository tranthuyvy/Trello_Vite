import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const CHIP_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Chip
          sx={CHIP_STYLES}
          icon={<DashboardIcon />}
          label="TranThuyVy"
          clickable
        />

        <Chip
          sx={CHIP_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />

        <Chip
          sx={CHIP_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To GGDrive"
          clickable
        />

        <Chip
          sx={CHIP_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={CHIP_STYLES}
          icon={<FilterAltIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Button variant='outlined' startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={3}
          sx={{
            '&. MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title='tranthuyvy'>
            <Avatar
              alt="TranThuyVy"
              src="https://st.depositphotos.com/2101611/4338/v/450/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"
            />
          </Tooltip>
          <Tooltip title='tranthuyvy'>
            <Avatar
              alt="TranThuyVy"
              src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
            />
          </Tooltip>
          <Tooltip title='tranthuyvy'>
            <Avatar
              alt="TranThuyVy"
              src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
            />
          </Tooltip>
          <Tooltip title='tranthuyvy'>
            <Avatar
              alt="TranThuyVy"
              src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
