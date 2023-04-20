import Link from "next/link";
import IconLoading from "../../public/icons/icon-loading.svg";

export default function ButtonPrimary({ text, href, size, white = false, handleClick, loading = 'false', type = null }) {
  return (
    <>
      { href && (
        <Link 
          href={href} 
          className={`
            ${white ? 'button-primary-white' : 'button-primary'}
            font-family-montserrat tracking-wider
            ${size == 'lg' ? 'min-h-[64px] lg:min-h-[80px]' : ''}
            ${size == 'sm' ? '!py-4' : ''}
          `}
        >
          { text }
        </Link>
      )}

      { !href && 
        <button
          type={type}
          onClick={handleClick}
          className={`
            font-family-montserrat tracking-wider
            ${loading == 'true' ? 'button-primary-loading' : 'button-primary'}
            ${size == 'lg' ? 'min-h-[64px] lg:min-h-[80px]' : ''}
            ${size == 'sm' ? '!py-4' : ''}
          `}
          disabled={loading == 'true' ? true : false}
        >
          {loading == 'true' ? (
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
