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
`;

export default function DeleteButton() {
  return <StyledDeleteButton type="button">&times;</StyledDeleteButton>;
}
