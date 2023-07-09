import React, { useRef } from 'react';
import { Badge, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import IconRate from '../../../assets/icon/Rate.png';
import Image_photo from '../../../assets/img/img_photo (1).png';

export default function Testi() {
  const swiperRef = useRef();

  return (
    <section id="Testimonial" className=" testimonial" style={{ marginTop: '100px' }}>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="fs-3 text-center">Testimonial</h2>
            <p className="fs-5 text-center">Berbagai review positif dari para pelanggan kami</p>
          </Col>
        </Row>
        <Container className="scroll-container swiper" id="cardContainer">
          <swiper
            spaceBetween={50}
            slidePerview={1}
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            <swiper className="mySwiper">
              <SwiperSlide>
                <card className="mb-3 swiper-slide" id="card-content" style={{ width: '740px' }}>
                  <Row g={0}>
                    <Col md={4}>
                      <img src={Image_photo} alt="profile-testimoni" className="img-fluid" />
                    </Col>
                    <Col md={4}>
                      <CardBody>
                        <CardTitle>
                          <img src={IconRate} alt="icon-rate" />
                        </CardTitle>
                        <CardText className="card-text1">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                        </CardText>
                        <CardText>
                          <small className="text-muted"> John Dee 32, Bromo</small>
                        </CardText>
                      </CardBody>
                    </Col>
                  </Row>
                </card>
              </SwiperSlide>
              <SwiperSlide>
                <card className="mb-3 swiper-slide" id="card-content" style={{ width: '740px' }}>
                  <Row g={0}>
                    <Col md={4}>
                      <img src={Image_photo} alt="profile-testimoni" className="img-fluid" />
                    </Col>
                    <Col md={4}>
                      <CardBody>
                        <CardTitle>
                          <img src={IconRate} alt="icon-rate" />
                        </CardTitle>
                        <CardText className="card-text1">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                        </CardText>
                        <CardText>
                          <small className="text-muted"> John Dee 32, Bromo</small>
                        </CardText>
                      </CardBody>
                    </Col>
                  </Row>
                </card>
              </SwiperSlide>
              <SwiperSlide>
                <card className="mb-3 swiper-slide" id="card-content" style={{ width: '740px' }}>
                  <Row g={0}>
                    <Col md={4}>
                      <img src={Image_photo} alt="profile-testimoni" className="img-fluid" />
                    </Col>
                    <Col md={4}>
                      <CardBody>
                        <CardTitle>
                          <img src={IconRate} alt="icon-rate" />
                        </CardTitle>
                        <CardText className="card-text1">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                        </CardText>
                        <CardText>
                          <small className="text-muted"> John Dee 32, Bromo</small>
                        </CardText>
                      </CardBody>
                    </Col>
                  </Row>
                </card>
              </SwiperSlide>
            </swiper>
          </swiper>
          <div className="button-active ">
            <button
              color="primary"
              outline
              id="scroll-left"
              onClick={() => swiperRef.current.slidePerv()}
            >
              <Badge>{'<'}</Badge>
            </button>

            <button
              color="primary"
              outline
              id="scroll-right"
              onClick={() => swiperRef.current.slideNext()}
            >
              <Badge>{'>'}</Badge>
            </button>
          </div>
        </Container>
      </Container>
    </section>
  );
}
