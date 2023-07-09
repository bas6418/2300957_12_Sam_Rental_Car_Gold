import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import iconFacebook from '../../assets/icon/icon_facebook.png';
import iconInstagram from '../../assets/icon/icon_instagram.png';
import iconEmail from '../../assets/icon/icon_mail.png';
import iconTwitter from '../../assets/icon/icon_twitter.png';
import icontwise from '../../assets/icon/icon_twitch.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container fluid>
      <Row className="Footer-content" style={{ marginTop: "auto" }}>
        <div className="col={12} col-md-3">
          <p className="adress fw-bold">Jalan Suroyo No. 161 Mayangan KotLink Probolonggo 672000</p>

          <p>binarcarrental@gmail.com</p>

          <p>081-233-334-808</p>
        </div>
        <Col md={3}>
          <div className="nav flex-column gap-1">
            <Link className="nav-link" to="/OurSeriveces/">
              Ourservices
            </Link>
            <Link className="nav-link" to="/WhyUs/">
              Why Us
            </Link>
            <Link className="nav-link" to="/Testimoni/">
              Tertimoni
            </Link>
            <Link className="nav-link" to="FAQ">
              FAQ
            </Link>
          </div>
        </Col>
        <Col md={3} gap={2}>
          <p className="text-sosmed">Connect with us</p>
          <Link>
            <img src={iconFacebook} alt="icon_Facebook" />
          </Link>
          <Link>
            <img src={iconInstagram} alt="icon_Instagram" />
          </Link>
          <Link>
            <img src={iconEmail} alt="icon_Email" />
          </Link>
          <Link>
            <img src={iconTwitter} alt="icon_Twitter" />
          </Link>
          <Link>
            <img src={icontwise} alt="icon_Twise" />
          </Link>
        </Col>
        <Col md={3}>
          <p className="text-copyright">Copyright Binar 2022</p>
          <Badge color="primary">BINAR</Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
