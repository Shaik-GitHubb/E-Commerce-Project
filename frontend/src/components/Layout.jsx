import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="p-2">
        <Outlet /> {/* This will render child pages */}
      </main>
      <Footer />
    </div>
  );
}