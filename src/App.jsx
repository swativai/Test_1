import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BillPayment from "./pages/BillPayment";
import ClassEvent from "./pages/ClassEvent";
import MySchedule from "./pages/MySchedule";
import FindClasses from "./pages/FindClasses";
import FindEvent from "./pages/FindEvent";
import SideNav from "./components/SideNav";
import HorizontalNav from "./components/HorizontalNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex gap-3">
          <SideNav />
          <div>
            <HorizontalNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/billpayment" element={<BillPayment />} />
              <Route path="/classevent" element={<ClassEvent />} />
              <Route path="/myschedule" element={<MySchedule />} />
              <Route path="/findclasses" element={<FindClasses />} />
              <Route path="/findevent" element={<FindEvent />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
