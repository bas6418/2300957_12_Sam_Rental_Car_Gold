import React from 'react';

const WhyUsCard = ({ imgUrl, title, desciption }) => {
  return (
    <div className="col-12 col-md-3 align-items-stretch mt-3">
      <div className="card">
        <div className="card-body d-flex flex-column gap-3">
          <div>
            <img src={imgUrl ?? '/assets/svg/icon-complete.svg'} alt="i-complete" />
          </div>
          <h5 className="card-text">{title ?? 'Mobil Lengkap'}</h5>
          <p className="card-text"> {desciption ?? 'Tersedia banyak pilihan mobil.. '}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
