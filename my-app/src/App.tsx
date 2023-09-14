import React, { useEffect, useState } from "react";
import { About, Contact, Container, MainWrapper, NavBar, Portfolio, ResumeModal } from "./components";

const App: React.FC = () => {
  const [isModal, setIsModal] = useState(false)
  const style =document.body.style
  const [scroll, setScroll] = useState(style.overflow='hidden')
  useEffect(() => {
    setScroll(scroll)
  },[]);
  return (
    
    <>
      <Container>
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
