import { useState } from "react"
import { datas } from "../data/data"
import { SearchProject } from "./search-project"

export function ProjectPage(){

    //handle filtering search
    let [query, setQuery] = useState('')
    //handle filtering list
    let [selectDropdown, setSelectDropdown] = useState('')
    let filteredDatas = datas.filter(
        item => {
            return(
                item.nama.toLowerCase().includes(query.toLocaleLowerCase())||
                item.stack.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
        }
    )

    return (
        <section className=" bg-white h-full w-full min-h-[852px] flex max-auto justify-center xl:justify-center" id="projectpage">
            <div className="justify-center min-h-[852px] h-full w-full">
                <SearchProject query={query} onChangeQuery={myQuery => {setQuery(myQuery)}} selectDropdown={selectDropdown} onChangeDropdown={dropdown => setSelectDropdown(dropdown)}/>
                <div className="m-5 mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto">
                    {filteredDatas.length === 0?(
                        <div className="flex justify-center font-bold font-blue-900">
                            <p>No Project Available</p>
                        </div>
                    ): (
                    filteredDatas.map((data, index)=> (
                    <div key={index} className="overflow-hidden shadow-xl rounded-[20px] max-w-md max-h-15 m-5 xl:justify-center font-['Poppins']">
                        <img className="w-full h-[200px] object-cover" src={data.pictures} alt="Project Cover"/>
                        <div className="px-6 py-4">
                            <div className="mb-2 text-blue-950"><h1><strong>{data.nama}</strong></h1></div>
                            <p className="text-black text-xs text-opacity-40">{data.deskripsi}</p>
                            <p className="text-black text-xs text-opacity-40">Tech Stack: {data.stack}</p>
                        </div>
                        <div className="px-6 pt-4 pb-6">
                            <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded text-xs">
                                <a href={data.link} target="_blank" rel="noopener noreferrer">Visit</a>
                            </button>
                        </div>
                    </div>
                    )))}
                </div>
            </div>
        </section>

    )
}