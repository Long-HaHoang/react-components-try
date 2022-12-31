import styled from "styled-components";
import CardHexCode from "../CardHexCode";
import DeleteButton from "../DeleteButton";

const StyledCard = styled.div`
  position: relative;
  width: 200px;
  aspect-ratio: 1;
  background-color: #cccccc;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function StyledCardComponent({
  hexCode,
  colorCardId,
  onColorState,
  onHandleDelete,
  onSetColorsState,
}) {
  return (
    <StyledCard>
      <CardHexCode colorCode={handleHexCode(hexCode)} />
      <DeleteButton
        colorCardId={colorCardId}
        onHandleDeleteProp={onHandleDelete}
        onColorStateProp={onColorState}
        onSetColorsStateProp={onSetColorsState}
      />
    </StyledCard>
  );
}

function handleHexCode(input) {
  return input.length !== 4 ? input : `#${input.slice(1)}${input.slice(1)}`;
}
