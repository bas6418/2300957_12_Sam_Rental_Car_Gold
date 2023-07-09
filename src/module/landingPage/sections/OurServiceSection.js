import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function ServiceSection() {
  return (
    <Container fluid>
      <Row ClassName="Service-container">
        <Col sm={12} md={6} className="Service-image-section">
          <img src="/assets/img/img_service.png" className="img-fluid" alt="Our Service" />
        </Col>
        <Col sm={12} md={6} className="Service-content-section">
          <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan
            yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
            bisnis, wedding, meeting, dll.
          </p>
          <ul className="d-flex flex-row mb-1" style={{ paddingLeft: '5px !important' }}>
            <div>
              <img src="/assets/icon/ceklist.jpg" alt="ceklist" className="img-thumbnail" />
            </div>

            <div>
              <p>Sewa mobil Lepas Kunci di Bali 12 Jam</p>
            </div>
          </ul>
          <ul className="d-flex flex-row mb-1" style={{ paddingLeft: '5px !important' }}>
            <div>
              <img src="/assets/icon/ceklist.jpg" alt="ceklist" className="img-thumbnail" />
            </div>
            <div>
              <p>Sewa mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
          </ul>
          <ul className="d-flex flex-row mb-1" style={{ paddingLeft: '5px !important' }}>
            <div>
              <img src="/assets/icon/ceklist.jpg" alt="ceklist" className="img-thumbnail" />
            </div>
            <div>
              <p>Sewa mobil jangka Panjang Bulanan</p>
            </div>
          </ul>
          <ul className="d-flex flex-row mb-1" style={{ paddingLeft: '5px !important' }}>
            <div>
              <img src="/assets/icon/ceklist.jpg" alt="ceklist" className="img-thumbnail" />
            </div>
            <div>
              <p>Gratis Antar-Jemput Mobil di Bandar</p>
            </div>
          </ul>
          <ul className="d-flex flex-row mb-1" style={{ paddingLeft: '5px !important' }}>
            <div>
              <img src="/assets/icon/ceklist.jpg" alt="ceklist" className="img-thumbnail" />
            </div>
            <div>
              <p>Layanan Airport Transfer/Drop in Out</p>
            </div>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
