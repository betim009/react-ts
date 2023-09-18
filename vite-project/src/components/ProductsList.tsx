function ProductsList({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Lista de produtos</h1>
            <ul className="products-list">
                {children}
            </ul>
        </>
    )
}

export default ProductsList;