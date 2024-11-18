import { useState } from "react"
import { datas } from "../data/data"
import { SearchProject } from "./search-project"

export function ProjectPage() {
    let [query, setQuery] = useState('')
    let [selectDropdown, setSelectDropdown] = useState('')
    let filteredDatas = datas.filter(
        item => {
            return (
                item.nama.toLowerCase().includes(query.toLocaleLowerCase()) ||
                item.stack.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
        }
    )

    return (
        <section className="bg-white h-full w-full min-h-[852px] flex max-auto justify-center xl:justify-center" id="projectpage">
            <div className="justify-center min-h-[852px] h-full w-full">
                <SearchProject 
                    query={query} 
                    onChangeQuery={myQuery => { setQuery(myQuery) }} 
                    selectDropdown={selectDropdown} 
                    onChangeDropdown={dropdown => setSelectDropdown(dropdown)} 
                />
                <div className="m-5 mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto">
                    {filteredDatas.length === 0 ? (
                        <div className="flex justify-center font-bold text-blue-900">
                            <p>No Project Available</p>
                        </div>
                    ) : (
                        filteredDatas.map((data, index) => (
                            <div key={index} className="relative overflow-hidden shadow-[3px_0px_20px_0px_rgba(0,0,0,0.3)] rounded-[20px] max-w-md max-h-15 m-5 xl:justify-center font-['Poppins']">
                                {data.status === "In development" && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        In Development
                                    </div>
                                )}
                                <img className="w-full h-[200px] object-cover" src={data.pictures} alt="Project Cover" />
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-blue-950">
                                        <h1><strong>{data.nama}</strong></h1>
                                    </div>
                                    <p className="text-black text-xs text-opacity-40">{data.deskripsi}</p>
                                    <p className="text-black text-xs text-opacity-40">Tech Stack: {data.stack}</p>
                                </div>
                                <div className="px-6 pt-4 pb-6 flex flex-row gap-2">
                                    <button className="bg-blue-950 hover:bg-blue-900 text-white w-full h-full max-w-[80px] p-1 rounded-lg text-[12px]">
                                        <a href={data.link} target="_blank" rel="noopener noreferrer">View Page</a>
                                    </button>
                                    <button className="bg-blue-950 hover:bg-blue-900 text-white w-full h-full max-w-[90px] p-1 rounded-lg text-[12px]">
                                        <a href={data.linkGithub} target="_blank" rel="noopener noreferrer">View GitHub</a>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}