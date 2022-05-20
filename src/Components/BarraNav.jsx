import React from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler,  Collapse, NavItem, NavLink} from "reactstrap";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";


const BarraNav = () => {

    const {isAutenticated} = useAuth0();

    return (
        <div>
        <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">
                <NavLink to="/">Mis peliculas fav</NavLink>
            </NavbarBrand>
            <div>
            {isAutenticated ?  (<><Profile /> <LogoutButton/></>) : (<LoginButton/>) }
            </div>
        </Navbar>
        </div>
    );
};

export default BarraNav;
