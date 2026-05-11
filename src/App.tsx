/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Route, Switch } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CatalogProvider } from "@/components/CatalogModal";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <CatalogProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/category/:id" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
            <Route>
               <div className="flex items-center justify-center min-h-[60vh]">
                 <h1 className="text-4xl font-display text-white">404 - Page Not Found</h1>
               </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </CatalogProvider>
  );
}


