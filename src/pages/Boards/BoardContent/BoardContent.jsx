import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#3d3d3d' : '#273c75'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '15px 0'
    }}>
      <ListColumns />
    </Box>
  )
}

export default BoardContent
