function Header({ score, highScore }) {
  return (
    <div className="header-component">
      <h3>Score: {score}</h3>
      <h3>High-Score: {highScore}</h3>
    </div>
  );
}

export default Header;
