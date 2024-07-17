
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Accueil, Home, Produit } from './user/Pages';
import SiteLyout from './layout/SiteLayout';
import AdminGestionProduit from './admin/AdminGestionProduit';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <SiteLyout/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },{
          path:"/user",
          element:<Accueil/>
        },{
          path:"/produit",
          element:<Produit/>
        }
      ]
    },{
      path:"/admin",
      element:<AdminGestionProduit/>
    }
    
  ])
    //
  return (
    <>
 <RouterProvider router={router}></RouterProvider>
 
    </>
  );
}

export default App;
