import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns() {

  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 0 }
    }}>
      <Column />
      <Column />
      <Column />

      {/* Add New Column */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '5px',
        height: 'fit-content',
        bgcolor: 'white'
      }}>
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: '#273c75',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1.25
          }}
        >
          Add New Column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
