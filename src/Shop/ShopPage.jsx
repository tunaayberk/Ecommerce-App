import React, { useState } from "react";

import CollectionPreview from "./components/CollectionPreview";

import COLLECTIONS_DATA from "../assets/data/shopData";

const ShopPage = props => {
  const [collections] = useState(COLLECTIONS_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
