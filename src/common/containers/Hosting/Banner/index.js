import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Heading from "common/src/components/Heading";
import Button from "common/src/components/Button";
import Container from "common/src/components/UI/Container";
import BannerWrapper, {
  SearchWrapper,
} from "./banner.style";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { search } from "react-icons-kit/feather/search";

const BannerSection = ({
  row,
  title,
  description,
  button,
  textArea,
  searchArea,
  discountAmount,
  discountText,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container className="banner_container">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="YOURS TO EXPLORE" />
            <Text
              {...description}
              content=" สำรวจและจองกิจกรรมที่น่าสนใจมากมายในราคาสุดพิเศษ"
            />
          </Box>
          <Box {...searchArea}>
            <SearchWrapper>
              <Autocomplete
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className="domain_search_select"
                size="medium"
                freeSolo
                disableClearable
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
              <Button
                {...button}
                icon={<Icon icon={search} size={24} />}
                className="domain_search_button"
              />
            </SearchWrapper>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    width: ["100%", "100%", "90%", "100%", "55%"],
  },
  title: {
    fontSize: ["26px", "32px", "42px", "46px", "55px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.31",
    textAlign: "center",
  },
  description: {
    fontSize: ["20px", "22px", "24px"],
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center",
  },
  button: {
    title: "Search",
    type: "button",
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
    iconPosition: "left",
  },
  searchArea: {
    className: "search_area",
    width: ["100%", "100%", "80%", "100%", "70%"],
    mt: ["45px", "50px", "60px", "60px", "60px"],
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "600",
    color: "#eb4d4b",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "400",
    color: "#0f2137",
    mb: 0,
    as: "span",
  },
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

export default BannerSection;
