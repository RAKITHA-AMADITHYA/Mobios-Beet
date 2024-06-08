import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingAnimation from './components/loading animation/LoadingAnimation';
import Layout from './layouts/Layout';
import ThemeProvider from "./theme";
import LandingPg from './pages/LandingPg';



const CustopmerSignup = lazy(() => import("./pages/customer/CustopmerSignup"));
const CustomerCatlogue = lazy(() => import("./pages/customer/CustomerCatlogue"));










function SuspenseWrapper({ children }) {
  return (
    <Suspense
      fallback={
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <LoadingAnimation type="line-scale" color="#FF4D00" active />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<SuspenseWrapper><LandingPg /></SuspenseWrapper>} />
            <Route path="/customer-signup" element={<SuspenseWrapper><CustopmerSignup /></SuspenseWrapper>} />
            <Route path="/customer-catlogue" element={<SuspenseWrapper><CustomerCatlogue /></SuspenseWrapper>} />
           



          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
