"use client"
import React from "react";
import {useRouter} from "next/navigation";

const listQues = [
  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
]
export function Quiz() {
  const router = useRouter();
  return (
    <form action="test_result" method={"get"} className={"m-6"}>
      <div className="lg:flex lg:justify-between mb-6">
        <div className={"w-full mr-64"}>
          {listQues.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className="card mb-6" key={index}>
                <h4 className="mb-2">{`Câu ${index}`}</h4>
                <div>
                  <fieldset>
                    <legend>
                      Khi thiết kế kế hoạch lấy mẫu điều tra, người nghiên cứu marketing
                      phải thông qua:
                    </legend>
                    <hr className="my-4"></hr>

                    <div className="flex items-center mb-4">
                      <input id={`country-option-2-${index}`} type="radio" name={`countries${index}`} value="USA"
                             className="w-5 h-5 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-dark-900"
                             aria-labelledby="country-option-1" aria-describedby="country-option-1" checked/>
                      <label htmlFor="country-option-1"
                             className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        United States
                      </label>
                    </div>

                    <div className="flex items-center mb-4">
                      <input id={`country-option-2-${index}`} type="radio" name={`countries${index}`} value="Germany"
                             className="w-5 h-5 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-dark-900"
                             aria-labelledby="country-option-2" aria-describedby="country-option-2"/>
                      <label htmlFor="country-option-2"
                             className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Germany
                      </label>
                    </div>

                    <div className="flex items-center mb-4">
                      <input id={`country-option-3-${index}`} type="radio" name={`countries${index}`} value="Spain"
                             className="w-5 h-5 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-dark-900"
                             aria-describedby="country-option-3"/>
                      <label htmlFor="country-option-3"
                             className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Spain
                      </label>
                    </div>

                    <div className="flex items-center mb-4">
                      <input id={`country-option-4-${index}`} type="radio" name={`countries${index}`} value="United Kingdom"
                             className="w-5 h-5 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-dark-900"
                             aria-labelledby="country-option-4" aria-describedby="country-option-4"/>
                      <label htmlFor="country-option-4"
                             className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        United Kingdom
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
          ))}
        </div>

        <div
            className={"lg:fixed top-0 right-0 z-20 flex-shrink-0  lg:pt-16 lg:w-64 h-full duration-200 lg:flex transition-width"}>
          <div className="lg:w-52 lg:ml-6 h-fit p-6 rounded-lg bg-white mt-6 shadow-xl shadow-gray-200">
            <h4 className="mb-2">Mục lục câu hỏi</h4>
            <div className="mb-4 flex flex-wrap lg:grid lg:grid-cols-4">
              {listQues.map((item, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <div key={index}
                       className="flex right-6 h-8 w-8 mr-1.5 mb-3 rounded border justify-center items-center hover:bg-gray-200 cursor-pointer">
                    <span>{index}</span>
                  </div>
              ))}
            </div>
            <button className="btn w-full" onClick={() => {
              router.push("/test_result")
            }}>Nộp bài thi
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
