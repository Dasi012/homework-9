import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useEffect, useState } from "react";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { Users } from "./components/users/Users";
const product =[
  {
    id: "1",
    title: "Sumsung",
    price: 250,
    date: new Date("2023, 05, 09"),
  },
]
function App() {

  const [newExpense, setNewExpense] = useState(JSON.parse(localStorage.getItem('key'))|| product);
  const [login, setLogin] = useState(false);
  const [insideUsers,setInsideUsers]=useState(false)
 

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(newExpense));
  }, [newExpense]);

  useEffect(() => {
    const loginLocalStorage = localStorage.getItem("Auth");
    setLogin(loginLocalStorage);
    const showUsersLocalStorage = localStorage.getItem('Users')
    setInsideUsers(showUsersLocalStorage)
  }, [login]);

  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data]);
  };

  const loginHandler = () => {
    setLogin(true);
    localStorage.setItem("Auth", !login);
  };

  const logOutHandler = () => {
    setLogin(false);
    localStorage.removeItem("Auth");
  };

  const deleteExpense = (id)=>{
   const newData=newExpense.filter((el)=> el.id !==id)
   setNewExpense(newData)
  }

  const showUsers = ()=>{
    setInsideUsers(true)
    localStorage.setItem('Users',insideUsers)
  }
  const showExpense = ()=>{
    setInsideUsers(false)
    localStorage.removeItem('Users')
  }

  return (
    <>
      <Header showUsers={showUsers} showExpense={showExpense} login={login} logOutHandler={logOutHandler} />

      {login ? (
        <>
        {insideUsers? <Users/> : 
        <>
        <NewExpense addNewExpense={addNewExpense} />
        <Expenses deleteExpense={deleteExpense} newExpense={newExpense} />
        </>
        }
          
        </>
      ) : (
        <Login loginHandler={loginHandler} />
      )}
    </>

  );
}

export default App;
