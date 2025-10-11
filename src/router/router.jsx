
import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import About from "../pages/About";
import Contact from "../Pages/Contact";
import Collection from "../Pages/Collection";
import Orders from "../Pages/Orders";
import Product from "../Pages/Product";
import PlaceOrders from "../Pages/PlaceOrders";
import Login from "../Pages/Login";

export const router = createBrowserRouter([

    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"cart",
                element:<Cart/>
            }
            ,
            {
                path:"about",
                element:<About/>
            }
            ,
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"collection",
                element:<Collection/>
            },
            {
                path:"orders",
                element:<Orders/>
            }
            ,{
                path:"product",
                element:<Product/>
            },
            {
                path:"placeOrder",
                element:<PlaceOrders/>
            },
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
])