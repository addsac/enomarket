import IconChevronLeft from '@/public/icons/chev-left.svg'
import IconChevronRight from '@/public/icons/chev-right.svg'

export default function ButtonChevron({ orientation = '', id }) {
  return (
    <button 
      id={id ?? ''}
      className='w-12 h-12 rounded-full border border-gray-300 hover:border-gray-900 text-gray-900 flex-center'
    >
        {orientation == 'left' && (
          <span className='w-5 h-5 stroke-[1.5]'>
            <IconChevronLeft />
          </span>
        )}
        {orientation == 'right' && (
          <span className='w-5 h-5 stroke-[1.5]'>
            <IconChevronRight />
          </span>
        )}
    </button>
  )
}
