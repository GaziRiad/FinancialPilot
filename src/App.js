import "./styles/index.css";

export default function App() {
  return (
    <div className="container">
      <img src="images/FinancialPilot-logo.png" alt="FinancialPilot.com"></img>
      <p className="welcome-msg">Welcome back, Riad Hallouch</p>
      <Balances />
      <MainScreen />
    </div>
  );
}

function Balances() {
  return (
    <div className="balance-wrapper">
      <Balance balanceStyle="balance" name="balance">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z" />
        </svg>
      </Balance>
      <Balance balanceStyle="income" name="income">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M553.638-441.174q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM261.855-293.333q-36.718 0-62.62-25.902-25.902-25.902-25.902-62.62v-358.45q0-36.515 25.902-62.519 25.902-26.003 62.62-26.003h584.507q36.36 0 62.253 26.003t25.893 62.519v358.45q0 36.718-25.893 62.62-25.893 25.902-62.253 25.902H261.855Zm85.985-81.174H760q0-39 27.167-66.167 27.167-27.166 66.167-27.166v-186.668q-39 0-66.167-27.355T760-747.842H347.84q0 38.624-27.166 65.979-27.167 27.355-66.167 27.355v186.668q39 0 66.167 27.166 27.166 27.167 27.166 66.167ZM800-145.492H113.638q-36.36 0-62.253-25.893t-25.893-62.253V-680h88.146v446.362H800v88.146ZM254.507-374.507v-373.335 373.335Z" />
        </svg>
      </Balance>
      <Balance balanceStyle="expanses" name="expanses">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M571.667-620.015q-13.711-30.782-37.841-47.891-24.131-17.109-57.246-17.109-23.464 0-42.305 7.819t-32.956 22.616l-62.407-62.594q18.667-20.667 43.776-33.457t53.007-17.21v-86.667h80.609v86.087q41.116 3.319 80.442 34.761 39.327 31.442 58.327 78.674l-83.406 34.971ZM800.015-47.71 617.087-230.26q-19.667 17.869-46.391 27.326-26.725 9.456-54.392 12.022v85.42h-80.609v-86.754q-54.028-7.927-96.29-49.311-42.261-41.385-59.159-98.689L365-371.319q13.333 46.87 42.891 71.935 29.558 25.065 74.776 25.065 19.565 0 38.072-4.797t30.725-16.203L48.376-799.348l51.855-52.42L852.435-99.565l-52.42 51.855Z" />
        </svg>
      </Balance>
    </div>
  );
}

function Balance({ balanceStyle, name, children }) {
  return (
    <div className="money-wrapper">
      <span className={`money--icon ${balanceStyle}`}>{children}</span>
      <div>
        <p className="money-title">{name}</p>
        <p className="money-balance">2,000$</p>
      </div>
    </div>
  );
}

function MainScreen() {
  return (
    <div className="main-screen">
      <div className="sidebar">
        <TabsList />
      </div>
      <div className="main-content">
        {/* <IncomeAdd /> */}
        <ExpanseAdd />
      </div>
    </div>
  );
}

function TabsList() {
  return (
    <ul className="tab-list">
      <Tab name="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M232.319-192.319h123.608v-251.754h248.146v251.754h123.608v-371.71L480-749.696 232.319-563.903v371.584Zm-88.146 88.146v-503.929L480-860.16l336.204 251.995v503.992H522.899v-258.726h-85.798v258.726H144.173ZM480-471.246Z" />
        </svg>
      </Tab>
      <Tab name="Add Income">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M444.899-276.232h74.203v-164h164.666v-74.203H519.102v-169.333h-74.203v169.333H276.232v74.203h168.667v164Zm35.33 212.059q-86.643 0-162.306-32.584Q242.26-129.34 185.8-185.8q-56.46-56.46-89.043-132.121-32.584-75.661-32.584-162.36 0-86.7 32.584-162.413 32.583-75.712 88.984-131.859 56.401-56.146 132.089-88.899 75.689-32.752 162.42-32.752t162.488 32.723q75.758 32.723 131.876 88.82 56.118 56.096 88.854 131.93 32.736 75.835 32.736 162.554 0 86.695-32.752 162.352-32.753 75.656-88.899 131.948-56.147 56.291-131.914 88.998-75.767 32.706-162.41 32.706Zm.104-88.146q136.74 0 232.044-95.401t95.304-232.613q0-136.74-95.179-232.044t-232.69-95.304q-136.595 0-232.044 95.179-95.449 95.179-95.449 232.69 0 136.595 95.401 232.044 95.401 95.449 232.613 95.449ZM480-480Z" />
        </svg>
      </Tab>
      <Tab name="Add Expanses">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M444.899-276.232h74.203v-164h164.666v-74.203H519.102v-169.333h-74.203v169.333H276.232v74.203h168.667v164Zm35.33 212.059q-86.643 0-162.306-32.584Q242.26-129.34 185.8-185.8q-56.46-56.46-89.043-132.121-32.584-75.661-32.584-162.36 0-86.7 32.584-162.413 32.583-75.712 88.984-131.859 56.401-56.146 132.089-88.899 75.689-32.752 162.42-32.752t162.488 32.723q75.758 32.723 131.876 88.82 56.118 56.096 88.854 131.93 32.736 75.835 32.736 162.554 0 86.695-32.752 162.352-32.753 75.656-88.899 131.948-56.147 56.291-131.914 88.998-75.767 32.706-162.41 32.706Zm.104-88.146q136.74 0 232.044-95.401t95.304-232.613q0-136.74-95.179-232.044t-232.69-95.304q-136.595 0-232.044 95.179-95.449 95.179-95.449 232.69 0 136.595 95.401 232.044 95.401 95.449 232.613 95.449ZM480-480Z" />
        </svg>
      </Tab>
      <Tab name="Darkmode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M479.9-113.029q-153.114 0-259.993-106.878Q113.029-326.786 113.029-479.9q0-153.115 106.907-260.376Q326.844-847.537 480-847.537q8.681 0 18.05.384 9.37.385 22.283 1.718-32.014 33.261-50.405 77.362-18.391 44.102-18.391 93 0 93.376 65.582 158.739 65.583 65.363 159.273 65.363 48.478 0 92.695-17.109 44.218-17.108 76.913-47.499.768 11.57 1.153 19.59.384 8.021.384 15.392 0 153.046-107.261 260.307Q633.015-113.029 479.9-113.029Zm.1-88.145q89.565 0 159.362-51.747 69.797-51.746 94.362-125.035-18.435 7.116-39.691 10.463-21.256 3.348-41.57 2.218-115.575-8.102-196.953-88.256-81.379-80.154-90.235-199.498-.565-17.328 2.167-37.555 2.732-20.227 11.369-45.14-77.391 29.797-127.514 100.594-50.123 70.797-50.123 155.13 0 116.248 81.289 197.537T480-201.174Zm-12.218-267.275Z" />
        </svg>
      </Tab>
    </ul>
  );
}

function Tab({ name, children }) {
  return (
    <li>
      <span className="tab-icon">{children}</span>
      <span className="tab-name">{name}</span>
    </li>
  );
}

function Home() {}

function IncomeAdd() {
  return (
    <div className="add-income-screen">
      <h2>Add Income</h2>
      <form className="add-form">
        <div>
          <label>Give it a title:</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Income's value:</label>
          <input type="number"></input>
        </div>

        <div>
          <label>Description:</label>
          <textarea type="text-area"></textarea>
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

function ExpanseAdd() {
  return (
    <div className="add-income-screen">
      <h2>Add Expanses</h2>
      <form className="add-form">
        <div>
          <label>Give it a title:</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Expanses's value:</label>
          <input type="number"></input>
        </div>

        <div>
          <label>Description:</label>
          <textarea type="text-area"></textarea>
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
