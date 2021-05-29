import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   }
  // },
  //  {
  //     _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  //  },
  //  {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Colors',
  //   to: '/theme/colors',
  //    icon: 'cil-drop',
  //  },
  //  {
  //    _tag: 'CSidebarNavItem',
  //    name: 'Typography',
  //    to: '/theme/typography',
  //    icon: 'cil-pencil',
  //  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/charts',
    icon: 'cil-home'
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Attendance',
    route: '/attendance',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Attendance',
        to: '/attendance/attendance',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Internal Attendance',
        to: '/attendance/internal_attendance',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'External Attendance',
        to: '/attendance/external_attendance',
      },
     
    
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Collection',
    to: '/base/Tooltips',
    icon: 'cil-chart-pie'
  },
  
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Orders',
  //   to: '/base/navs',
  //   icon: 'cil-people',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Order',
    to: '/notifications/orders',
    icon: 'cil-people',
  },

  
  
  //Complain
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Complain',
    route: '/complain',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Complain',
        to: '/complain/complain',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Internal Complain',
      //   to: '/complain/internal_complain',
      // },
    ],
  },

   {
    _tag: 'CSidebarNavDropdown',
    name: 'Shop List',
    route: '/shoplist',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Shop List',
        to: '/shoplist/shoplist',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'List Of Retailer',
      //   to: '/shoplist/retailer_list',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Buttons groups',
      //   to: '/buttons/button-groups',
      // },
      //  {
      //   _tag: 'CSidebarNavItem',
      //     name: 'Dropdowns',
      //     to: '/shoplist/button-dropdowns',
      //   }
    ],
  },

  
 //KYC List
  {
    _tag: 'CSidebarNavDropdown',
    name: 'KYC Documents List',
    route: '/icons',
    icon: 'cil-people',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'KYC User Details',
        to: '/icons/kycUser',
        
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'KYC Bank Details',
        to: '/icons/brands',
      },
       {
        _tag: 'CSidebarNavItem',
        name: 'KYC Eduaction Details',
       to: '/icons/education_details',
       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'KYC Graduation Details',
       to: '/icons/graduation',
       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Adhar Card Details',
       to: '/icons/kyc_Documents',       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'PAN Card Details',
       to: '/icons/pancard/PANcard',       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Vehicle Details',
       to: '/icons/vehicle',       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Details',
       to: '/icons/employee_details',       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Payment Due Date',
       to: '/icons/coreui-icons',
       
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Product List',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [

      {
        _tag: 'CSidebarNavItem',
        name: 'Produt Details',
        to: '/notifications/modals',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Select Product',
      //   to: '/notifications/alerts',
      // },
      //  {
      //    _tag: 'CSidebarNavItem',
      //    name: 'Toaster',
      //    to: '/notifications/toaster'
      //  }
    ]
  },

//Route List

{
  _tag: 'CSidebarNavDropdown',
  name: 'Route List',
  route: '/base',
  icon: 'cil-puzzle',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Select Customer',
      to: '/base/breadcrumbs',
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Cards',
    //   to: '/base/cards',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Carousel',
    //   to: '/base/carousels',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Collapse',
    //   to: '/base/collapses',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Forms',
    //   to: '/base/forms',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Jumbotron',
    //   to: '/base/jumbotrons',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'List group',
    //   to: '/base/list-groups',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Navs',
    //   to: '/base/navs',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Navbars',
    //   to: '/base/navbars',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Pagination',
    //   to: '/base/paginations',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Popovers',
    //   to: '/base/popovers',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Progress',
    //   to: '/base/progress-bar',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Switches',
    //   to: '/base/switches',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Tables',
    //   to: '/base/tables',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Tabs',
    //   to: '/base/tabs',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Tooltips',
    //   to: '/base/tooltips',
    // },
  ],
},

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Admin Login',
    route: '/pages',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },


  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
]

export default _nav
