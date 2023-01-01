import styled from "styled-components";

const StyledAddButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #ccc;
  border: solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function AddButton() {
  return (
    <StyledAddButton
      onClick={() => console.log("More is better...", crypto.randomUUID())}
    >
      ADD
    </StyledAddButton>
  );
}
