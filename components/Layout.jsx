export default function Layout({ children }) {
  return (
    <div className='w-full grid grid-cols-12 gap-x-[17px] md:gap-x-6 px-6 md:px-16'>
        { children }
    </div>
  )
}
