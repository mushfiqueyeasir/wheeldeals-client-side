import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/homePage/HomePage";
import ProductPage from "./page/productPage/ProductPage";
import ContactUsPage from "./page/contactUsPage/ContactUsPage";
import JoinPage from "./page/joinPage/JoinPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProductPage from "./page/addProductPage/AddProductPage";
import ProductManagePage from "./page/productManagePage/ProductManagePage";
import CustomersPage from "./page/customersPage/CustomersPage";
import AddCustomerPage from "./page/addCustomerPage/AddCustomerPage";
import Analytics from "./page/analyticsPage/Analytics";
import OrderListPage from "./page/orderListPage/OrderListPage";
import AdminProfilePage from "./page/adminProfilePage/AdminProfilePage";
import CartPage from "./page/cartPage/CartPage";
import ProductEditPage from "./page/productEditPage/ProductEditPage";
import CustomerUpdatePage from "./page/customerUpdatePage/CustomerUpdatePage";
import UserOrderListPage from "./page/userOrderList/UserOrderListPage";
import ProductDetailPageLayout from "./page/productDetailPage/ProductDetailPageLayout";
import UserRouteAuth from "./auth/userRouteAuth";
import AdminRouteAuth from "./auth/adminRouteAUth";
import ErrorPage from "./page/errorPage/ErrorPage";
import EmailPage from "./page/emailPage/EmailPage";
import EmailViewPage from "./page/emailViewPage.js/EmailViewPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPageLayout />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/join" element={<JoinPage />} />

        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/emails" element={<EmailPage />} />
        <Route path="/dashboard/emails/:id" element={<EmailViewPage />} />
        <Route path="/dashboard/product" element={<ProductManagePage />} />
        <Route path="/dashboard/product/:id" element={<ProductEditPage />} />
        <Route path="/dashboard/addProduct" element={<AddProductPage />} />
        <Route path="/dashboard/customers" element={<CustomersPage />} />
        <Route
          path="/dashboard/customers/:id"
          element={<CustomerUpdatePage />}
        />
        <Route path="/dashboard/addCustomer" element={<AddCustomerPage />} />
        <Route path="/dashboard/orderList" element={<OrderListPage />} />
        <Route
          path="/dashboard/admin"
          element={
            <AdminRouteAuth>
              <AdminProfilePage />
            </AdminRouteAuth>
          }
        />

        <Route path="/dashboard/cart" element={<CartPage />} />
        <Route
          path="/dashboard/profile"
          element={
            <UserRouteAuth>
              <AdminProfilePage />
            </UserRouteAuth>
          }
        />
        <Route path="/dashboard/userOrders" element={<UserOrderListPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </AppLayout>
  );
}

export default App;
