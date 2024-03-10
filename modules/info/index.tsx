import { DatePicker } from 'antd';

export function Info() {
  return (
    <div className="col-span-4 md:col-span-3 p-4 mx-4 mb-5 bg-white rounded-2xl shadow-lg shadow-gray-200">
      <h3 className="mb-4 text-xl font-bold">Thông tin tài khoản</h3>
      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tên
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="Nhập tên"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="United States"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="e.g. San Francisco"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="adress"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Adress
            </label>
            <input
              type="text"
              name="adress"
              id="adress"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="e.g. California"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="example@company.com"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone-number"
              id="phone-number"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="e.g. +(12)3456 789"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="birthday"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Birthday
            </label>
            <DatePicker className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="organization"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Organization
            </label>
            <input
              type="text"
              name="organization"
              id="organization"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="Company Name"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Role
            </label>
            <input
              type="text"
              name="role"
              id="role"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="React Developer"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="department"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Department
            </label>
            <input
              type="text"
              name="department"
              id="department"
              className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="Development"
            />
          </div>
          <div className="col-span-6 sm:col-full">
            <button
              className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Save all
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
