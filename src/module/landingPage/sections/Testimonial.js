import React, { useRef } from 'react';
import {
  Badge,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Card,
  Button,
} from 'reactstrap';
import { SwiperSlide, Swiper } from 'swiper/react';
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
        <div className="scroll-container Swiper" id="cardContainer" style={{ width: '740px' }}>
          <Swiper
            spaceBetween={50}
            slidePerview={1}
            onSwiper={Swiper => {
              swiperRef.current = Swiper;
            }}
            className="mySwiper"
          >
            <Swiper className="mySwiper">
              <SwiperSlide>
                <Card className="mb-3 swiper-slide" id="card-content">
                  <Row g={0}>
                    <Col md={4}>
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
                <Card className="mb-3 swiper-slide" id="card-content" style={{ width: '740px' }}>
                  <Row g={0}>
                    <Col md={4}>
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
                <Card
                  className="mb-3 swiper-slide"
                  id="card-content"
                  style={{ width: '740px !important' }}
                >
                  <Row g={0}>
                    <Col md={4}>
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
          </Swiper>

          <div className="Button-active ">
            <Button
              color="primary"
              outline
              id="scroll-left"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <Badge>{'<'}</Badge>
            </Button>

            <Button
              color="primary"
              outline
              id="scroll-right"
              onClick={() => swiperRef.current.slideNext()}
            >
              <Badge>{'>'}</Badge>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
