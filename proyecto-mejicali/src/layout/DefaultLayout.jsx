import { Route, Routes } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import routes from "../routes/PageRoute";

export const DefaultLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container">
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
    </>
  );
};
