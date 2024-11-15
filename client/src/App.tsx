import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { lazy, Suspense } from 'react';

const Layout = ({ children }) => {
  // const location = useLocation();
  // const hideNavBarPages = ['/', '/register', '/login', '/forget-password'];
  // const hideFooterPages = ['/user-survey'];
  // const isDynamicRoute = (path) => /^\/user-survey\/.+$/.test(path);
  // const shouldHideNavBar = hideNavBarPages.includes(location.pathname) || isDynamicRoute(location.pathname);
  // const shouldHideFooter = hideFooterPages.includes(location.pathname) || isDynamicRoute(location.pathname);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", maxWidth: "100vw" }}>
      {/* {!shouldHideNavBar && <MainNavBar />} */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
     {/* {!shouldHideFooter && <Footer />}   */}
       </div>
  );
};



const PhdForm = lazy(() => import('./pages/PhdForm'));


const App = () => {

  // Function to check if the user is authenticated
  // const isAuthenticated = () => {
  //   return !!localStorage.getItem('userAccessToken'); // Change this according to your authentication mechanism
  // };

  // const isSuperAdmin = () => {
  //   console.log(JSON.parse(localStorage.getItem('userAccessToken')).isSuperAdmin, 'isSuperAdmin in protected routes');
  //   return JSON.parse(localStorage.getItem('userAccessToken')).isSuperAdmin; // Change this according to your authentication mechanism
  // };

  // const SuperAdminProtectedRoute = ({ element, ...rest }) => {
  //   if (isSuperAdmin()) {
  //     return element;
  //   } else {
  //     console.log(isSuperAdmin(), 'isSuperAdmin in FINALSprotected routes');
  //     console.log('User is not Super Admin');
  //     return <Navigate to="/404" />;
  //   }
  // };


  // const ProtectedRoute = ({ element, ...rest }) => {
  //   if (isAuthenticated()) {
  //     console.log('User is authenticated');
  //     return element;
  //   } else {
  //     console.log('User is not authenticated');
  //     return <Navigate to="/login" />;
  //   }
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout> {/* Render Layout component here */}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet /> {/* Render Outlet inside Layout */}
          </Suspense>
        </Layout>
      ),
      children: [
        {
          index: true,
          element: <PhdForm />,
        },
      
        {
          path:"/phdform",
          element:<PhdForm/>
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;