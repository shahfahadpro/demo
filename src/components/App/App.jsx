import { Navbar } from "../Navbar/Navbar";

const App = () => {
  const items = ["Home", "About", "Contact Us", "Fahad"];

  return (
    <div>
      <Navbar listItems={items}>
        <p className="myPara">Hello, we're learing React.js</p>
      </Navbar>
    </div>
  );
};

export default App;
