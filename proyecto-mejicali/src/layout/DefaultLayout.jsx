import { Route, Routes } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import routes from "../routes/PageRoute";
import Footer from "../components/shared/footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";

export const DefaultLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container-layaout">
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
