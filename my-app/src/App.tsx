import React, { useEffect, useState } from "react";
import { About, Contact, Container, MainWrapper, NavBar, Portfolio, ResumeModal } from "./components";
const App: React.FC = () => {
  const [isModal, setIsModal] = useState(false)

  // useEffect(() => {});
  return (
    
    <>
      <Container >
        <NavBar setIsModal={setIsModal}/>
        <MainWrapper />
        <About />
        <Portfolio />
        <Contact />
        <ResumeModal isModal={isModal} setIsModal={setIsModal} />
      </Container>
    </>
  );
};

export default App;
