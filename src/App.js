import initialColors from "./util/initialColors";
import StyledCard from "./components/StyledCard";
import Divider from "./components/Divider";
import StyledH2 from "./components/StyledH2";

function App() {
  return (
    <main>
      <StyledH2>First Component</StyledH2>
      <StyledCard hexCode={initialColors[0]} />
      <Divider />
      <StyledH2>Second Component with function</StyledH2>
      <StyledCard hexCode={initialColors[1]} />
      <Divider />
      <StyledH2>Third Component add deleteButton</StyledH2>
      <StyledCard hexCode={initialColors[1]} />
    </main>
  );
}

export default App;
