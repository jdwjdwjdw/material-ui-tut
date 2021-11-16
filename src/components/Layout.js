import Box from "@mui/system/Box";
import Drawer from '@mui/material/Drawer'
import Typography from "@mui/material/Typography";

const drawerWidth = 240
const classes = {
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
}

export default function Layout({ children }) {
  return (
    <Box sx={{display: 'flex'}}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        sx={
          classes.drawer
        }
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5">
            Ninja Notes
          </Typography>
        </div>
      </Drawer>

      <Box
        sx={{
          background: '#f9f9f9',
          width: '100%'
        }}>
        {children}
      </Box>
    </Box>
  )
}
