import Link from "next/link"

export default function ButtonSecondary({ text, href }) {
    return (
      <>
        { href && (
          <Link href={href} className='button-secondary font-family-montserrat tracking-wider'>
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
  