import  {Suspense, lazy}  from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const MainLayout = lazy(() => import('@layouts/mainLayout/MainLayout'));
const Home = lazy(() => import('@pages/Home'));
const Wishlist = lazy(() => import('@pages/Wishlist'));
const Cart = lazy(() => import('@pages/Cart'));
const Categories = lazy(() => import('@pages/Categories'));
const Products = lazy(() => import( '@pages/Products'));
const AboutUs = lazy(() => import('@pages/AboutUs'));
const Login = lazy(() => import('@pages/Login'));
const Register = lazy(() => import('@pages/Register'));
const Error = lazy(() => import('@pages/Error'));


const router =createBrowserRouter([
    {
        path: "/",
        element: 
        <Suspense fallback="loading ... please wait">
          <MainLayout/>,
        </Suspense>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element:
                <Suspense fallback="loading ... please wait">
                  <Home/>
                </Suspense>
            },
            { 
              path: "/cart",
              element: 
              <Suspense fallback="loading ... please wait">
                <Cart/>
              </Suspense>
            },
            { 
              path: "/wishlist",
              element:
              <Suspense fallback="loading ... please wait">
                <Wishlist/>
              </Suspense>
            },
            {
                path: "categories",
                element: 
                <Suspense fallback="loading ... please wait">
                  <Categories/>,
                </Suspense>
            },
            {
                path: "categories/products/:prefix",
                element:
                <Suspense fallback="loading ... please wait">
                  <Products/>,
                </Suspense>,
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
              element:
              <Suspense fallback="loading ... please wait">
                <AboutUs/>,
              </Suspense>
              
            },
            {
              path: "login",
              element:
              <Suspense fallback="loading ... please wait">
                <Login/>,
              </Suspense>
            },
            {
              path: "register",
              element:
              <Suspense fallback="loading ... please wait">
                <Register/>,
              </Suspense>
            }

        ]
    }
])


const AppRouter = () => {
  return (<RouterProvider router={router}/>)
}

export default AppRouter;