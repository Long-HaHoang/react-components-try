import initialColors from "./util/initialColors.js";
import createEachCard from "./util/createEachCard.js";
import handleDelete from "./util/handleDelete.js";

import StyledCard from "./components/StyledCard";
import Divider from "./components/Divider";
import StyledH2 from "./components/StyledH2";
import FlexContainer from "./components/FlexContainer";

import React, { useState } from "react";

console.clear();

function App() {
  const [colors, setColors] = useState(initialColors);

  return (
    <main>
      <StyledH2>First Component</StyledH2>
      <StyledCard
        hexCode={initialColors[0].colorCode}
        colorCardId={initialColors[0].id}
      />

      <Divider />
      <StyledH2>Second Component with function</StyledH2>
      <StyledCard
        hexCode={initialColors[1].colorCode}
        colorCardId={initialColors[1].id}
      />

      <Divider />
      <StyledH2>Third Component add deleteButton</StyledH2>
      <StyledCard
        hexCode={initialColors[2].colorCode}
        colorCardId={initialColors[2].id}
      />

      <Divider />
      <StyledH2>Fourth Component mapping </StyledH2>
      <FlexContainer>{createEachCard(initialColors)}</FlexContainer>

      <Divider />
      <StyledH2>Fifth Component delete function </StyledH2>
      <FlexContainer>
        {createEachCard(colors, handleDelete, setColors)}
      </FlexContainer>
    </main>
  );
}

export default App;
