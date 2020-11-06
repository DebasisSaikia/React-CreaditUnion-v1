import React from "react";
import icon1 from "../../images/main1.svg";
import icon2 from "../../images/main2.svg";
import icon3 from "../../images/main3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  Servicesicon,
  ServicesP,
  ServiceWrapper,
} from "./ServiceStyle";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServiceWrapper>
        <ServicesCard>
          <Servicesicon src={icon1} />
          <ServicesH2>Money Savings</ServicesH2>
          <ServicesP>
            Find the best monthly payment to increase revenue.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <Servicesicon src={icon2} />
          <ServicesH2>Online Solutions</ServicesH2>
          <ServicesP>
            Banking solution for your Business growth or Startup
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <Servicesicon src={icon3} />
          <ServicesH2>Lifetime Membership</ServicesH2>
          <ServicesP>
            One time Membership card  returns maximum profits.
          </ServicesP>
        </ServicesCard>
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Services;
