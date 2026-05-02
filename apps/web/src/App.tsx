import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import KitsCatalog from './pages/KitsCatalog';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The platform engineering engine is currently rendering dynamic templates and validating best practices. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<KitsCatalog />} />
          <Route path="/generator" element={<Placeholder name="Dynamic Project Generator" />} />
          <Route path="/templates" element={<Placeholder name="Template Component Library" />} />
          <Route path="/cli" element={<Placeholder name="Starter CLI Documentation" />} />
          <Route path="/governance" element={<Placeholder name="Kit Governance & Policy" />} />
          <Route path="/releases" element={<Placeholder name="Template Release History" />} />
          <Route path="/cloud" element={<Placeholder name="Cloud Infrastructure Blueprints" />} />
          <Route path="/docs" element={<Placeholder name="Developer Experience Guides" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
