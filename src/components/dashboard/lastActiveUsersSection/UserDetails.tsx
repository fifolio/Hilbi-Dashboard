
export default function UserDetails() {

  return (
    <div className="tw:flex tw:items-center tw:w-full tw:text-black tw:py-3 tw:hover:bg-gray-100 tw:px-3 tw:border-b tw:border-gray-200 ">
      {/* USER AVATAR */}
      <div className="tw:bg-[#FF9C6E] tw:text-white tw:rounded-full tw:w-[32px] tw:h-[32px] tw:flex tw:items-center tw:justify-center">
        <span>
          AV
        </span>
      </div>
      {/* USERNAME & EMAIL */}
      <div className="tw:flex-1 tw:ml-3 tw:space-y-1">
        <div className="tw:font-semibold">Firas Dabbabi</div>
        <div className="tw:text-gray-500">FirasEmail@gmail.com</div>
      </div>
      {/* LAST ACTIVE DATE */}
      <div className="tw:text-[14px] tw:text-gray-500">3.2.3241</div>
    </div>
  )
}
