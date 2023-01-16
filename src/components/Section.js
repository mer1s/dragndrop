import React, { useState } from "react";
import SectionCard from "./SectionCard";

const Section = ({ drop, dragOver, section, dragStart, filter }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const dragOverHandler = (e) => {
    dragOver(e, section);
    setIsDragOver(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const onDropHandler = (e) => {
    drop(e, section);
    setIsDragOver(false);
  };

  return (
    <div
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={onDropHandler}
      className={`section ${isDragOver && "drag-over"}`}
    >
      <h3>Discount: {section}%</h3>
      <div className="product-list">
        {filter(section).map((product) => (
          <SectionCard
            key={product.id}
            section={section}
            product={product}
            dragStart={(e) => dragStart(e, product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
