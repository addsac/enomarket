export default function Container({ children, left = true, right = true }) {
  return (
    <div className={`flex flex-col gap-y-[80px] lg:gap-y-[125px] ${left ? 'pl-8 lg:pl-16' : 'pl-0'} ${right ? 'pr-8 lg:pr-16' : 'pr-0'} py-10`}>
        { children }
    </div>
  )
}
