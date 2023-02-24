import Link from "next/link";

export default function ButtonPrimary({ text, href }) {
  return (
    <>
      { href && (
        <Link href={href} className='button-primary font-family-montserrat tracking-wider'>
          { text }
        </Link>
      )}

      { !href && 
        <button className='button-primary font-family-montserrat tracking-wider'>
          { text }
      </button>
      }
    </>
  )
}
