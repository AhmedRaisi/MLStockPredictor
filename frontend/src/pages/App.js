import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import RegressionModelPage from './models/RegressionModelPage';
import LSTMModelPage from './models/LSTMModelPage';
import ModelOverview from './ModelOverviewPage';
import ARIMAModelPage from './models/ARIMAModelPage';
import ProphetModelPage from './models/ProphetModelPage';
import EnsembleModelPage from './models/EnsembleModelPage';
import Predictions from './PredictionPage'; 

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/models/regression" element={<RegressionModelPage />} />
          <Route path="/models/lstm" element={<LSTMModelPage />} />
          <Route path="/modeloverviewpage" element={<ModelOverview />} />
          <Route path="/models/arima" element={<ARIMAModelPage />} />
          <Route path="/models/prophet" element={<ProphetModelPage />} />
          <Route path="/models/ensemble" element={<EnsembleModelPage />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
