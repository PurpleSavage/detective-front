import style from '../CSS/styls.module.css'

import { MianProps } from '../definitions/InterfacesAndTypes'
const Main:React.FC<MianProps> = ({response}) => {
  return (
    <div className="w-full rounded-lg min-h-[300px] max-h-[400px] 
      overflow-y-auto md:w-2/3 shadow-2xl  border-[1px] border-slate-200/50 space-y-4 p-2 "
    >
        <h1 className={`${style.degraded} text-center text-6xl`}>Detective Bot</h1>
        <article>
          {
            response.content.length? 
              <p className='text-white p-2'>{response.content}</p>: 
              <p className='text-2xl m-auto w-[680px] mt-10 text-slate-700'>
                Aún no hay nada para mostrar en esta sección, ingrese una url, si no se 
                muestran resultados puede que la página ingresada no nos permita extraer sus datos
              </p>
          }
        </article>
    </div>
  )
}

export default Main