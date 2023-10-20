
import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isFitnessDropdownOpen, setIsFitnessDropdownOpen] = useState(false);

  const toggleFitnessDropdown = () => {
    setIsFitnessDropdownOpen(!isFitnessDropdownOpen);
  };
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/fitness" activeClassName="activeClicked">
  <CDBSidebarMenuItem icon="chart-line" onClick={toggleFitnessDropdown}>
    Fitness Metrics
  </CDBSidebarMenuItem>
  {isFitnessDropdownOpen && (
  <CDBSidebarMenu>
    <NavLink exact to="/bmi" activeClassName="activeClicked">
      <CDBSidebarMenuItem>BMI</CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/lbm" activeClassName="activeClicked">
      <CDBSidebarMenuItem>LBM</CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/orm" activeClassName="activeClicked">
      <CDBSidebarMenuItem>ORM</CDBSidebarMenuItem>
    </NavLink>
  </CDBSidebarMenu>
)}
</NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;