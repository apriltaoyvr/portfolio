import Navbar from './Navbar';

/* Layout Component for the Navbar to be on all routes */
export default function Layout({ setTheme, children }) {
  return (
    <>
      <Navbar setTheme={setTheme}/>
      {children}
    </>
  );
}
