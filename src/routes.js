import React from 'react';



const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const Retailer_list = React.lazy(() => import('./views/shoplist/retailer_list/Retailer_list'));
const ButtonDropdowns = React.lazy(() => import('./views/shoplist/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/shoplist/button-groups/ButtonGroups'));
const Shoplist = React.lazy(() => import('./views/shoplist/shoplist/Shoplist'));

const Complain = React.lazy(() => import('./views/complain/complain/Complain'));
const Internal_complain = React.lazy(() => import('./views/complain/internal_complain/Internal_complain'));


const Attendance = React.lazy(() => import('./views/attendance/attendance/Attendance'));
const External_attendance = React.lazy(() => import('./views/attendance/external_attendance/External_attendance'));
const Internal_attendance = React.lazy(() => import('./views/attendance/internal_attendance/Internal_attendance'));

const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const KYC_User = React.lazy(() => import('./views/icons/kycUser/KYC_User'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Education = React.lazy(() => import('./views/icons/education_details/Education'));
const Graduation = React.lazy(() => import('./views/icons/graduation/Graduation'));
const PANcard = React.lazy(() => import('./views/icons/pancard/PANcard'));
const Vehicle = React.lazy(() => import('./views/icons/vehicle/Vehicle'));
const Employee = React.lazy(() => import('./views/icons/employee_details/Employee'));

const KYC_documents = React.lazy(() => import('./views/icons/kyc_Documents/KYC_documents'));


const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Orders = React.lazy(() => import('./views/notifications/orders/Orders'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },

  { path: '/complain', name: 'Complain', component: Complain, exact: true },
  { path: '/complain/complain', name: 'Complain', component: Complain },
  { path: '/complain/internal_complain', name: 'Internal_complain', component: Internal_complain },

  { path: '/shoplist', name: 'Shoplist', component: Shoplist, exact: true },
  { path: '/shoplist/shoplist', name: 'Shoplist', component: Shoplist },
  { path: '/shoplist/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/shoplist/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/shoplist/retailer_list', name: 'Retailer_list', component: Retailer_list },

  { path: '/attendance', name: 'Attendance', component: Attendance, exact: true },
  { path: '/attendance/attendance', name: 'Attendance', component: Attendance },
  { path: '/attendance/external_attendance', name: 'External_attendance', component: External_attendance },
  { path: '/attendance/internal_attendance', name: 'Internal_attendance', component: Internal_attendance },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/kycUser', name: 'KYC_User', component: KYC_User },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/icons/education_details', name: 'Education', component: Education },
  { path: '/icons/graduation', name: 'Graduation', component: Graduation },
  { path: '/icons/pancard', name: 'PANcard', component: PANcard },
  { path: '/icons/vehicle', name: 'Vehicle', component: Vehicle },
  { path: '/icons/employee_details', name: 'Employee', component: Employee },
  { path: '/icons/kyc_Documents', name: 'KYC_documents', component: KYC_documents },
  
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/orders', name: 'Orders', component: Orders },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
///orders/order_preview