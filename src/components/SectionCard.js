import React from "react";

const SectionCard = ({ product, dragStart, section }) => {
  return (
    <div
      key={product.id}
      draggable
      onDragStart={dragStart}
      className="product-card"
    >
      <div className="product-card-text">
        <h4>{product.name}</h4>
        <h4>
          {section === 0 ? (
            product.price
          ) : (
            <span>
              <s>{product.price}$</s>
              <br></br>
              {product.price - (product.price / 100) * section}
            </span>
          )}
          $
        </h4>
      </div>
    </div>
  );
};

export default SectionCard;
