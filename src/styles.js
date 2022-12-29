import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --primary-color: #181818;
  --secondary-color: #e6e6e6;
  display: flex;
  justify-content: center;
  margin-top: 1em;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: auto 1fr auto;
  background-color: var(--primary-color);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
`;
