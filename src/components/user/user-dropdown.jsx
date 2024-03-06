import React from 'react'
import { Dropdown, DropdownDivider } from 'react-bootstrap'

export default function UserDropdown() {
    return (
        <div>
            <Dropdown
                drop='up'
            >
                <Dropdown.Toggle variant="dark" id="dropdown-user">
                    Saafouan fdl
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/profile" as="button">Profil</Dropdown.Item>
                    <Dropdown.Item href="#/settings" as="button">Paramètres</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#/logout" as="button">Se déconnecter</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>


    )
}
