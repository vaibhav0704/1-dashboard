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
        <div className='flex justify-center items-center'>
          {
            [1,2,3].map(stage => (
              <>
                <div key={stage} className="flex flex-col w-[29px]">
                  <div className='flex justify-around items-center w-[20px]'>
                    {
                      (stage <=1) && (
                        <div className='rounded-full border-black w-[12px] h-[12px] bg-black'>
                        </div>
                      )
                    }
                    <p className='font-[500] text-[18px] text-skin-base'>{stage}</p>
                  </div>
                  <div className='h-[2.5px] bg-black'></div>
                </div>
                {
                  stage < 3 && (
                    <>
                      <div className="w-[76px] border-[0.25px] border-dashed"></div>
                      <div className="w-0 h-0 border-l-[3px] border-l-black border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
                    </>

                  )
                }              
              </>
            ))
          }
        </div>
      </div>

      {/* main body area */}
      <div className="min-h-full body-box p-[60px]">
        <div className="">

        </div>
      </div>
    </div>
  )
};

export default Dashboard;
