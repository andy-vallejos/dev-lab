import { Link } from "../Link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Pagina ejemplo para enrutamiento</p>
      <Link to="/about">Ir a Sobre nosotros</Link>
    </>
  );
}
