export function SearchProject({query, onChangeQuery, selectDropdown, onChangeDropdown}){
    return(
        <div className="grid justify-center">
            <h1 className="text-blue-950 font-bold font-['Poppins'] text-[20px] xl:text-[30px] mt-[50px] m-5 sm:justify-center mx-auto">What I have done with code</h1>
            <div className="grid xl:flex max-w-[350px] md:max-w-[600px] mt-[67px] justify-center xl:justify-center mx-auto w-full">
                <input className="w-full bg-zinc-300 rounded-[10px] mr-5 h-11 p-5" type="text" placeholder='Search for project..' value={query} onChange={event=> onChangeQuery(event.target.value)}></input>
            </div>
        </div>
    )
}