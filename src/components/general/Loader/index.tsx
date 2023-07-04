
import CircularProgress from "@mui/material/CircularProgress";
import "./style.scss";

const Loader = () => {
  return (
    <div className="loader-wrapper-overlay">
      <CircularProgress size="70px" sx={{color: "red"}}/>
    </div>
  );
};

export default Loader;
