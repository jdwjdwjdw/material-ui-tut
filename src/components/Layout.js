import Box from "@mui/system/Box";
import Drawer from '@mui/material/Drawer'
import Typography from "@mui/material/Typography";
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SubjectOutlined from '@mui/icons-material/SubjectOutlined'
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined'
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240
const classes = {
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  active: {
    background: '#f4f4f4'
  },
}

export default function Layout({ children }) {
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    },
  ]

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

        {/* list / links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

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
