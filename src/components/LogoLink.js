import React from "react";
import { Link } from "react-router-dom";

const LogoLink = ({ className, url, image, alt }) => (
  <Link
    className={className}
    to={{ pathname: url }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={image} alt={alt} />
  </Link>
);
export default LogoLink;
