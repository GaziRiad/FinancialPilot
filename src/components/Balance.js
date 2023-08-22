export function Balance({ balanceStyle, name, value, children }) {
  return (
    <div className="money-wrapper">
      <span className={`money--icon ${balanceStyle}`}>{children}</span>
      <div>
        <p className="money-title">{name}</p>
        <p className="money-balance">{value}$</p>
      </div>
    </div>
  );
}
