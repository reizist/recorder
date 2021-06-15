import Header from "../components/header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
