import NavMenu from "./component/menu";
import TodoList from "./component/map";
import ProductList from "./component/productCard";
import UsersList from "./component/useCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <TodoList />
      <ProductList />
      <UsersList />
      {/* <Tasks/> */}
    </div>
  );
}

export default App;