import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      color: 'white',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#3d3d3d' : '#273c75'),
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
      Content
    </Box>
  )
}

export default BoardContent
