import "./main.css";

export default function MainComponent() {
  return (
    <>
      <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <input className="search-bar" type="search" />
      <div className="buttons">
        <button>Google Search</button>
        <button>Feeling Lucky</button>
      </div>
    </>
  );
}
