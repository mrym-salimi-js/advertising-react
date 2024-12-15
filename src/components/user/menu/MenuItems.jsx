import { Chat, Home, Logout, Saved, Speaker, User } from '../../globals/Icons';
import { Link, useLocation } from 'react-router-dom';

export default function MenuItems() {
  const locationUrl = useLocation();
  return (
    <div className='w-full h-[22rem] flex flex-col items-center gap-4 px-10'>
      <Link className='w-[95%] transition-all cursor-pointer rounded-2xl p-3 hover:bg-[#cda7c0c3] flex gap-4 items-center'>
        <Home
          to={'/myAccount/dashboard'}
          color={
            locationUrl.pathname.includes('/dashboard') ? '#ffffff' : '#90587c'
          }
          size={'size-5'}
        />
        <p
          className={`text-sm ${
            locationUrl.pathname.includes('/dashboard')
              ? `text-white`
              : `text-[#90587c]`
          } `}
        >
          داشبورد
        </p>
      </Link>
      <Link
        to={'/myAccount/myInfo'}
        className='w-[95%] transition-all cursor-pointer rounded-2xl p-3 hover:bg-[#cda7c0c3] flex gap-4 items-center'
      >
        <User
          color={
            locationUrl.pathname.includes('/myInfo') ? '#ffffff' : '#90587c'
          }
          size={'size-5'}
        />
        <p
          className={`text-sm ${
            locationUrl.pathname.includes('/myInfo')
              ? `text-white`
              : `text-[#90587c]`
          } `}
        >
          پروفایل من
        </p>
      </Link>
      <Link
        to={'/myAccount/myAds'}
        className='w-[95%] transition-all cursor-pointer rounded-2xl p-3 hover:bg-[#cda7c0c3] flex gap-4 items-center'
      >
        <Speaker
          color={
            locationUrl.pathname.includes('/myAds') ? '#ffffff' : '#90587c'
          }
          size={'size-5'}
        />
        <p
          className={`text-sm ${
            locationUrl.pathname.includes('/myAds')
              ? `text-white`
              : `text-[#90587c]`
          } `}
        >
          آگهی های من
        </p>
      </Link>
      <Link
        to={'/myAccount/seaved'}
        className='w-[95%] transition-all cursor-pointer rounded-2xl p-3 hover:bg-[#cda7c0c3] flex gap-4 items-center'
      >
        <Saved
          color={
            locationUrl.pathname.includes('/seaved') ? '#ffffff' : '#90587c'
          }
          size={'size-5'}
        />
        <p
          className={`text-sm ${
            locationUrl.pathname.includes('/seaved')
              ? `text-white`
              : `text-[#90587c]`
          } `}
        >
          ذخیره ها
        </p>
      </Link>
      <Link
        to={'/myAccount/messages'}
        className='w-[95%] transition-all cursor-pointer rounded-2xl p-3 hover:bg-[#cda7c0c3] flex gap-4 items-center'
      >
        <Chat
          color={
            locationUrl.pathname.includes('/messages') ? '#ffffff' : '#90587c'
          }
          size={'size-5'}
        />
        <p
          className={`text-sm ${
            locationUrl.pathname.includes('/messages')
              ? `text-white`
              : `text-[#90587c]`
          } `}
        >
          پیام های من
        </p>
      </Link>
      <Link
        to={'/'}
        className='w-[95%] transition-all cursor-pointer rounded-2xl p-3 hover:bg-[#cda7c0c3] flex gap-4 items-center'
      >
        <Logout color={'#90587c'} size={'size-5'} />
        <p className='text-sm text-[#90587c]'>خروج</p>
      </Link>
    </div>
  );
}
