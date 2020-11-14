import bandas from '../Services/dados'

const Lista = () =>{
    return(
        <div>
            {bandas.map(bandas=> 
    
                    <div key={bandas.id}>
                     <h2>{bandas.nome}</h2>
                    <img width={200} src={bandas.imagem}/>
                     <p>{bandas.descricao}</p>
                             
                    </div>
     
                )}
        </div>
    )
}

export default Lista