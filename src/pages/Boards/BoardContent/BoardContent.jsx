import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import { DndContext } from '@dnd-kit/core'

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  const handleDragEnd = (event) => {
    console.log('handleDragEnd', event)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#3d3d3d' : '#273c75'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '15px 0'
      }}>
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
