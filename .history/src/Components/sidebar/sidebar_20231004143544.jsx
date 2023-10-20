import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const CustomSidebar = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            '&.active': {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/" />}> Home</MenuItem>
        <MenuItem component={<Link to="/profile" />}> Profile</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default CustomSidebar;
