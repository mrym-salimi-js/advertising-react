import { Chat, Clock, Saved, Speaker } from '../globals/Icons';

export default function ReviewAccount({ userInfo, userAds, userChats }) {
  const date = new Date(userInfo?.createAt);
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  const faDate = date.toLocaleDateString('fa-IR', options);

  return (
    <div className='w-full h-auto flex items-center justify-between'>
      <div className='w-full h-auto  grid grid-cols-1 lg:grid-cols-4 gap-4 '>
        <p className='w-full h-32 p-4 text-center flex flex-col gap-4 items-start justify-center text-sm text-yellow-600  bg-yellow-300 rounded-3xl shadow-md'>
          <span className='w-11 h-11 rounded-xl bg-[#ffffffa1] flex items-center justify-center'>
            <Clock color={'#fde047'} size={'size-8'} />
          </span>
          {`${faDate}  به جمع ما پیوستید :)`}
        </p>
        <p className='w-full  h-32 p-4 text-center flex flex-col gap-4 items-start justify-center text-sm  text-blue-600 bg-blue-300 rounded-3xl shadow-md'>
          <span className='w-11 h-11 rounded-xl bg-[#ffffffa1] flex items-center justify-center'>
            <Speaker color={'#93c5fd'} size={'size-8'} />
          </span>
          {userAds ? `${userAds} آگهی منتشر کردید` : `هنوز آگهی ندارید :(`}
        </p>
        <p className='w-full  h-32 p-4 text-center flex flex-col gap-4 items-start justify-center text-sm text-pink-600 bg-pink-300 rounded-3xl shadow-md'>
          <span className='w-11 h-11 rounded-xl bg-[#ffffffa1] flex items-center justify-center'>
            <Chat color={'#f9a8d4'} size={'size-8'} />
          </span>
          {userChats
            ? `${userChats} چت در صندوق پیام دارید`
            : ` هنوز پیامی ندارید :(`}
        </p>
        <p className='w-full  h-32 p-4 text-center flex flex-col gap-4 items-start justify-center text-sm  text-green-600 bg-green-300 rounded-3xl shadow-md'>
          <span className='w-11 h-11 rounded-xl bg-[#ffffffa1] flex items-center justify-center'>
            <Saved fill={'#86efac'} size={'size-8'} />
          </span>
          {userInfo?.savedAd?.length > 0
            ? `${userInfo.savedAd?.length}   آگهی ذخیره دارید `
            : `هنوز آگهی ذخیره نکردید :(`}
        </p>
      </div>
    </div>
  );
}
