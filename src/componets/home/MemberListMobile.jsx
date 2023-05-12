import React from "react";
import { Images } from "@/utils/images";

function MemberListMobile() {
  return (
    <div className="my-12">
      <div className="container mx-auto lg:px-32  py-12 px-10 py-2">
        <div className="flex justify-between content-center items-center">
          <h1 className="font-jungle text-3xl mb-4">Our Team Members</h1>
          <a href="#">
            <p className="font-oswald text-sm mb-4">See All</p>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="px-2">
            <div className="border-2 border-white p-4 rounded-4xl text-center py-8 w-full">
              <img
                src={Images.avatar1}
                alt="avatar"
                className="m-2 mx-auto w-1/2"
              />
              <h3 className="font-oswald text-xl">Pouyan</h3>
              <h5 className="font-oswald text-gray-400 text-lg">founder</h5>
              <div className="w-full flex items-center justify-center ">
                <div
                  className="bg-dark px-1 rounded flex flex-row"
                  style={{ marginBottom: "-56px", marginTop: "20px" }}
                >
                  <a
                    href="https://twitter.com/pouyanroohii?s=11&t=Pqp8b5euKLJGATY4LJhKgQ"
                    className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="border-2 border-white p-4 rounded-4xl text-center py-8 w-full">
              <img
                src={Images.avatar2}
                alt="avatar"
                className="m-2 mx-auto w-1/2"
              />
              <h3 className="font-oswald text-xl">Ish</h3>
              <h5 className="font-oswald text-gray-400 text-lg">advisor</h5>
              <div className="w-full flex items-center justify-center ">
                <div
                  className="bg-dark px-1 rounded flex flex-row"
                  style={{ marginBottom: "-56px", marginTop: "20px" }}
                >
                  <a
                    href="https://twitter.com/ishmilly?s=11&t=Pqp8b5euKLJGATY4LJhKgQ"
                    className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mt-8">
            <div className="border-2 border-white p-4 rounded-4xl text-center py-8 w-full">
              <img
                src={Images.avatar3}
                alt="avatar"
                className="m-2 mx-auto w-1/2"
              />
              <h3 className="font-oswald text-xl">Prietten</h3>
              <h5 className="font-oswald text-gray-400 text-lg">modrator</h5>
              <div className="w-full flex items-center justify-center ">
                <div
                  className="bg-dark px-1 rounded flex flex-row"
                  style={{ marginBottom: "-56px", marginTop: "20px" }}
                >
                  <a
                    href="#"
                    className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mt-8">
            <div className="border-2 border-white p-4 rounded-4xl text-center py-8 w-full">
              <img
                src={Images.avatar4}
                alt="avatar"
                className="m-2 mx-auto w-1/2"
              />
              <h3 className="font-oswald text-xl">Bahram</h3>
              <h5 className="font-oswald text-gray-400 text-lg">community manager</h5>
              <div className="w-full flex items-center justify-center ">
                <div
                  className="bg-dark px-1 rounded flex flex-row"
                  style={{ marginBottom: "-56px", marginTop: "20px" }}
                >
                  <a
                    href="https://twitter.com/bahram_mohamadi?s=11&t=Pqp8b5euKLJGATY4LJhKgQ"
                    className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberListMobile;
