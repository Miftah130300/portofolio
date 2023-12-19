import mynote from '../asset/mynote.png'
import findresto from '../asset/findresto.png'
import portofolio from '../asset/portofolio.png'
import bookshelf from '../asset/bookshelf.png'
import Github from '../asset/github.png'
import Instagram from '../asset/instagram.png'
import Linkedin from '../asset/linkedin.png'
import Blackgithub from '../asset/github-black.png'
import BlackInstagram from '../asset/instagram-black.png'
import BlackLinkedin from '../asset/linkedin-black.png'

const datas = [
    {
        nama: "My Note",
        deskripsi: "A platform that help people create their daily notes",
        stack: "ReactJs",
        link: 'https://gregarious-cheesecake-f72f2d.netlify.app/',
        pictures: mynote
    }, 
        {
        nama: "FindResto",
        deskripsi: "A web apps to find recommendation restaurant",
        stack: "HTML, CSS, JavaScript",
        pictures: findresto
    },
        {
        nama: "MyPortofolio",
        deskripsi: "A web apps to show my web development journey",
        stack: "ReactJs, TailwindCSS",
        pictures: portofolio
    },
        {
        nama: "Bookshelf Apps",
        deskripsi: "An apps to help people write their reading-lists. This project is built in order to complete Dicoding assignment.",
        stack: "HTML, CSS, JavaScript",
        link: 'https://brilliant-belekoy-ba09ad.netlify.app/',
        pictures: bookshelf
    }


]

// data.js

const icon = [
  {
    normal: Linkedin,
    black: BlackLinkedin,
    link: "https://www.linkedin.com/in/miftahfauzy",
    alt:'linkedin logo'
  },
  {
    normal: Github,
    black: Blackgithub,
    link: "https://github.com/Miftah130300",
    alt:'github logo'
  },
  {
    normal: Instagram,
    black: BlackInstagram,
    link: "https://www.instagram.com/miftaahzy/",
    alt:'instagram logo'
  }
]


export {datas, icon}