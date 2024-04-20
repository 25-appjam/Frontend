import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { DefaultLayout } from "./libs/layout/defaultLayout";
import { Make } from "./pages/auth/make";
import { Login } from "./pages/auth/login";
import { Join } from "./pages/auth/join";
import { Home } from "./pages/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/make" element={<Make />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
