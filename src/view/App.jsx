import { LandingPage } from './landing-page';
import { ProjectPage } from './project-page';
import { TechStack } from './tech-stack';
import { AboutPage } from './about-page';
import { Footer } from './footer';
import { Modal } from './modal';
import { useState } from 'react';
import { ShowAlert} from '../view/alert'


function App() {
  let [openModal, setOpenModal] = useState(false)
  let [showAlert, setShowAlert] = useState(false)
  
  //open the modal
  const openedModal = () => {
    setOpenModal(true)
  }

  //close the modal
  const closedModal = () => {
    setOpenModal(false)
  }

  //open the alert
  const openAlert = () =>{
    setShowAlert(true)
  }

  //close the alert
  const closeAlert = () =>{
      setShowAlert(false)
  }
  
  return (
    <>
        <ShowAlert closeAlert={closeAlert} openAlert={showAlert} setOpenAlert={closeAlert}/>
        <LandingPage onClick={openedModal}/>
        <Modal open={openModal} close={closedModal} openedAlert={openAlert}/>
        <ProjectPage/>
        <TechStack/>
        <AboutPage onClick={openedModal}/>
        <Footer/>
    </>
  );
}

export default App;
