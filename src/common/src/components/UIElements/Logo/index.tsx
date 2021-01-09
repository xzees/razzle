import React from "react";
import PropTypes from "prop-types";
import Text from "../../Text";
import Link from "../../Link";
import Image from "../../Image";

interface Props {
  logoStyle?: Object;
  withAchor?: Boolean;
  anchorProps?: Object;
  logoSrc?: string;
  title: string;
  href?: string;
}

interface defaultProps {
  logoWrapperStyle?: Object;
  titleStyle?: Object;
}

const Logo = (props: Props) => {
  const { withAchor, logoStyle, anchorProps, logoSrc, title, href } = props;
  const defaultProps = React.useRef<defaultProps>({
    logoWrapperStyle: {
      display: "inline-block",
      mr: "1rem",
      "a:hover,a:focus": {
        textDecoration: "none",
      },
    },
    titleStyle: {
      display: "inline-block",
      fontSize: "2rem",
      lineHeight: "inherit",
      whiteSpace: "nowrap",
    },
  });
  const { logoWrapperStyle, titleStyle } = defaultProps.current;
  return (
    <Link {...props}  {...logoWrapperStyle}>
      {withAchor ? (
        <a  {...anchorProps}>
          {logoSrc ? (
            <Image src={logoSrc} alt={title} {...logoStyle} />
          ) : (
            <Text content={title} {...titleStyle} />
          )}
        </a>
      ) : (
        <>
          {logoSrc ? (
            <Image src={logoSrc} alt={title} {...logoStyle} />
          ) : (
            <Text content={title} {...titleStyle} />
          )}
        </>
      )}
    </Link>
  );
};

// Logo.propTypes = {
//   logoSrc: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   logoWrapperStyle: PropTypes.object,
//   logoStyle: PropTypes.object,
//   titleStyle: PropTypes.object,
//   withAchor: PropTypes.bool,
//   anchorProps: PropTypes.object,
// };

// Logo.defaultProps = {
//   logoWrapperStyle: {
//     display: "inline-block",
//     mr: "1rem",
//     "a:hover,a:focus": {
//       textDecoration: "none",
//     },
//   },
//   titleStyle: {
//     display: "inline-block",
//     fontSize: "2rem",
//     lineHeight: "inherit",
//     whiteSpace: "nowrap",
//   },
// };
export default Logo;
