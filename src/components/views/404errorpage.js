import '../../styles/404errorpage.css';

const Error404Page = () => {
  return (
    <div className="error-page-container text-center py-5">
      {/* Images will stay in place */}
      <div className="error-images rocket-container">
        <img
          src="/Team_Rocket_trio_OS%201.png"
          alt="Team Rocket"
          className="img-fluid rocket-img"
        />
      </div>

      {/* 404 Background Image */}
      <div className="error-images background-container">
        <img
          src="/404.png"
          alt="404 Error"
          className="img-fluid error-404-img"
        />
      </div>

      {/* Text and Button Container */}
      <div className="text-and-button-container mt-5">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">The rocket team has won this time.</p>
        <a href="/" className="btn btn-primary">
          Return
        </a>
      </div>
    </div>
  );
};

export default Error404Page;
