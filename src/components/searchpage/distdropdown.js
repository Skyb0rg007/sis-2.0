/* distdropdown.js
 * A drop down menu for selecting which distribution requirements you need a
 *      class to fill
 * Camille Calabrese -- my first JavaScript file :-)
 * Polyhack 2019
 */

import { Dropdown } from 'react-bootstrap';
import React from 'react';

const DistDropdown = (props) => {
  return ( <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Distribution Requirements 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">World Civilizations</Dropdown.Item>
    <Dropdown.Item href="#/action-2">LA - Humanities</Dropdown.Item>
    <Dropdown.Item href="#/action-3">LA - Arts</Dropdown.Item>
   <Dropdown.Item href="#/action-4">LA - Social Sciences</Dropdown.Item>
   <Dropdown.Item href="#/action-5">LA - Natural Sciences</Dropdown.Item>
   <Dropdown.Item href="#/action-6">LA - Mathematical Sciences</Dropdown.Item>
   <Dropdown.Item href="#/action-7">SoE - Humanities</Dropdown.Item>
    <Dropdown.Item href="#/action-8">SoE - Arts</Dropdown.Item>
   <Dropdown.Item href="#/action-9">SoE - Social Sciences</Dropdown.Item>
   <Dropdown.Item href="#/action-10">SoE - Natural Sciences</Dropdown.Item>
   <Dropdown.Item href="#/action-11">SoE - Mathematical Sciences</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  )
}

export default DistDropdown