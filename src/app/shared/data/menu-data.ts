export type ISubMenu = {
  title: string;
  link: string;
}
// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'Home',
    link:'#',
    sub_menu:[
      {title:'Home One',link:'/home/home-one'},
      {title:'Home Two',link:'/home/home-two'},
      {title:'Home Three',link:'/home/home-three'},
      {title:'Home Four',link:'/home/home-four'},
      {title:'Home Five',link:'/home/home-five'},
    ]
  },
  {
    id:2,
    title:'ABOUT US',
    link:'/about',
  },
  {
    id:3,
    title:'TOURNAMENT',
    link:'#',
    sub_menu:[
      {title:'TOURNAMENT',link:'/tournament'},
      {title:'TOURNAMENT Single',link:'/tournament-details'},
    ]
  },
  {
    id:4,
    title:'PAGES',
    link:'#',
    sub_menu:[
      {title:'Gaming Shop',link:'/shop'},
      {title:'Shop Details',link:'/shop-details/1'},
      {title:'Cart',link:'/cart'},
      {title:'Checkout',link:'/checkout'},
      {title:'Our Services',link:'/services'},
      {title:'Services Details',link:'/service-details'},
      {title:'Player Details',link:'/team-details/1'},
      {title:'Login',link:'/login'},
      {title:'Register',link:'/register'},
      {title:'Reset Password',link:'/reset-password'},
      {title:'404 Page',link:'/not-found'},
    ]
  },
  {
    id:5,
    title:'News',
    link:'#',
    sub_menu:[
      {title:'Our Blog',link:'/blog'},
      {title:'Blog Details',link:'/blog-details/1'}
    ]
  },
  {
    id:6,
    title:'CONTACT',
    link:'/contact',
  },
]

export default menu_data;