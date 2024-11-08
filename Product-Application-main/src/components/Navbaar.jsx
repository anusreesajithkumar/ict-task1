import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbaar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: '#7ea6e0' }}>
            <Toolbar>
            {/* <Box component="img" alt="My Logo" src="" /> */}
              <Typography variant='h3' color='#000'>ReCart    </Typography> 
                <Link to='/'>
                <Button variant='contained'>Home</Button>
                </Link>
                <Link to='/Add'>
                <Button variant='contained'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbaar
