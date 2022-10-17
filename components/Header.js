import { 
    MagnifyingGlassIcon,
    MapPinIcon,
    UserIcon
 } from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="flex p-4">
        {/*left Nav*/}
        <div className="flex m-2 items-center flex-grow space-x-5">
            <p className="p-1 text-indigo-500 text-3xl font-bold">MyHealth</p> 
            <p className="p-1 font-bold">Patients</p>
            <p className="p-1 font-bold">Providers</p>
        </div>
        {/*right Nav */}
        <div className="flex justify-end space-x-6">
            <div className="flex relative  items-center cursor-pointer text-indigo-500">
                <input type="text" placeholder="Doctor name, Service, Symptom" className="pl-8 w-80 items-center focus:outline-none border-b border-indigo-500"/>
                <MagnifyingGlassIcon className="h-14 p-4  absolute inset-y-0 left-0 flex items-center pl-0" />
            </div>

            <div className="flex relative items-center  cursor-pointer text-indigo-500">
                <input type="text" className="pl-8 items-center focus:outline-none  border-b border-indigo-500" placeholder="Westlands,Nairobi"/>
                <MapPinIcon className="h-14 p-4 absolute inset-y-0 left-0 flex items-center pl-0"/>
            </div>
            
            <div className="flex items-center text-indigo-500">
                <UserIcon className="h-3/4 p-1"/>
                <p className="mr-2">Login</p>
            </div>
        </div>
    </div>
  )
}

export default Header