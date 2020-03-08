import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import "./directory-menu.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        image={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);
const mapsStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapsStateToProps)(Directory);
