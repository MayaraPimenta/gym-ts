import { ClassType } from '@/shared/types';

type Props = ClassType

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-full w-[400px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center opacity-0 transition duration-500 hover:opacity-90 text-white`

  return <li className="relative mx-5 inline-block h-full w-[400px]">
    <div className={overlayStyles}>
      <p className="text-xl font-bold">{name}</p>
      <p className='mt-5'>{description}</p>
    </div>
    <img alt={name} src={image} />
  </li>
}

export default Class