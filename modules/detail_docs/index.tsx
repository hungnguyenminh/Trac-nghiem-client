import React from "react";
import {Avatar, Button, Image} from "antd";
import {
    DownloadOutlined,
    GithubOutlined, HeartOutlined,
    InstagramFilled, LikeOutlined,
    LinkedinFilled,
    UserOutlined,
    WechatFilled
} from "@ant-design/icons";

export function DetailDocs() {
    return (
        <div className={"m-6"}>
            <div className={"rounded-xl bg-white shadow-lg shadow-gray-200 p-6"}>
                <div className={"border-b pb-6 mb-6"}><h3>Tiêu đề tài liệu</h3></div>
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none"><img alt=""  width="500"
                                                                            height="500"
                                                                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                                                            sizes="(min-width: 1024px) 32rem, 20rem"
                                                                            src="/img/quiz.jpg"/>
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2"><h1
                        className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">I’m
                        Spencer Sharp. I live in New York City, where I design the future.</h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"><p>I’ve loved making
                            things for as long as I can remember, and wrote my first program when I was 6 years old,
                            just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself
                            to type on.</p><p>The only thing I loved more than computers as a kid was space. When I was
                            8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s
                            motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough
                            that with just a bit of momentum I’d be able to get to orbit.</p><p>I spent the next few
                            summers indoors working on a rocket design, while I recovered from the multiple surgeries it
                            took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s
                            Blackberry into orbit and was able to transmit a photo back down to our family computer from
                            space.</p><p>Today, I’m the founder of Planetaria, where we’re working on civilian space
                            suits and manned shuttle kits you can assemble at home so that the next generation of kids
                            really <em>can</em> make it to orbit — from the comfort of their own backyards.</p></div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <li className="flex"><a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                href="#">
                                <UserOutlined/>
                                <span className="ml-4">Tác giả: Nguyễn Văn An</span></a></li>
                            <li className="mt-4 flex"><a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                href="#">
                                <LikeOutlined/>
                                <span className="ml-4">121 Lượt thích</span></a></li>
                            <li className="mt-4 flex"><a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                href="#">
                                <HeartOutlined/>
                                <span className="ml-4">121 Lượt yêu thích</span></a></li>
                            <li className="mt-4 flex"><a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                href="#">
                                <DownloadOutlined/>
                                <span className="ml-4">12 Lượt tải xuống</span></a></li>
                            <li className="mt-8 border-t border-zinc-100 pt-8 flex"><a
                                className="group flex text-sm font-medium text-zinc-800 transition"
                                >
                                <Button className={"mr-4"}><LikeOutlined /></Button>
                                <Button className={"mr-4"}><HeartOutlined/></Button>
                                <Button className={"mr-4"}><DownloadOutlined/></Button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}