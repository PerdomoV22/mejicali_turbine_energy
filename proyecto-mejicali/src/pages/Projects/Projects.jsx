import { Route, Routes } from "react-router-dom";
import routes from "./RoutesProject";

const Projects = () => {
  return (
    <>
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

export default Projects;
