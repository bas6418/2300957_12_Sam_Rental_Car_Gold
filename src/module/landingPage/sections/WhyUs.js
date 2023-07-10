import React from 'react';
import WhyUsCard from '../../../components/card/WhyUs';
import { Row } from 'reactstrap';

const WhyUs = () => {
  return (
    <div className="container mt-2 mb-2">
      <h1>Why Us?</h1>
      <p>Mengapa Harus pilih Binar Car Rental?</p>
      <div className="row justify-content-center">
        <Row>
          <WhyUsCard desciption="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat" />
          <WhyUsCard
            imgUrl="/assets/svg/icon-price.svg"
            title="Harga Murah"
            desciption="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
          />
          <WhyUsCard
            imgUrl="/assets/svg/icon-24hrs.svg"
            title="Layanan 24 Jam"
            desciption="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
          />
          <WhyUsCard
            imgUrl="/assets/svg/icon-professional.svg"
            title="Sopir Profesional"
            desciption="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
          />
        </Row>
      </div>
    </div>
  );
};

export default WhyUs;
