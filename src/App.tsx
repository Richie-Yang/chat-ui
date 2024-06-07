import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import LoginForm from "./components/loginForm/LoginForm";
import SignupForm from "./components/singupForm/SignupForm";
import store from "./store";
import UserList from "./components/userList/UserList";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </Router>
    </Provider>
  );
}
