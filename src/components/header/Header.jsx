/* eslint-disable react/jsx-max-depth */
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";

import Logo from "../../../public/static/images/logo.svg";
import Box from "../box";

const expand = "lg";

function Header() {
  return (
    <container className="styles-header">
      <Navbar key={expand} expand={expand}>
        <Box>
          <div className="logo-header">
            <Link href="/">
              <div>
                <Image
                  style={{ cursor: "pointer" }}
                  src={Logo}
                  alt="logo-header"
                  width="333px"
                  height="150px"
                />
              </div>
            </Link>
          </div>
          <Navbar.Toggle
            style={{
              border: "1px solid var(--primary-color)",
              color: "white",
            }}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header
              style={{ background: "var(--primary-color)" }}
              closeButton
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav id="buttons-header" className="flex-grow-1 pe-3">
                <Nav.Link href="/sobre-nos">Quem Somos</Nav.Link>
                <Nav.Link href="/programa">O Programa</Nav.Link>
                <Nav.Link href="/voluntarios">Voluntários</Nav.Link>
                <Nav.Link href="/doacoes">Doações</Nav.Link>
                <Nav.Link href="/parcerias">Parcerias</Nav.Link>
                <Nav.Link href="/publicacoes ">Publicações</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Box>
      </Navbar>
    </container>
  );
}

export default Header;
