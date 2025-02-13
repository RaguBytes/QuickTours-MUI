import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import InfoIcon from '@mui/icons-material/Info';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PlaceIcon from '@mui/icons-material/Place';

const Menu = () => {
  return (
    <Box flex={1} sx={{display:{xs:'none', sm:'block'}}}>
      <Box position="fixed" mt={2}>
       <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Plan Your Trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Things to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>          
    </Box>
  )
}

export default Menu