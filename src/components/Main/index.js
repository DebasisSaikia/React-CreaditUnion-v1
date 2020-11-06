import React, { useState } from "react";
import { Button } from "../ButtonStyle";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./LandingStyle";
// import Video from "../../videos/";

const Landing = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src="https://player.vimeo.com/external/368757701.sd.mp4?s=4afd5620c9338f836bdb9bc126ac0e6525ead07c&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Made for
          <span style={{ color: "orange" }}> ExtraOrdinary</span> Suprises
        </HeroH1>
        <HeroP>
          We're in your Commmunity,Helping your Commmunity.
          <span style={{ color: "#2980b9" }}>
            {" "}
            Maximize your profits with Credit Union.
          </span>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
          >
            Start Exploring {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Landing;
