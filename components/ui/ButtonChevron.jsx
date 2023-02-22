import IconChevronLeft from '@/public/icons/chev-left.svg'
import IconChevronRight from '@/public/icons/chev-right.svg'

export default function ButtonChevron({ orientation = '' }) {
  return (
    <div className='w-12 h-12 rounded-full border border-gray-300 hover:border-gray-900 flex-center'>
        {orientation == 'left' && <IconChevronLeft />}
        {orientation == 'right' && <IconChevronRight />}
    </div>
  )
}
