
import {useState} from "React"
import {api} from '../services/api.js'


const productos = async () => {
    console.log("asflsafmkfmmfmmmmmmmm")
    // console.log(api.get)

    let productos = await api.get("/verProductos")

    //console.log(productos)
    console.log(productos);

    //return productos;
    
}

const ProductosVer = () => (
    
  <div>
    const [Prods, getProds] = useState("")
    <h1 className="text-3xl font-bold text-slate-800">Productos</h1>
    <p className="mt-4 text-slate-600">adsfsf</p>
  </div>
)



export default productos