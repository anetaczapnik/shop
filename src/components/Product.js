import Button from './Button'

const Product = ({productName, productImgUrl}) => {
    return (
        <div>
            <h2>{productName}</h2>
            <img src={productImgUrl} alt="gg"/>
            <p>Description</p>
            <Button/>
        </div>
    )
}

export default Product;