import styled from "styled-components";

const StyledHexCodeBox = styled.div`
  width: 50%;
  height: 20%;
  background-color: #ccc;
  border: solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CardHexCode({ colorCode }) {
  return <StyledHexCodeBox>{colorCode}</StyledHexCodeBox>;
}
