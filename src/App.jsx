import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingAnimation from './components/loading animation/LoadingAnimation';
import Layout from './layouts/Layout';
import ThemeProvider from "./theme";




const LandingPg = lazy(() => import("./pages/LandingPg"));
const CustopmerSignup = lazy(() => import("./pages/customer/CustopmerSignup"));
const CustomerCatlogue = lazy(() => import("./pages/customer/CustomerCatlogue"));
const CustomerHome = lazy(() => import("./pages/customer/CustomerHome.jsx"));
const PosTerminal = lazy(() => import("./pages/PosTerminal"));
const Tracking = lazy(() => import("./pages/Tracking"));
const Communication = lazy(() => import("./pages/communication"));
const Loyalty = lazy(() => import("./pages/Loyalty"));
const Login = lazy(() => import("./pages/Login"));
const MerchantSignup = lazy(() => import("./pages/merchant/MerchSignup.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));




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
           <Route path="/sign-in" element={<SuspenseWrapper><Login /></SuspenseWrapper>} />

            <Route path="/customer-signup" element={<SuspenseWrapper><CustopmerSignup /></SuspenseWrapper>} />
            <Route path="/merchant-signup" element={<SuspenseWrapper><MerchantSignup /></SuspenseWrapper>} />

          <Route element={<Layout />}>
            <Route path="/" element={<SuspenseWrapper><LandingPg /></SuspenseWrapper>} />
            <Route path="/customer-catlogue" element={<SuspenseWrapper><CustomerCatlogue /></SuspenseWrapper>} />
            <Route path="/customer-home" element={<SuspenseWrapper><CustomerHome /></SuspenseWrapper>} />
            <Route path="/beet-pos" element={<SuspenseWrapper><PosTerminal /></SuspenseWrapper>} />
            <Route path="/beet-tracking" element={<SuspenseWrapper><Tracking /></SuspenseWrapper>} />
            <Route path="/beet-communication" element={<SuspenseWrapper><Communication/></SuspenseWrapper>} />
            <Route path="/beet-loyalty" element={<SuspenseWrapper><Loyalty/></SuspenseWrapper>} />
            <Route path="/aboutus" element={<SuspenseWrapper><AboutUs/></SuspenseWrapper>} />


           



          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
