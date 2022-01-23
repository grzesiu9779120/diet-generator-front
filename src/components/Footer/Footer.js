/* eslint-disable func-names */

const Footer = function () {
  return (
    <footer
      className="page-footer font-small special-color-dark pt-1 fixed-bottom"
      style={{ backgroundColor: 'rgb(194, 230, 142' }}>
      <div className="container">
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-outline-white btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-2">
        © 2021 Copyright:
        <a href="https://gdansk.pja.edu.pl/pl/"> PJATK Gdańsk</a>
      </div>
    </footer>
  );
};

export default Footer;
