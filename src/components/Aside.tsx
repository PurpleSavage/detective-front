import { useState,FormEvent } from "react"
import { objResponse } from "../definitions/InterfacesAndTypes"
//import React, { Dispatch, SetStateAction } from 'react'
interface AsideProps{
    seeMetaData:boolean,
    response:objResponse
    sendUrl:(url:string)=>void
    //setSeeMetaData: Dispatch<SetStateAction<boolean>>
}
const Aside:React.FC<AsideProps>= ({seeMetaData,sendUrl,response}) => {
    const [data,setData]=useState("")
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        sendUrl(data)
    }
  return (
    <div className="w-full md:w-1/4 space-y-2 rounded-lg h-[300px] p-2 
    shadow-2xl border-[1px] border-slate-200/50  "
    >
        <form className=" space-y-4 p-2 " onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="text_url" className="text-slate-200 text-lg">Link de la página</label>
                <input 
                    type="text" id="text_url" 
                    className="h-[40px] bg-transparent border-[1px] text-white border-slate-200/50 p-2 w-3/4 rounded-md" 
                    placeholder="wwww.exaple.com/...."
                    onChange={(e)=>setData(e.target.value)}
                />
            </div>
            <input 
                type="submit" value="Investigar" 
                className="px-3 py-1 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors cursor-pointer "
            />
        </form>
        {
            seeMetaData ? 
            <section className="space-y-2  p-2">
                <h3 className="text-white">Metadata</h3>
                <p className="text-white">lengauje:{response.associated_data.language} </p>
                <p className="text-white">Nombre:{response.associated_data.title} </p>
            </section>
            : 
            <p className="text-slate-700 p-2">
                En esta zona se apreciarán algunos metadatos de la página que estás buscando
            </p>
        }
        
        
    </div>
  )
}

export default Aside