import React from 'react'
import { Dropdown, DropdownDivider } from 'react-bootstrap'
import { useAuth } from '../../hooks/useAuth';

export default function UserDropdown() {
    const { logout } = useAuth();

    function handleLogout() {
        logout();
    }
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
                    <Dropdown.Item href="#/logout" as="button"
                        onClick={handleLogout}
                    >Se déconnecter</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>


    )
}
