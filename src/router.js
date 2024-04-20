import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { DefaultLayout } from "./libs/layout/defaultLayout";
import { Make } from "./pages/auth/make";
import { Login } from "./pages/auth/login";
import { Join } from "./pages/auth/join";
import { Home } from "./pages/home";
import { Recommend } from "./pages/recommend/index";
import Roulette from "./pages/recommend/roulette";
import { TodoList } from "./pages/TodoList";
import { Calendar } from "./pages/calendar";

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
          <Route path="/recommend/" element={<Recommend />} />
          <Route path="/recommend/roulette" element={<Roulette />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
