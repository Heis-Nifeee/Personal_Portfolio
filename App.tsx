import React, { Suspense, lazy } from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    const Home = lazy(() => import('./src/pages/Home.tsx'));
    const NotFound = lazy(() => import('./src/pages/NotFound.tsx'));

    const App: React.FC = () => {
      return (
        <Theme appearance="dark" radius="large" scaling="100%">
          <Router>
            <Suspense fallback={
              <div className="min-h-screen bg-[#0a0e17] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
              </div>
            }>
              <main className="min-h-screen font-sans">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  theme="dark"
                />
              </main>
            </Suspense>
          </Router>
        </Theme>
      );
    }

    export default App;