import React from 'react';
import { Container, Row } from 'reactstrap';

export default function Faq() {
  return (
    <Container>
      <div className="container-hero my-5">
        <div className="row text-center bg-primary" style={{ marginTop: '5rem' }}>
          <h2 className="display-5 pt-4 text-white justify-content-center mt-3">
            Sewa Mobil di (Lokasimu) Sekarang
          </h2>
          <p className="pt-3 text-white text-align-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati ipsum magni
            aliquid, cumque mollitia molestiae quo, veniam iusto dolore dicta qui earum magnam
            aspernatur possimus maiores? Saepe, tempora corrupti nostrum nesciunt .
          </p>

          <div className="my-4">
            <button type="button" className="btn btn-success">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
      <Row className="row-col-md-6 -lg-2 my-5">
        <div className="col-12 col-md-5">
          <h3 className="fw-bold">Frequently Asked Question</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,</p>
        </div>

        <div className="col-12 col-md-7 -md d-grid gap-2 py-2">
          <select className="form-select fs-5" aria-label=".form-select-lg example">
            <option selected>Apa syarat yang dibutuhkan ?</option>
            <option value="1">KTP</option>
            <option value="2">SIM</option>
            <option value="3">KK</option>
          </select>

          <select className="form-select fs-5" aria-label=".form-select-sm example  ">
            <option selected>Berapa hari minimal sewa mobil lepas kunci?</option>
            <option value="1">2 hari</option>
            <option value="2">4 hari</option>
            <option value="3">5 hari</option>
          </select>
          <select className="form-select fs-5" aria-label=".form-select-lg example">
            fs-4
            <option selected>Berapa hari sebelumnya sebaiknya booking sewa mobil?</option>
            <option value="1">3 hari</option>
            <option value="2">1 Minggu</option>
            <option value="3">1 Bulan</option>
          </select>

          <select className="form-select fs-5" aria-label=".form-select-sm example ">
            <option selected>Apakah ada biaya antar-jemput?</option>
            <option value="1"></option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="form-select fs-5" aria-label=".form-select-sm example ">
            <option selected>Bagaimana jika terjadi kecelakaan</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </Row>
    </Container>
  );
}
