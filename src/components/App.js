import { useState } from "react";
import "./../styles/index.css";
import { Balances } from "./Balances";
import { TabsList } from "./TabsList";

export default function App() {
  const [incomes, setIncomes] = useState([]);

  const [expanses, setExpanses] = useState([]);

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
  return (
    <div className="display-screen">
      <h2>all transactions</h2>
      <div className="transactions-table">
        <div className="tableHeader">
          <span>Transaction</span>
          <span>Date</span>
          <span>status</span>
          <span>amount</span>
        </div>
        <Transaction />
        <div className="table-footer">
          <p>
            Shwoing <span>1</span> to <span>10</span> of <span>24</span> results
          </p>
          <div className="table-bttns">
            <button className="table-btn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="m312.812-435.927 229.826 229.826L480-144.173 144.173-480 480-816.204l62.638 62.305-229.826 229.826h503.392v88.146H312.812Z" />
                </svg>
              </span>
              <span>Previous</span>
            </button>
            <button className="table-btn">
              <span>Next</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="M647.188-435.927H144.173v-88.146h503.015L417.362-753.899 480-816.204 816.204-480 480-144.173l-62.638-61.928 229.826-229.826Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Transaction() {
  return (
    <>
      <div className="transaction-wrapper">
        <span>Monthly salary</span>
        <span>today</span>
        <span>Income</span>
        <span className="amount-and-edit-btn">
          <span>3,000$</span>
          <svg
            className="edit-transaction-btn"
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path d="M480.282-138.521q-27.253 0-46.586-19.308-19.333-19.309-19.333-46.424 0-26.838 19.281-46.473 19.281-19.635 46.357-19.635 27.535 0 46.586 19.659 19.05 19.658 19.05 46.587 0 26.928-19.051 46.261-19.052 19.333-46.304 19.333Zm0-275.842q-27.253 0-46.586-19.281t-19.333-46.357q0-27.535 19.281-46.586 19.281-19.05 46.357-19.05 27.535 0 46.586 19.051 19.05 19.052 19.05 46.304 0 27.253-19.051 46.586-19.052 19.333-46.304 19.333Zm0-275.276q-27.253 0-46.586-19.495-19.333-19.494-19.333-46.869t19.281-46.614q19.281-19.239 46.357-19.239 27.535 0 46.586 19.333 19.05 19.334 19.05 46.709 0 27.375-19.051 46.775-19.052 19.4-46.304 19.4Z" />
          </svg>
        </span>
      </div>
    </>
  );
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
    <div className="display-screen">
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
    <div className="display-screen">
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
