import { useQuery } from '@tanstack/react-query';
import { NewAdForm } from '../components/newAd/NewAdForm';
import { getUser } from '../services/user/getUser';
import { updateUserStatus } from '../services/user/updateUserStatus';

export default function NewAd() {
  updateUserStatus();
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return (
    <>
      <div className='w-[95%] lg:w-[85%] h-full relative flex flex-col gap-6 items-center mb-14  p-2'>
        <NewAdForm userInfo={data} />
      </div>
    </>
  );
}
