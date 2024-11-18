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
import Dias from '../asset/diaspartners.png'
import Rumi from "../asset/rumi.png"

const datas = [
        {
        nama: "Rumi Properti",
        status: "In development",
        deskripsi: "A property agency service that helps you find, buy, or rent the best properties with ease and reliability.",
        stack: "Nextjs, Strapi, TailwindCSS",
        link: 'https://rumiproperti.com',
        linkGithub: ' https://github.com/Miftah130300/portofolio.git',
        pictures: Rumi
    },
    {
        nama: "Dias & Partners Web Profile",
        status: "In development",
        deskripsi: "A web profile that is showcasing projects of creative agency, Dias & Partners.",
        stack: "Nextjs, TailwindCSS",
        link: 'https://dias-partners.vercel.app/',
        linkGithub: 'https://github.com/Miftah130300/dias-partners',
        pictures: Dias
    },
    {
        nama: "Ksatiara web profile",
        status: "In development",
        deskripsi: "A web profile that is showcasing moments and dreams of Rumah Kepemimpinan awardee.",
        stack: "Nextjs, TailwindCSS",
        link: 'https://ksatiara11.netlify.app/',
        linkGithub: 'https://github.com/Miftah130300/web-ksatiara',
        pictures: Ksatiara
    },
    {
        nama: "Minisya Laundry",
        status: "Done",
        deskripsi: "A landing page website for laundry.",
        stack: "Nextjs, TailwindCSS",
        link: 'https://lovely-youtiao-f39bab.netlify.app/',
        linkGithub: 'https://github.com/Miftah130300/minisya-laundry',
        pictures: Minisya
    },
    {
        nama: "My Note",
        status: "Done",
        deskripsi: "A platform that help people create their daily notes",
        stack: "ReactJs",
        link: 'https://gregarious-cheesecake-f72f2d.netlify.app/',
        linkGithub: 'https://github.com/Miftah130300/NoteApps-ReactJs',
        pictures: mynote
    }, 
        {
        nama: "FindResto",
        status: "Done",
        deskripsi: "A web apps to find recommendation restaurant",
        stack: "HTML, CSS, JavaScript",
        linkGithub: 'https://github.com/Miftah130300/RestaurantCatalogue-PWA-Dicoding',
        pictures: findresto
    },
        {
        nama: "MyPortofolio",
        status: "Done",
        deskripsi: "A web apps to show my web development journey",
        stack: "ReactJs, TailwindCSS",
        linkGithub: 'https://github.com/Miftah130300/portofolio',
        pictures: portofolio
    },
        {
        nama: "Bookshelf Apps",
        status: "Done",
        deskripsi: "An apps to help people write their reading-lists. This project is built in order to complete Dicoding assignment.",
        stack: "HTML, CSS, JavaScript",
        link: 'https://brilliant-belekoy-ba09ad.netlify.app/',
        linkGithub: 'https://github.com/MuhammadAlfitrianAnanda/ReHob?tab=readme-ov-file',
        pictures: bookshelf
    },
        {
        nama: "ReHob: Rekomendasi Hobi",
        status: "Done",
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