import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { ChatPage, LoginPage, SignPage, UserListPage } from "./pages";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignPage />} />
          <Route path="/user-list" element={<UserListPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}
