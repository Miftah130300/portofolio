import { useEffect } from "react"

export function ShowAlert ({openAlert, closeAlert}){
    //if apenAlert is true, the alert is open
    useEffect(()=>{
        if(openAlert){
        const timeAlertId = setTimeout(()=>{
            closeAlert()
        }, 2000)

        return()=>{
            clearTimeout(timeAlertId)
        }
        }
    }, [openAlert, closeAlert])
    if(!openAlert) return null
    return(
        <div class="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 mt-2 rounded fixed right-[34%]" role="alert">
          <strong class="font-bold">Congratulations!</strong>
            <span class="block sm:inline"> Your message was succesfully sent.</span>
        </div>
    )
}