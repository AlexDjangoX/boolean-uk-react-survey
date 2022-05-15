export default function Header({ serverError, errorMessage }) {
  return (
    <header className="header">
      <div className="header-image-heading">
        <img width="75" src="assets/rubber-duck.webp" alt="rubber duck" />
        <h1>Yet Another Survey !</h1>
      </div>
      <div className="header-network-error">
        {serverError && (
          <div>
            <h3>{`${errorMessage}`}</h3>{" "}
            <p> RUN: npx json-server --watch src/data/data.json</p>
          </div>
        )}
      </div>
    </header>
  );
}
