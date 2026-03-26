import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Dashboard2 = React.lazy(() => import('./views/dashboard2/Dashboard2'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// Dashboard

// Category
const CategoryAdd = React.lazy(() => import('./views/categories/CategoryAdd'))
const CategoriesView = React.lazy(() => import('./views/categories/CategoriesView'))
const CategoryEdit = React.lazy(() => import('./views/categories/CategoryEdit'))

// Product
const ProductAdd = React.lazy(() => import('./views/products/ProductAdd'))
const ProductsView = React.lazy(() => import('./views/products/ProductsView'))
const ProductEdit = React.lazy(() => import('./views/products/ProductEdit'))

// Inventory
const InventoryView = React.lazy(() => import('./views/inventory/InventoryView'))
const InventoryEdit = React.lazy(() => import('./views/inventory/InventoryEdit'))

// Offer
const OfferAdd = React.lazy(() => import('./views/offers/OfferAdd'))
const OffersView = React.lazy(() => import('./views/offers/OffersView'))
const OfferEdit = React.lazy(() => import('./views/offers/OfferEdit'))

// Order
const OrdersView = React.lazy(() => import('./views/orders/OrdersView'))

// Customer
const CustomerAdd = React.lazy(() => import('./views/customers/CustomerAdd'))
const CustomersAllView = React.lazy(() => import('./views/customers/CustomersAllView'))
const CustomersActiveView = React.lazy(() => import('./views/customers/CustomersActiveView'))
const CustomersBlockedView = React.lazy(() => import('./views/customers/CustomersBlockedView'))
const CustomerEdit = React.lazy(() => import('./views/customers/CustomerEdit'))

const ReviewsView = React.lazy(() => import('./views/reviews/ReviewsView'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard2', name: 'Dashboard', element: Dashboard2 },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  // Category
  { path: '/categories/add', name: 'Add New Category', element: CategoryAdd },
  { path: '/categories/view', name: 'View Categories', element: CategoriesView },
  { path: '/categories/edit/:id', name: 'Edit Category', element: CategoryEdit },

  // Product
  { path: '/products/add', name: 'Add New Product', element: ProductAdd },
  { path: '/products/view', name: 'View Products', element: ProductsView },
  { path: '/products/edit/:id', name: 'Edit Product', element: ProductEdit },

  // Inventory
  { path: '/inventory/view', name: 'View Inventory', element: InventoryView },
  { path: '/inventory/edit/:id', name: 'Edit Inventory', element: InventoryEdit },

  // Offer
  { path: '/offers/add', name: 'Add an Offer', element: OfferAdd },
  { path: '/offers/view', name: 'View Offers', element: OffersView },
  { path: '/offers/edit/:id', name: 'Change the Offer', element: OfferEdit },

  { path: '/orders/view', name: 'View Orders', element: OrdersView },

  { path: '/customers/add', name: 'Add a Customer', element: CustomerAdd },
  { path: '/customers/view', name: 'View Customers', element: CustomersAllView },
  { path: '/customers/view/active', name: 'View Active Customers', element: CustomersActiveView },
  { path: '/customers/edit/:id', name: 'Edit Customer Details', element: CustomerEdit },
  {
    path: '/customers/view/blocked',
    name: 'View Blocked Customers',
    element: CustomersBlockedView,
  },
  { path: '/customers/edit', name: 'Edit Customer Details', element: CustomerEdit },

  { path: '/reviews/view', name: 'View Reviews', element: ReviewsView },
]

export default routes
