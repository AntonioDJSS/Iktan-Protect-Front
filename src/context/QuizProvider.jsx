import {createContext, useState, useEffect} from "react"
import clienteAxios  from "../config/axios"

const QuizContext= createContext()



export const QuizProvider = ({children}) =>{
    const [quiz, setQuiz] = useState([])

    useEffect(() =>{
        const obtenerPromedioActualizacion = async()=>{
            try{
                //* Los headers sirven para pasar los JSON WEB TOKEN(JWT) para mantener un inicio de sesion 
/*              const token = localStorage.getItem("token")
                if(!token) return

                const config={
                    headers:{
                        "Content-Type": "application/json"   
                    }
                }
 */
                const {data} = await clienteAxios("/encuestas"/* ,config */)
                setQuiz(data)

            }catch(error){
                console.log(error)
            }
        }
        obtenerPromedioActualizacion();
    },[])












    const guardarQuiz = async (quizz) =>{
        try{
            const token = localStorage.getItem("token")
            const config={
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`           
                }
            }
            const {data} = await clienteAxios.post("/encuestas",quizz,config)
            const { createdAt, updatedAt, ...quizAlmacenado }=data
            setQuiz([quizAlmacenado, ...quiz])

        }catch(error){
            console.log(error.response.data.msg)
        }
    }
    return(
        <QuizContext.Provider
            value={{
                quiz,
                guardarQuiz
            }}
        >
            {children}
        </QuizContext.Provider>
    )
}
 
export default QuizContext;