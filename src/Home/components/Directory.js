import React, { useState } from "react";
import MenuItem from "./MenuItem";

import { sectionsData } from "../data/directoryData";

import "../style/Directory.scss";

const Directory = () => {
  const [sections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.length > 0
        ? sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        : null}
    </div>
  );
};

export default Directory;
