import React from 'react'

export default function CatFact() {
        const baseUrl='https://catfact.ninja/facts'
   const [items,setItems]=useState([])

    const getFacts=async()=>{
        try{
                let res=await fetch(baseUrl)
      console.log(res);
      let data=await res.json()
      console.log(data.fact);

      setItems(data.facts)
        }
        catch(err){
            console.log('Error while fetching...',err);
            
        }
    
    }


    useEffect(()=>{
        getFacts()
    },[])
 
  return (

    <div>
        {
            <Row>
                {items.map(i=>(
                    <Col>
                    <Link to={`/details`}>
                    <div className='d-flex card m-3 p-3 text-center'>
                       {i.fact}
                    </div>
                    </Link>

                    </Col>
                ))}
            </Row>
        }
    </div>
  )
}

 


