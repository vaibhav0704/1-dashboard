import { HiBell } from 'react-icons/hi';

interface Props {

}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="gap-[5px] flex flex-col justify-start">
      <div className="h-[107px] body-box">
        <div className="button-blue cursor-pointer">
          <p className="text-skin-fill text-[14px] m-6">Complete Profile</p>
        </div>
        <HiBell className='h-8 w-8' />
      </div>

      <div className="h-[107px] body-box p-[60px]">
        <p className='text-skin-base font-[700] text-[32px]'>Choose your new site</p>
        <div className=''>
          
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
