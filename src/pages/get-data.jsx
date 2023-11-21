import Head from 'next/head'

export const getStaticProps = async () => {
    const bekdanKevotkanMalumot =
     await fetch("https://fakestoreapi.com/products");
    const data = await bekdanKevotkanMalumot.json();

    return {
        props: { data: data }
    }
}


const GetData = ({data}) => {
    return (

        <>
            <Head>
                <title>GetData Page</title>
            </Head>
            <div className="parent">
                {data?.map((el) => (
                    <div className="card" key={el.id}>
                        <img src={el.image} alt="" />
                        <h2>{el.title}</h2>
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GetData