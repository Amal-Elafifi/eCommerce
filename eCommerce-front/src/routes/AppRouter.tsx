import  {Suspense, lazy}  from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// layouts
const MainLayout = lazy(() => import('@layouts/mainLayout/MainLayout'));
const ProfileLayout = lazy(() => import('@layouts/profileLayout/ProfileLayout'));
// pages
const Home = lazy(() => import('@pages/Home'));
const Wishlist = lazy(() => import('@pages/Wishlist'));
const Cart = lazy(() => import('@pages/Cart'));
const Categories = lazy(() => import('@pages/Categories'));
const Products = lazy(() => import( '@pages/Products'));
const AboutUs = lazy(() => import('@pages/AboutUs'));
const Login = lazy(() => import('@pages/Login'));
const Register = lazy(() => import('@pages/Register'));
const Account = lazy(() => import('@pages/Account'));
const Orders = lazy(() => import('@pages/Orders'));
// error
 import Error from '@pages/Error';
//  components
import {PageSuspenseFallback} from "@components/feedback/index";
import { LottieHandler } from '@pages/index';
import ProtectedRoute from '@components/Auth/ProtectedRoute';


const router =createBrowserRouter([
    {
        path: "/",
        element: 
        <Suspense fallback={
          <div style={{marginTop: "10%"}}>
            <LottieHandler type="mainloader" message="loading ... please wait"/>
          </div>
        }>
          <MainLayout/>,
        </Suspense>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element:
                <PageSuspenseFallback>
                  <Home/>
                </PageSuspenseFallback>
            },
            { 
              path: "/cart",
              element: 
              <PageSuspenseFallback>
                <Cart/>
                </PageSuspenseFallback>
            },
            { 
              path: "/wishlist",
              element:
              <ProtectedRoute>
                <PageSuspenseFallback>
                  <Wishlist/>
                </PageSuspenseFallback>
              </ProtectedRoute>
            },
            {
                path: "categories",
                element: 
                <PageSuspenseFallback>
                  <Categories/>,
                  </PageSuspenseFallback>
                },
            {
                path: "categories/products/:prefix",
                element:
                <PageSuspenseFallback>
                  <Products/>,
                </PageSuspenseFallback>
                  ,
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
              <PageSuspenseFallback>
                <AboutUs/>,
              </PageSuspenseFallback>
              
            },
            {
              path: "login",
              element:
              <PageSuspenseFallback>
                <Login/>,
              </PageSuspenseFallback>
            },
            {
              path: "register",
              element:
              <PageSuspenseFallback>
                <Register/>,
              </PageSuspenseFallback>
            },
            {
              path: "profile",
              element:
              <ProtectedRoute>
                <PageSuspenseFallback>
                  <ProfileLayout/>,
                </PageSuspenseFallback>
              </ProtectedRoute>,

              children: [
                {
                  index: true,
                  element: 
                    <PageSuspenseFallback>
                        <Account/>
                    </PageSuspenseFallback>
                },
                {
                  index: true,
                  path:"orders",
                  element: 
                    <PageSuspenseFallback>
                        <Orders/>
                    </PageSuspenseFallback>
                }
            ]
            }

        ]
    }
])


const AppRouter = () => {
  return (<RouterProvider router={router}/>)
}

export default AppRouter;