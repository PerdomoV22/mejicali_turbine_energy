import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../layout/DefaultLayout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<DefaultLayout />} />
        </Routes>
    );
}

