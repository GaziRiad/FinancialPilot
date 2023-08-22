export function Tab({ name, onClick, children }) {
  return (
    <li onClick={() => onClick(name)}>
      <span className="tab-icon">{children}</span>
      <span className="tab-name">{name}</span>
    </li>
  );
}
