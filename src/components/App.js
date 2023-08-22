import { useState } from "react";
import "./../styles/index.css";
import { Balances } from "./Balances";
import { TabsList } from "./TabsList";

export default function App() {
  const [incomes, setIncomes] = useState([
    // { id: 1, title: "Monthly salary", description: "from work", value: 2000 },
    // {
    //   id: 2,
    //   title: "freelancing",
    //   description: "from freelancing",
    //   value: 1000,
    // },
  ]);

  const [expanses, setExpanses] = useState([
    // { id: 1, title: "Groceries", description: "", value: 165 },
    // { id: 2, title: "landed money", description: "", value: 500 },
  ]);

  function handleAddIncome(income) {
    // console.log(income);
    setIncomes((incomes) => [...incomes, income]);
  }

  function handleAddExpanses(expanse) {
    setExpanses((expanses) => [...expanses, expanse]);
  }

  return (
    <div className="container">
      <img src="images/FinancialPilot-logo.png" alt="FinancialPilot.com"></img>
      <p className="welcome-msg">Welcome back, Riad Hallouch</p>
      <Balances income={incomes} expanses={expanses} />
      <MainScreen
        onAddIncome={handleAddIncome}
        onAddExpanses={handleAddExpanses}
      />
    </div>
  );
}

function MainScreen({ onAddIncome, onAddExpanses }) {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="main-screen">
      <div className="sidebar">
        <TabsList onClick={setSelectedTab} />
      </div>
      <div className="main-content">
        {selectedTab === "Add Income" ? (
          <IncomeAdd
            onAddIncome={onAddIncome}
            setSelectedTab={setSelectedTab}
          />
        ) : selectedTab === "Add Expanses" ? (
          <ExpanseAdd
            onAddExpanses={onAddExpanses}
            setSelectedTab={setSelectedTab}
          />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

function Home() {
  return <div></div>;
}

function IncomeAdd({ onAddIncome, setSelectedTab }) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newIncome = {
      id: Date.now(),
      title,
      value,
      description,
    };

    onAddIncome(newIncome);
    setTitle("");
    setValue("");
    setDescription("");
    setSelectedTab("Home");
  }

  return (
    <div className="add-income-screen">
      <h2>Add Income</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div>
          <label>Give it a title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label>Income's value:</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            type="text-area"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* <select>
          <option value="Groceries">Groceries</option>
          <option value="Family">Family</option>
          <option value="Entertainment">Entertainment</option>
        </select> */}
        <Button>Save</Button>
      </form>
    </div>
  );
}

function ExpanseAdd({ onAddExpanses, setSelectedTab }) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newExpanses = {
      id: Date.now(),
      title,
      value,
      description,
    };

    onAddExpanses(newExpanses);
    setTitle("");
    setValue("");
    setDescription("");
    setSelectedTab("Home");
  }

  return (
    <div className="add-income-screen">
      <h2>Add Expanses</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div>
          <label>Give it a title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Expanses's value:</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(+e.target.value)}
          ></input>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            type="text-area"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <select>
          <option value="Groceries">Groceries</option>
          <option value="Family">Family</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <Button>Save</Button>
      </form>
    </div>
  );
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}
