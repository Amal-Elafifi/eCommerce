import styles from "./style.module.css";

type ProductInfoProps = {
  quantity?: number,
  title: string,
  price: number,
  img: string,
  direction?: "row" | "column",
  children?: React.ReactNode,
  style?: React.CSSProperties,

}



const ProductInfo = ({
  quantity,
  title,
  price,
  img,
  direction = "row",
  style,
  children
  }: ProductInfoProps) => {
    console.log(quantity)
  return(
    <div className={`${styles[`product-${direction}`]}`} style={style}>
        <div className={`${styles[`productImg-${direction}`]}`}>
          <img
            src={img}
            alt={title}
          />
        </div>
        <div className={`${styles[`productInfo-${direction}`]}`}>
          <h2 title={title} style={{fontWeight: "bold"}}>{title}</h2>
          <h3>
            <span style={{fontWeight: "bold"}}>
              Unit Price
            </span>
            {price.toFixed(2)}
          </h3>
          {quantity && 
            <h3>
                <span style={{fontWeight: "bold"}}>
                  Total Quantity:
                </span>
                {quantity}
            </h3>}
          {price &&
             <h3>
                <span style={{fontWeight: "bold"}}>
                  Total Price:
                </span>
                {(quantity * price).toFixed(2)} EGP
             </h3>}
          {children}
        </div>
    </div>
    )
}

export default ProductInfo;