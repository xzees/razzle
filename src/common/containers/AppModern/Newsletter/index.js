import React from "react";
import PropTypes from "prop-types";
import Box from "common/src/components/Box";
import Button from "common/src/components/Button";
import Input from "common/src/components/Input";
import Container from "common/src/components/UI/Container";
import Hidden from "@material-ui/core/Hidden";
import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";
import Typography from "@material-ui/core/Typography";

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <NewsletterWrapper>
        <Container>
          <Box>
            <Hidden only={["sm", "xs"]}>
              <img
                src={require("assets/img/3737.png")}
                width="100px"
                alt="newsletter"
              />
            </Hidden>
          </Box>
          <Box {...textArea}>
            <Typography
              variant="h5"
              display="block"
              gutterBottom
              className="appDownload"
              style={{
                color:'#440099'
              }}
            >
              {"Subscribe our newsletter"}
            </Typography>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              className="appDownload"
              style={{
                color:'#888aaa'
              }}
            >
              {"ไม่พลาดทุกโปรโมชั่น"}
            </Typography>
          </Box>
          <Box {...buttonArea}>
            <ContactFormWrapper>
              <Input
                inputType="email"
                label="Email address"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
              <Button {...buttonStyle} title="Get access" />
            </ContactFormWrapper>
          </Box>
        </Container>
      </NewsletterWrapper>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ["40px", "40px", "40px", "0", "0"],
    pr: ["0", "0", "0", "80px", "100px"],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: "button",
    pl: "30px",
    pr: "30px",
  },
};

export default Newsletter;
