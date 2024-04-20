import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { DefaultLayout } from "./libs/layout/defaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
