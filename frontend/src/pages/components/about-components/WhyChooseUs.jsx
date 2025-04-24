import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const WhyChooseUs = () => {
  const cardData = [
    {
      img: "images/why-choose-icon-01.svg",
      title: "Service Commitment",
      desc:
        "We deliver top-tier solutions, ensuring satisfaction through reliability, transparency, and a dedication to exceeding expectations."
    },
    {
      img: "images/why-choose-icon-02.svg",
      title: "Fabulous Experience",
      desc:
        "Our intuitive interface offers an effortless journey, from browsing services to booking and beyond."
    },
    {
      img: "images/why-choose-icon-03.svg",
      title: "Data Secure",
      desc:
        "We employ robust encryption, stringent access controls, and ongoing monitoring to safeguard your information."
    },
    {
      img: "images/why-choose-icon-04.svg",
      title: "Fast Service",
      desc:
        "We prioritize speed without compromising quality, ensuring your needs are met promptly and effectively."
    },
    {
      img: "images/why-choose-icon-05.svg",
      title: "Secure Payment",
      desc:
        "Enjoy peace of mind with encrypted transactions, trusted gateways, and a commitment to safeguarding your information."
    },
    {
      img: "images/why-choose-icon-06.svg",
      title: "Dedicated Support",
      desc:
        "Our 24/7 customer service team is here to assist you every step of the way. Experience personalized assistance for a seamless journey."
    }
  ];

  return (
    <section className="why-choose-sec py-5">
      <Container>
        <div className="about-us-header text-center mb-4">
          <h2>Why Choose Us</h2>
          <p>
            We prioritize your satisfaction through personalized solutions and a
            commitment to excellence.
          </p>
        </div>
        <Row>
          {cardData.map((card, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <Card className="why-choose-card text-center h-100 p-3 border-0">
                <div className="card-icon mb-3">
                  <img src={card.img} alt="icon" className="img-fluid" />
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
