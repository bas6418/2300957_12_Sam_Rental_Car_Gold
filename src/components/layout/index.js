import Footer from '../footer';
import NavbarComponent from '../navbar';

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      <div>{children}</div>
      <Footer />
    </>
  );
}
