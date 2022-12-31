import styled from "styled-components";

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  border: solid;
  border-radius: 50%;
  width: 2.5em;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  font-size: 1em;
`;

export default function DeleteButton({
  colorCardId,
  onHandleDeleteProp,
  onColorStateProp,
  onSetColorsStateProp,
}) {
  return (
    <StyledDeleteButton
      type="button"
      onClick={() =>
        onHandleDeleteProp(colorCardId, onColorStateProp, onSetColorsStateProp)
      }
    >
      &times;
    </StyledDeleteButton>
  );
}
