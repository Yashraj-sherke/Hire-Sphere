import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="content">
        <img src="./images/404.png" alt="notfound" />
        <Link to="/">GO TO HOME</Link>
      </div>
    </section>
  );
};
export default NotFound;
