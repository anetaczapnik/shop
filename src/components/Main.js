import Product from "./Product";
import {shoes} from "../assets/data/data"
import Menu from "./Menu"
const Main = () => {
    return (
        <>
            <main>
                <Menu/>
                {shoes.map(product =>
                    <Product key={product.id} productImgUrl={product.imageLink} productName={product.name}/>
                )}
            </main>
        </>
    )
}

export default Main;