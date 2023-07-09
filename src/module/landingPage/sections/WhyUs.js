import React from 'react';
import { Container } from 'reactstrap';
import iconJempol from '../../../assets/icon/jempol.jpg';
import IconPrice from '../../../assets/icon/icon_price.jpg';
import icon24 from '../../../assets/icon/icon_24hrs.png';
import iconProf from '../../../assets/icon/icon_professional.png';
export default function Why() {
  return (
    <Container fluid>
      <h3 className="text-left pt-4 ">Why Us ?</h3>
      <p>Mengapa Harus pilih Binnar Car Rental ?</p>

      <div className="row">
        <div className="col-12 col-md-3 align-items-stretch mt-3">
          <div className="card">
            <div className="card-body">
              <img src={iconJempol} className="card-img-responsive" alt="icon-jempol" />
              <h5 className="card-title pt-2">Mobil Lengkap</h5>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 align-items-stretch mt-3">
          <div className="card">
            <div className="card-body">
              <img src={IconPrice} className="card-img-responsive" alt="icon-price" />
              <h5 className="card-title pt-2">Harga Murah</h5>
              <p className="card-text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 align-items-stretch mt-3">
          <div className="card">
            <div className="card-body">
              <img src={icon24} className="card-img-responsive" alt="icon-24hour" />
              <h5 className="card-title pt-2">Layanan 24 Jam</h5>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 align-items-stretch mt-3">
          <div className="card">
            <div className="card-body">
              <img src={iconProf} className="img Fluid" alt="icon-Profe" />
              <h5 className="card-title pt-2">Sopir Profesional</h5>
              <p className="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
