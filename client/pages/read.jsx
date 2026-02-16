import axios from "axios"
import { usestate } from "react"
const Read = () => {
    const [data,setdata] = usestate([])
    async function getdata(){
        const res = await axios.get('')
    }

    
    return (
        <div className="bg-danger">Read</div>
    )
}

         
export default Read
