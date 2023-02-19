import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

function App() {
  // Skipping workflows
  // Lets try it again
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
          <h1>Update</h1>
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
