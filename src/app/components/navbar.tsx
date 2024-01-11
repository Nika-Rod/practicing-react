import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/home/veh/Downloads/practicing-react/src/app/images/logo.png'

export default function NavBar() {
    return (
        <>
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={logo.src}
                        style={{
                            height: 50,
                            width: 50
                          }}
                    />
                    Dogs +
                </NavbarBrand>
            </Navbar>
        </>
    )
}