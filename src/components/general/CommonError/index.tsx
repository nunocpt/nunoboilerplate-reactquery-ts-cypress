
import { Link } from "react-router-dom";
import "./style.scss";

const CommonError = ({ errorType }: { errorType: string }) => {
  return (
    <>
      {errorType === "page-not-found" ? (
        <div className="common-error-page-wrapper">
          <h2>This page is not available:</h2>
          <p>The link you followed might be broken.</p>
          <Link to="/" className="white-btn" type="button">
            Go to Homepage
          </Link>
        </div>
      ) : (
        <div className="error-main-wrapper">
          <div className="common-error-page-wrapper">
            <h2>Something went wrong.</h2>
            <p>Please try again later.</p>
            <div className="btns-wrapper">
              <Link
                to="/"
                className="white-btn"
                type="button"
                data-cy="go-to-homepage-btn"
              >
                Go to Homepage
              </Link>
              <button
                className="white-btn"
                type="button"
                onClick={() => {
                  location.reload();
                }}
              >
                Refresh page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonError;
