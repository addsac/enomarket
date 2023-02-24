import Link from "next/link";
import IconLoading from "../../public/icons/icon-loading.svg";

export default function ButtonPrimary({ text, href, size, handleClick, loading = false }) {
  return (
    <>
      { href && (
        <Link 
          href={href} 
          className={`
            button-primary font-family-montserrat tracking-wider
            ${size == 'lg' ? 'min-h-[64px] lg:min-h-[80px]' : ''}
          `}
        >
          { text }
        </Link>
      )}

      { !href && 
        <button 
          onClick={handleClick}
          loading={loading}
          className={`
            font-family-montserrat tracking-wider
            ${loading ? 'button-primary-loading' : 'button-primary'}
            ${size == 'lg' ? 'min-h-[64px] lg:min-h-[80px]' : ''}
          `}
        >
          {loading ? (
            <div className="flex-center">
              <span className="animate-spin">
                <IconLoading />
              </span>
            </div>
          ) : (
            <>
              { text }
            </>
          )}
      </button>
      }
    </>
  )
}
