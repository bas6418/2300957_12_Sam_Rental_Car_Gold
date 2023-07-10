import React, { useRef } from 'react';
import { Badge, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        <div
          className="scroll-container Swiper row justify-content-center w-full"
          id="cardContainer"
        >
          <Swiper
            spaceBetween={50}
            slidePerview={1}
            onSwiper={Swiper => {
              swiperRef.current = Swiper;
            }}
            className="mySwiper"
          >
            <SwiperSlide className="col-sm-12">
              <Card className="mb-3 swiper-slide" id="card-content">
                <Row g={0}>
                  <Col md={4} className="d-flex justify-content-center align-items-center">
                    <img src={Image_photo} alt="profile-testimoni" className="img-fluid" />
                  </Col>
                  <Col md={8}>
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
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="mb-3 swiper-slide" id="card-content">
                <Row g={0}>
                  <Col md={4} className="d-flex justify-content-center align-items-center">
                    <img src={Image_photo} alt="profile-testimoni" className="img-fluid" />
                  </Col>
                  <Col md={8}>
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
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="mb-3 swiper-slide" id="card-content">
                <Row g={0}>
                  <Col md={4} className="d-flex justify-content-center align-items-center">
                    <img src={Image_photo} alt="profile-testimoni" className="img-fluid" />
                  </Col>
                  <Col md={8}>
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
              </Card>
            </SwiperSlide>
          </Swiper>

          <div className="Button-active row justify-content-center gap-4">
            <button
              type="button"
              class="btn btn-success btn-circle btn-lg"
              id="scroll-left"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <Badge color="transparent">Prev</Badge>
            </button>
            <button
              type="button"
              class="btn btn-success btn-circle btn-lg"
              id="scroll-right"
              onClick={() => swiperRef.current.slideNext()}
            >
              <Badge color="transparent">Next</Badge>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
