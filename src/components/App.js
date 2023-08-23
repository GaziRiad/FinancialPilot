import { useState } from "react";
import "./../styles/index.css";
import { Balances } from "./Balances";
import { TabsList } from "./TabsList";

function getCurrentFormattedDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${day}-${month}-${year}`;
}

export default function App() {
  const [incomes, setIncomes] = useState([
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 1,
      title: "Monthly salary",
      value: 2000,
    },
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 2,
      title: "Monthly salary",
      value: 2000,
    },
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 3,
      title: "Monthly salary",
      value: 2000,
    },
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 4,
      title: "Monthly salary",
      value: 2000,
    },
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 5,
      title: "Monthly salary",
      value: 2000,
    },
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 6,
      title: "Monthly salary",
      value: 2000,
    },
    {
      date: "23-08-2023",
      description: "This my monthly salary :)",
      id: 7,
      title: "Monthly salary",
      value: 2000,
    },
  ]);

  const [expanses, setExpanses] = useState([]);

  const allTransaction = [...incomes, ...expanses];
  console.log(allTransaction);

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
        allTransaction={allTransaction}
      />
    </div>
  );
}

function MainScreen({ onAddIncome, onAddExpanses, allTransaction }) {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="main-screen">
      <div className="sidebar">
        <TabsList onClick={setSelectedTab} selectedTab={selectedTab} />
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
          <Home allTransaction={allTransaction} />
        )}
      </div>
    </div>
  );
}

function Home({ allTransaction }) {
  const itemPerPage = 6;
  const totalPages = Math.ceil(allTransaction.length / itemPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentItems = allTransaction.slice(startIndex, endIndex);

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
        {allTransaction.length > 0 ? (
          currentItems.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p className="no-transactions--text">
            Please Add some transactions to get results :)
          </p>
        )}
        <div className="table-footer">
          <p>
            Shwoing <span>{startIndex + 1}</span> to <span>{endIndex}</span> of{" "}
            <span>{currentItems.length}</span> results
          </p>
          <div className="table-bttns">
            <button
              className="table-btn"
              onClick={() =>
                setCurrentPage((currentPage) =>
                  currentPage !== 1 ? currentPage - 1 : currentPage
                )
              }
            >
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
            <button
              className="table-btn"
              onClick={() =>
                setCurrentPage((currentPage) =>
                  currentPage !== totalPages ? currentPage + 1 : currentPage
                )
              }
            >
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

function Transaction({ transaction }) {
  const [editIsOpen, setEditIsOpen] = useState(false);

  function isDateToday(dateString) {
    const [day, month, year] = dateString.split("-");
    const storedDate = new Date(`${year}-${month}-${day}`);

    const currentDate = new Date();
    return (
      storedDate.getDate() === currentDate.getDate() &&
      storedDate.getMonth() === currentDate.getMonth() &&
      storedDate.getFullYear() === currentDate.getFullYear()
    );
  }

  return (
    <>
      <div className="transaction-wrapper">
        <span>{transaction.title}</span>
        <span>
          {isDateToday(transaction.date) ? "today" : transaction.date}
        </span>
        <span>{transaction.value > 0 ? "Income" : "Exapanses"}</span>
        <span className="amount-and-edit-btn">
          <span>{+transaction.value}$</span>
          <svg
            className="edit-transaction-btn"
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
            onClick={() => setEditIsOpen((editIsOpen) => !editIsOpen)}
          >
            <path d="M480.282-138.521q-27.253 0-46.586-19.308-19.333-19.309-19.333-46.424 0-26.838 19.281-46.473 19.281-19.635 46.357-19.635 27.535 0 46.586 19.659 19.05 19.658 19.05 46.587 0 26.928-19.051 46.261-19.052 19.333-46.304 19.333Zm0-275.842q-27.253 0-46.586-19.281t-19.333-46.357q0-27.535 19.281-46.586 19.281-19.05 46.357-19.05 27.535 0 46.586 19.051 19.05 19.052 19.05 46.304 0 27.253-19.051 46.586-19.052 19.333-46.304 19.333Zm0-275.276q-27.253 0-46.586-19.495-19.333-19.494-19.333-46.869t19.281-46.614q19.281-19.239 46.357-19.239 27.535 0 46.586 19.333 19.05 19.334 19.05 46.709 0 27.375-19.051 46.775-19.052 19.4-46.304 19.4Z" />
          </svg>
          {editIsOpen && <EditTransaction />}
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
      date: getCurrentFormattedDate(),
      editIsOpen: false,
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
      date: getCurrentFormattedDate(),
      editIsOpen: false,
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

function EditTransaction() {
  return (
    <div className="edit-transaction-modal">
      <span className="edit-transaction-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M480-120v-75.666l214.667-214.667 75.666 75.666L555.666-120H480ZM120-326.667v-66.666h293.334v66.666H120Zm688.333-46-75.666-75.666 29-29q9-9 23.333-9 14.333 0 23.333 9l29 29q9 9 9 23.333 0 14.333-9 23.333l-29 29ZM120-490v-66.667h460.001V-490H120Zm0-163.334V-720h460.001v66.666H120Z" />
        </svg>
        <span>Edit</span>
      </span>
      <span className="edit-transaction-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M480.078-326.667q72.255 0 122.755-50.578 50.5-50.579 50.5-122.833 0-72.255-50.578-122.755-50.579-50.5-122.833-50.5-72.255 0-122.755 50.578-50.5 50.579-50.5 122.833 0 72.255 50.578 122.755 50.579 50.5 122.833 50.5Zm-.235-62.666q-46.176 0-78.343-32.324-32.167-32.323-32.167-78.5 0-46.176 32.324-78.343 32.323-32.167 78.5-32.167 46.176 0 78.343 32.324 32.167 32.323 32.167 78.5 0 46.176-32.324 78.343-32.323 32.167-78.5 32.167ZM480-200q-146 0-264.667-82.5Q96.667-365 40-500q56.667-135 175.333-217.5Q334-800 480-800q146 0 264.667 82.5Q863.333-635 920-500q-56.667 135-175.333 217.5Q626-200 480-200Zm0-300Zm-.112 233.334q118.445 0 217.612-63.5Q796.667-393.667 848.667-500q-52-106.333-151.054-169.834-99.055-63.5-217.501-63.5-118.445 0-217.612 63.5Q163.333-606.333 110.666-500q52.667 106.333 151.721 169.834 99.055 63.5 217.501 63.5Z" />
        </svg>
        <span>See details</span>
      </span>
      <span className="edit-transaction-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M267.333-120q-27.5 0-47.083-19.583t-19.583-47.083v-553.335H160v-66.666h192V-840h256v33.333h192v66.666h-40.667v553.335q0 27-19.833 46.833T692.667-120H267.333Zm425.334-620.001H267.333v553.335h425.334v-553.335Zm-328 469.335h66.666v-386.001h-66.666v386.001Zm164 0h66.666v-386.001h-66.666v386.001ZM267.333-740.001v553.335-553.335Z" />
        </svg>
        <span>Delete</span>
      </span>
    </div>
  );
}
