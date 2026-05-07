import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import MainApp from "./MainApp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center text-center" dir="rtl">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-orange-600">404</h1>
        <p className="text-gray-500">الصفحة غير موجودة</p>
        <Link href="/" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-colors">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={MainApp} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
