import StyledCard from "../components/StyledCard";
import React from "react";

export default function createEachCard(
  colorsState,
  handleDelete,
  setColorsState
) {
  return colorsState.map((color) => {
    return (
      <StyledCard
        key={color.id}
        hexCode={color.colorCode}
        colorCardId={color.id}
        onColorState={colorsState}
        onHandleDelete={handleDelete}
        onSetColorsState={setColorsState}
      ></StyledCard>
    );
  });
}
