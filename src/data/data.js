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
import ReHob from '../asset/ReHob.png'
import Minisya from '../asset/minisyalaundry.png'
import Ksatiara from '../asset/ksatiara.png'

const datas = [
    {
        nama: "Ksatiara Profile",
        deskripsi: "A web profile of Rumah Kepemimpinan Jakarta batch 11 awardees.",
        stack: "Nextjs, TailwindCSS",
        link: 'https://ksatiara11.netlify.app/',
        linkGithub: 'https://github.com/Miftah130300/web-ksatiara',
        pictures: Ksatiara
    },
    {
        nama: "Minisya Laundry",
        deskripsi: "A landing page website for laundry.",
        stack: "Nextjs, TailwindCSS",
        link: 'https://lovely-youtiao-f39bab.netlify.app/',
        linkGithub: 'https://github.com/Miftah130300/minisya-laundry',
        pictures: Minisya
    },
    {
        nama: "My Note",
        deskripsi: "A platform that help people create their daily notes",
        stack: "ReactJs",
        link: 'https://gregarious-cheesecake-f72f2d.netlify.app/',
        linkGithub: 'https://github.com/Miftah130300/NoteApps-ReactJs',
        pictures: mynote
    }, 
        {
        nama: "FindResto",
        deskripsi: "A web apps to find recommendation restaurant",
        stack: "HTML, CSS, JavaScript",
        linkGithub: 'https://github.com/Miftah130300/RestaurantCatalogue-PWA-Dicoding',
        pictures: findresto
    },
        {
        nama: "MyPortofolio",
        deskripsi: "A web apps to show my web development journey",
        stack: "ReactJs, TailwindCSS",
        linkGithub: 'https://github.com/Miftah130300/portofolio',
        pictures: portofolio
    },
        {
        nama: "Bookshelf Apps",
        deskripsi: "An apps to help people write their reading-lists. This project is built in order to complete Dicoding assignment.",
        stack: "HTML, CSS, JavaScript",
        link: 'https://brilliant-belekoy-ba09ad.netlify.app/',
        linkGithub: 'https://github.com/MuhammadAlfitrianAnanda/ReHob?tab=readme-ov-file',
        pictures: bookshelf
    },
        {
        nama: "ReHob: Rekomendasi Hobi",
        deskripsi: "A website designed to help people find their hobbies and communities, allowing users to interact with others who share similar interests.",
        stack: "HTML, CSS, JavaScript",
        link: 'https://rehob.000webhostapp.com/',
        linkGithub: 'https://github.com/MuhammadAlfitrianAnanda/ReHob?tab=readme-ov-file',
        pictures: ReHob
    },


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
