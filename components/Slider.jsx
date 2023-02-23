import Layout from "./Layout";

export default function Slider() {
  return (
    <div className='relative w-screen h-[calc(100vh-40px)]'>
        {/* gradient */}
        <div className="absolute gradient-left w-[500px] h-full"></div>

        <Layout>
          <div className="col-span-12 flex flex-col justify-end h-full w-full z-10">
            <p> Birre </p>
            <p> Le Migliori Birre da tutta Italia </p>
            <p> Birre </p>
          </div>
        </Layout>
    </div>
  )
}
