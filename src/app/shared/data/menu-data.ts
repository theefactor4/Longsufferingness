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

  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'',
    link:'',
    sub_menu:[
      {title:''},
      {title:''},
      {title:''},
      {title:''},
      {title:''},
    ]
  },
  {
    id:2,
    title:'',
    link:'',
  },
  {
    id:3,
    title:'',
    link:'',
    sub_menu:[
      {title:'',link:''},
      {title:'',link:''},
    ]
  },
  {
    id:4,
    title:'',
    link:'#',
    sub_menu:[
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'',link:''},
      {title:'404 Page',link:'/not-found'},
    ]
  },
  {
    id:5,
    title:'',
    link:'',
    sub_menu:[
      {title:'',link:''},
      {title:'',link:''}
    ]
  },
  {
    id:6,
    title:'',
    link:'',
  },
]

export default menu_data;
