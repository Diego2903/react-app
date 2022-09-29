import { BrowserRouter as Router, Route, NavLink, Routes, Navigate} from 'react-router-dom';
import { RegisterPage, FormikAbstractation, FormikBasicPage, FormikCompoenents, FormikYupPAge, RegisterFormikPage, DynamicForm } from '../03-forms/pages';
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? "nav-active" : ""}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={({ isActive }) => isActive ? "nav-active" : ""}>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? "nav-active" : ""}>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({ isActive }) => isActive ? "nav-active" : ""}>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPAge />} />
          <Route path="/formik-components" element={<FormikCompoenents />} />
          <Route path="/formik-abstraction" element={<FormikAbstractation />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/*" element={<Navigate replace to="/register"/>} />

        </Routes>
      </div>
    </Router>
  );
}