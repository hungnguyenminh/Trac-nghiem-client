import {DatePicker} from "antd";

export function ChangePassword() {
    return (
        <div
            className={"col-span-4 md:col-span-3 p-4 mx-4 mb-5 bg-white rounded-2xl shadow-lg shadow-gray-200"}>
            <h3 className="mb-4 text-xl font-bold">Password information</h3>
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="current-password"
                               className="block mb-2 text-sm font-medium text-gray-900">Current
                            password</label>
                        <input type="text" name="current-password" id="current-password"
                               className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                               placeholder="••••••••"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="new-password"
                               className="block mb-2 text-sm font-medium text-gray-900">New password</label>
                        <input type="text" name="new-password" id="new-password"
                               className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                               placeholder="••••••••"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="confirm-password"
                               className="block mb-2 text-sm font-medium text-gray-900">Confirm
                            password</label>
                        <input type="text" name="confirm-password" id="confirm-password"
                               className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                               placeholder="••••••••"/>
                    </div>
                    <div className="col-span-full">
                        <div className="text-sm font-medium">
                            Password requirements:
                        </div>
                        <div className="mb-1 text-sm font-normal text-gray-500">
                            Ensure that these requirements are met:
                        </div>
                        <ul className="pl-4 space-y-1 text-gray-500">
                            <li className="text-xs font-normal">
                                At least 10 characters (and up to 100 characters)
                            </li>
                            <li className="text-xs font-normal">
                                At least one lowercase character
                            </li>
                            <li className="text-xs font-normal">
                                Inclusion of at least one special character, e.g., ! @
                                # ?
                            </li>
                            <li className="text-xs font-normal">
                                Some text here zoltan
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 sm:col-full">
                        <button
                            className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
                            type="submit">
                            Save all
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}