"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

const listTab = [
    {
        path: "/profile/info",
        label: 'Thông tin cá nhân'
    },
    {
        path: "/profile/change_password",
        label: 'Đổi mật khẩu'
    },
]

export function Profile({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();

    return (
        <div className={"m-6"}>
            <div className={"grid grid-cols-4"}>
                <div
                    className={"col-span-4 md:col-span-1 p-4 mx-4 mb-5 bg-white rounded-2xl shadow-lg shadow-gray-200"}>
                    <ul>
                        {listTab.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path}>
                                    <div className={`w-full py-2 px-4 rounded-lg ${pathName===item.path ? "bg-primary shadow-lg shadow-gray-200" : "hover:bg-gray-200"}`}>{item.label}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {children}
            </div>
        </div>
    )
}