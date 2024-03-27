import Aside from "./components/Aside"
import Main from "./components/Main"
import { fetchDataScrapping} from "./data/fetchData"
import { useState } from "react"
import Loader from "./components/Loader"
function App() {
  const[seeMetaData,setSeeMetaData]=useState(false)
  const [loader,setLoader]=useState(false)
  const [response,setResponse]=useState({
    associated_data:{
      language:"",
      title:""
    },
    content:"",
    h1:""
  })
  const sendUrl=async(url:string)=>{
    if(!url.length) return 
    setLoader(true)
    try {
      const response =await fetchDataScrapping (url)
      setResponse(response)
      setSeeMetaData(true)
    } catch (error) {
      console.log(error)
    }finally{
      setLoader(false)
    }
  }
  return (
    <div className=" min-h-screen flex md:flex-row flex-col items-center justify-center gap-2 p-2
      bg-black"
    >
      <Aside
        seeMetaData={seeMetaData}
        sendUrl={sendUrl}
        response={response}
      />
      <Main response={response}/>
      {loader && <Loader/>}
    </div>
  )
}

export default App
