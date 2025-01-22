import { ITeam } from "../types/team-d-t";


const team_data:ITeam[] = [
  {
    id:1,
    img:'/assets/img/team/team01.png',
    title:'Shakh Danial',
    subtitle:'Blockchain Expert'
  },
  {
    id:2,
    img:'/assets/img/team/team02.png',
    title:'tanu mark',
    subtitle:'Developer'
  },
  {
    id:3,
    img:'/assets/img/team/team03.png',
    title:'Thompson Scot',
    subtitle:'Art Director'
  },
  {
    id:4,
    img:'/assets/img/team/team04.png',
    title:'killer master',
    subtitle:'Crypto Advisor'
  },
]

export default team_data;


export const teamDataTwo:ITeam[] = [
  {
    id: 5,
    img: "/assets/img/team/team3-1.png",
    title: "Moolin Lexo",
    subtitle: "SUPPORT"
  },
  {
    id: 6,
    img: "/assets/img/team/team3-2.png",
    title: "Moolin Lexo",
    subtitle: "SUPPORT"
  },
  {
    id: 4,
    img: "/assets/img/team/team3-3.png",
    title: "Moolin Lexo",
    subtitle: "SUPPORT"
  },
]

export const all_teams = [...team_data, ...teamDataTwo];