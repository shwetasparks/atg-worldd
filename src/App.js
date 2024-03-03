import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Nav from "./components/Nav";
import MyModal from "./components/shared/MyModal";
import AuthContextProvider from "./context/AuthContextProvider";
import Join from "./components/Join";
import WritePost from "./components/mobile/WritePost";
import "./index.css";

function App() {
  //modal dialog
  const [modalShow, setModalShow] = useState(false);
  return (
    <AuthContextProvider>
      <div className="">
        <Header />
        <Hero />
        <Nav setModalShow={setModalShow} />
        <div className="content">
          <Content />
          <Location />
          <MyModal show={modalShow} onHide={() => setModalShow(false)}>
            <Join />
          </MyModal>
        </div>
        <WritePost />
      </div>
      {/* auth */}
    </AuthContextProvider>
  );
}

export default App;
