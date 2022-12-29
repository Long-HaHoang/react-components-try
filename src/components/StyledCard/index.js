import styled from "styled-components";
import CardHexCode from "../CardHexCode";

const StyledCard = styled.div`
  width: 200px;
  aspect-ratio: 1;
  background-color: #cccccc;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function StyledCardComponent({ hexCode }) {
  return (
    <StyledCard>
      <CardHexCode colorCode={handleHexCode(hexCode)} />
    </StyledCard>
  );
}

function handleHexCode(input) {
  return input.length !== 4 ? input : `#${input.slice(1)}${input.slice(1)}`;
}
