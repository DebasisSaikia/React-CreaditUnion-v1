import React from "react";
import { FaGithub, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterStyle";

const Footer = () => {
 const toggleHome = () => {
   scroll.scrollToTop();
 };


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Our Offices</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Funding</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">LinkedIn</FooterLink>
              <FooterLink to="/signin">Pinterest</FooterLink>
              <FooterLink to="/signin">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink to="/signin">Banking</FooterLink>
              <FooterLink to="/signin">Loans</FooterLink>
              <FooterLink to="/signin">Education</FooterLink>
              <FooterLink to="/signin">Digital Marketting</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact </FooterLinkTitle>
              <FooterLink to="/signin">+91-6901360467</FooterLink>
              <FooterLink to="/signin">debasishsaikia136@gmail.com</FooterLink>
              <FooterLink to="/signin">Technology-ReactJs,</FooterLink>
              <FooterLink to="/signin">Styled components,</FooterLink>
              <FooterLink to="/signin">HTML,ReactIcons</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              CreditUnion
            </SocialLogo>
            <WebsiteRights>@Debasis Saikia &copy;2020</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/debasis-saikia-6b8165bb/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/DebasisSaikia"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/def1b56da62146a"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Pinterest">
                <FaPinterest />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
