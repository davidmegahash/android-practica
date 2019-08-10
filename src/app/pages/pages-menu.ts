import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/pages/layout/infinite-list',
    home: true,
  },
  {
    title: 'Mis compras',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
  },
  /*
  {
    title: 'Certificados',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  */
  {
    title: 'ACADEMIA',
    group: true,
  },
  {
    title: 'Habitación',
    icon: 'layout-outline',
    children: [
      {
        title: 'Cantantes',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Musicos',
        link: '/pages/layout/list',
      },
      {
        title: 'Compositores',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  /*
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Tutores',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  */
  {
    title: 'Clases en vivo',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Calendario',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Tutores',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Generos',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Por calificación',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Mas',
    icon: 'browser-outline',
    children: [
      {
        title: 'Acerca de ADA',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Quienes somos',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Donde estamos',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Equipo',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Convenios',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Tienda online',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Catalogo',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Ofertas',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Mi pedido',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Rastreo de pedido',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'facturación',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Sedes',
    icon: 'map-outline',
    children: [
      {
        title: 'Todas las sedes',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Sedes cercanas',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Tutores',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Busqueda',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Mi progreso',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Mi nivel',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Progreso',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Cursos realizados',
        link: '/pages/charts/d3',
      },
    ],
  },
  /*
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  */

  {
    title: 'Miscelanea',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Autenticación',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
