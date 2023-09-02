import React from "react";
import { About, Container, MainWrapper, NavBar} from "./components";
const App: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar/>
        <MainWrapper />
        <About/>
      </Container>
    </>
  );
};

export default App;
