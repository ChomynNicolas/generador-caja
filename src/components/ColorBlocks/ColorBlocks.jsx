import React from 'react'



const ColorBlocks =(props)=>{

    return(
        <>
        <div className='container'>
        {props.ponerLosBloques.map((bloque,index)=>{
            return(
                <div style={{backgroundColor: `${bloque.color}`,
                            width: bloque.tamaño+"px",
                            height: bloque.tamaño+"px"}} key={index}>

                </div>
            )

        })}
        </div>
        
        </>
    )


}


export default ColorBlocks