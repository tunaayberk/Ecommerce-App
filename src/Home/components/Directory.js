import React, { useState } from "react";
import MenuItem from "./MenuItem";

import { sectionsData } from "../data/directoryData";

import "../style/Directory.scss";

const Directory = props => {
  const [sections, setSections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.length > 0
        ? sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        : null}
    </div>
  );
};

export default Directory;
