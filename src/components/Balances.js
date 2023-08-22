import { Balance } from "./Balance";

export function Balances({ income, expanses }) {
  const totalIncome = income?.reduce((acc, cur) => acc + cur.value, 0);
  const totalExpanses = expanses?.reduce((acc, cur) => acc + cur.value, 0);
  const balance = totalIncome - totalExpanses;

  return (
    <div className="balance-wrapper">
      <Balance balanceStyle="balance" name="balance" value={balance}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z" />
        </svg>
      </Balance>
      <Balance balanceStyle="income" name="income" value={totalIncome}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="M553.638-441.174q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM261.855-293.333q-36.718 0-62.62-25.902-25.902-25.902-25.902-62.62v-358.45q0-36.515 25.902-62.519 25.902-26.003 62.62-26.003h584.507q36.36 0 62.253 26.003t25.893 62.519v358.45q0 36.718-25.893 62.62-25.893 25.902-62.253 25.902H261.855Zm85.985-81.174H760q0-39 27.167-66.167 27.167-27.166 66.167-27.166v-186.668q-39 0-66.167-27.355T760-747.842H347.84q0 38.624-27.166 65.979-27.167 27.355-66.167 27.355v186.668q39 0 66.167 27.166 27.166 27.167 27.166 66.167ZM800-145.492H113.638q-36.36 0-62.253-25.893t-25.893-62.253V-680h88.146v446.362H800v88.146ZM254.507-374.507v-373.335 373.335Z" />
        </svg>
      </Balance>
      <Balance balanceStyle="expanses" name="expanses" value={totalExpanses}>
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
