import { BenefitType, SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = BenefitType & {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className='my-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center flex justify-center items-center flex-col gap-4'>
      <picture className="rounded-full border-2 border-gray-100 bg-primary-100 p-4 flex justify-center items-center">
        {icon}
      </picture>

      <h4 className='font-semibold'>
        {title}
      </h4>

      <p>
        {description}
      </p>

      <AnchorLink
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  )
}

export default Benefit