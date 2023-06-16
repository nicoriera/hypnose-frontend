import React from "react";
import LogoLink from "./LogoLink";

import LogoPsynapse from "../assets/pictures/logo_psynapse.png";
import LogoWho from "../assets/pictures/logo_who.png";
import LogoFfhtb from "../assets/pictures/logo_FFHTB.jpg";

const logos = [
  {
    name: "psynapse",
    url: "https://psynapse.fr/",
    image: LogoPsynapse,
  },
  {
    name: "who",
    url: "https://www.world-hypnosis.org/fr",
    image: LogoWho,
  },
  {
    name: "ffhtb",
    url: "https://ffhtb.fr/",
    image: LogoFfhtb,
  },
];

const Logos = () => {
  return (
    <div className="logos-hypnose">
      {logos.map((logo) => (
        <LogoLink
          key={logo.name}
          className={`logo-${logo.name}`}
          url={logo.url}
          image={logo.image}
          alt={`logo-${logo.name}`}
        />
      ))}
    </div>
  );
};

export default Logos;
