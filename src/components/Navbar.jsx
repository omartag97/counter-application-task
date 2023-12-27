import { Fragment } from "react";

import { useDispatch } from "react-redux";

import { setLanguage } from "../state";

import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";

import { Navbar as BootNavbar, Dropdown } from "react-bootstrap";

function Navbar() {
  const { t } = useTranslation("counter");

  const dispatch = useDispatch();

  const langs = {
    en: "English",
    ar: "Arabic",
  };
  return (
    <BootNavbar className="bg-body-tertiary">
      <Container>
        <BootNavbar.Brand href="#">{t("counterApp")}</BootNavbar.Brand>
        <BootNavbar.Toggle />
        <BootNavbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {t("language")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(langs).map((lang) => (
                <Fragment key={lang}>
                  <Dropdown.Item
                    onClick={() => dispatch(setLanguage({ language: lang }))}
                  >
                    {t(`${lang}`)}
                  </Dropdown.Item>
                </Fragment>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </BootNavbar.Collapse>
      </Container>
    </BootNavbar>
  );
}

export default Navbar;
