import { useEffect, useState } from "react";
import AddBlog from "./AddBlog";
import Blogs from "./Blogs";

const Index = () => {
    const [formData, setFormData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/posts')
            .then((response)=>{
                console.log(response)
                response.json()
                .then((result)=>{
                    console.log(setFormData(result))
                })
            })
        }, [])
    return ( 
        <>
            <AddBlog />
            <Blogs formData={formData}/>
        </>
     );
}
 
export default Index;