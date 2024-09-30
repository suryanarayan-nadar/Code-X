// //components

// import Home from "./components/Home";

// import DataProvider from "./context/DataProvider";

// function App() {
//   return (
//     <DataProvider>
//       <Home />
//     </DataProvider>
//   );
// }

// export default App;

//components
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
