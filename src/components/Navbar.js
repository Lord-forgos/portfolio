import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-zinc-900 shadow-xl">
      <div className="container">
        {(location.pathname == "/" && (
          <nav className="flex justify-start">
            <div className="mx-6 my-8">
              <a href="/#presentation" className="hover:border-b-2">
                Présentation
              </a>
            </div>

            <div className="mx-6 my-8">
              <a href="/#skills" className="hover:border-b-2">
                Compétences
              </a>
            </div>

            <div className="mx-6 my-8">
              <a href="/#projects" className="hover:border-b-2">
                Projets
              </a>
            </div>

            <div className="mx-6 my-8">
              <a href="/#contact" className="hover:border-b-2">
                Contact
              </a>
            </div>
          </nav>
        )) || (
          <nav className="mr-8 flex justify-start">
            <div className="mx-6 my-8">
              <Link to={"/"} className="hover:border-b-2">
                ← Retour
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
