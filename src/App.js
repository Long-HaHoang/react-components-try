import initialColors from "./util/initialColors";
import StyledCard from "./components/StyledCard";
import Divider from "./components/Divider";
import StyledH2 from "./components/StyledH2";
import createEachCard from "./util/createEachCard";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  return (
    <main>
      <StyledH2>First Component</StyledH2>
      <StyledCard hexCode={initialColors[0].colorCode} />
      <Divider />
      <StyledH2>Second Component with function</StyledH2>
      <StyledCard hexCode={initialColors[1].colorCode} />
      <Divider />
      <StyledH2>Third Component add deleteButton</StyledH2>
      <StyledCard hexCode={initialColors[1].colorCode} />
      <Divider />
      <StyledH2>Fourth Component mapping </StyledH2>
      {createEachCard(colors)}
      <Divider />
      <StyledH2>Fifth Component delete function </StyledH2>
    </main>
  );
}

function handleDelete(id, colors, setColors) {
  setColors(colors.filter((color) => color.id !== id));
}

export default App;
