import { Suspense, lazy, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoading from './components/globals/PageLoading';
import ProtectectedAuth from './components/ProtectectedAuth';
import { store, persistor } from './store/store';
import firstRenderingLocsAndCatsObj from './utils/localStorage/firstRenderingLocsAndCatsObj';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const ForgetPassword = lazy(() => import('./pages/ForgetPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const NewAd = lazy(() => import('./pages/NewAd'));
const Single = lazy(() => import('./pages/Single'));
const Account = lazy(() => import('./pages/user/Account'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  useEffect(() => {
    firstRenderingLocsAndCatsObj();
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename='/Advertising-react'>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/s/iran' element={<Home />} />
                <Route
                  path='/register'
                  element={
                    <ProtectectedAuth path='dashboard'>
                      <Register />
                    </ProtectectedAuth>
                  }
                />
                <Route
                  path='/login'
                  element={
                    <ProtectectedAuth path='dashboard'>
                      <Login />
                    </ProtectectedAuth>
                  }
                />
                <Route path='/forgetPassword' element={<ForgetPassword />} />
                <Route
                  path='/resetPassword/:token'
                  element={<ResetPassword />}
                />
                <Route path='/s/iran?cities=:location' element={<Home />} />
                <Route
                  path='/s/iran/:category?cities=:locations'
                  element={<Home />}
                />
                <Route path='/s/iran/:category' element={<Home />} />
                <Route path='/s/iran/:category/:brands' element={<Home />} />
                <Route
                  path='/s/iran/:category/:brands/:model'
                  element={<Home />}
                />
                <Route
                  path='/newAd'
                  element={
                    <ProtectectedAuth path={'newAd'}>
                      <NewAd />
                    </ProtectectedAuth>
                  }
                />
                <Route path='/v/:id/:title' element={<Single />} />
                <Route
                  path='/dashboard/messages'
                  element={
                    <ProtectectedAuth>
                      <Account />
                    </ProtectectedAuth>
                  }
                />
                <Route
                  path='/dashboard/messages/:adId'
                  element={
                    <ProtectectedAuth>
                      <Account />
                    </ProtectectedAuth>
                  }
                />
                <Route
                  path='/dashboard'
                  element={
                    <ProtectectedAuth>
                      <Account />
                    </ProtectectedAuth>
                  }
                />
                <Route
                  path='/dashboard/myProfile'
                  element={
                    <ProtectectedAuth>
                      <Account />
                    </ProtectectedAuth>
                  }
                />
                <Route
                  path='/dashboard/myAds'
                  element={
                    <ProtectectedAuth>
                      <Account />
                    </ProtectectedAuth>
                  }
                />
                <Route
                  path='/dashboard/mySavedAds'
                  element={
                    <ProtectectedAuth>
                      <Account />
                    </ProtectectedAuth>
                  }
                />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
