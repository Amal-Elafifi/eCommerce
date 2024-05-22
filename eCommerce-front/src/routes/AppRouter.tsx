import { MainLayout } from '@layouts/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';




const router =createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "categories",
                element: <Categories/>,
            },
            {
                path: "categories/products/:prefix",
                element: <Products/>,
                loader: async({params}) => {
                  if( typeof params.prefix !== "string" ||  !/^[a-z]+$/i.test(params.prefix)
                    ){
                      throw new Response(
                        "Bad Response",
                        {
                          statusText: "Category not found",
                          status: 400
                        }
                      )
                    }
                  return (true)
                }
            },
            {
              path: "about-us",
              element: <AboutUs/>,
            },
            {
              path: "login",
              element: <Login/>,
            },
            {
              path: "register",
              element: <Register/>,
            }

        ]
    }
])


const AppRouter = () => {
  return (<RouterProvider router={router}/>)
}

export default AppRouter;