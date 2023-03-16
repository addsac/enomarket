import Link from "next/link"

export default function ButtonSecondary({ text, href, size = 'sm' }) {
    return (
      <>
        { href && (
          <Link 
            href={href} 
            className={
              `button-secondary font-family-montserrat tracking-wider
              ${size == 'lg' ? 'min-h-[64px] lg:min-h-[80px]' : ''}
              ${size == 'sm' ? '!py-4' : ''}
            `}
          >
            { text }
          </Link>
        )}

        { !href && 
          <button className='button-secondary font-family-montserrat tracking-wider'>
              { text }
          </button>
        }
      </>
    )
  }
  