import React from 'react';

export default function ServiceSection() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        {/* LEFT IMG */}
        <div className="col-md-5 p-5">
          <img src="/assets/img/img-service.png" alt="img aset in the left" />
        </div>
        {/* RIGHT DESC */}
        <div className="col-md-5">
          <h1>Best Car Rental for any kind of trip in Karawang!</h1>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan
            yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
            bisnis, wedding, meeting, dll.
          </p>
          <div className="d-flex align-items-center text-center mb-3">
            <div className="mx-3">
              <img src="/assets/svg/checklist.svg" alt="checklist" srcset="" />
            </div>
            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
          </div>
          <div className="d-flex align-items-center text-center mb-3">
            <div className="mx-3">
              <img src="/assets/svg/checklist.svg" alt="checklist" srcset="" />
            </div>
            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
          </div>
          <div className="d-flex align-items-center text-center mb-3">
            <div className="mx-3">
              <img src="/assets/svg/checklist.svg" alt="checklist" srcset="" />
            </div>
            <p>Sewa Mobil Jangka Panjang Bulanan</p>
          </div>
          <div className="d-flex align-items-center text-center mb-3">
            <div className="mx-3">
              <img src="/assets/svg/checklist.svg" alt="checklist" srcset="" />
            </div>
            <p>Gratis Antar - Jemput Mobil di Bandara</p>
          </div>
          <div className="d-flex align-items-center text-center mb-3">
            <div className="mx-3">
              <img src="/assets/svg/checklist.svg" alt="checklist" srcset="" />
            </div>
            <p>Layanan Airport Transfer / Drop In Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
