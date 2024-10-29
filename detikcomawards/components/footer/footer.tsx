import React from "react";
import "./footer.css";
import Image from "next/image";

export default function footer() {
  return (
    <>
      <footer
        className="p-8 sm:p-6 bg-[#151021] text-white select-none"
        id="footer"
      >
        <div className="mx-auto max-w-6xl pt-2 pb-2 sm:px-[20px] lg:px-[20px]">
          <div className="md:flex md:justify-between">
            <div className="mx-0 md:mx-0 mb-6 md:mb-0">
              <Image
                src="/images/footer/logo-detikcom-awards.png"
                className="w-[186px] mx-auto mb-5 md:ml-0 md:mb-5"
                alt=""
                width={186}
                height={186}
              />
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="col-span-4 md:col-span-3">
                  <p className="mt-2 text-white text-[10px] text-center md:text-left font-normal">
                    Penghargaan bergengsi yang diberikan kepada individu, merek,
                    dan lembaga di Indonesia yang telah memberikan kontribusi
                    luar biasa dalam berbagai bidang. Melalui detikcom Awards,
                    kami menghargai pencapaian yang menginspirasi, inovasi yang
                    mencuat, dan perubahan positif yang telah dilakukan.{" "}
                  </p>
                </div>
                <div className="grid grid-rows-4 grid-cols-4 grid-flow-col md:grid-cols-1 md:grid-rows-1 md:block hidden justify-end">
                  <div className="flex row-span-2 md:row-span-2 justify-center gap-0 sm:gap-2 md:gap-2 space-x-0 text-[12px] py-2 font-normal">
                    Connect With Us
                  </div>
                  <div className="flex col-span-4 md:col-span-1 justify-center gap-0 sm:gap-2 md:gap-2 space-x-0">
                    <div className="">
                      <a
                        href="https://www.facebook.com/detikinet/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px]"
                          src="/images/footer/sosmed/facebook.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://twitter.com/detikinet/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px]"
                          src="/images/footer/sosmed/twitter.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://www.instagram.com/detikinet/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px]"
                          src="/images/footer/sosmed/instagram.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://www.linkedin.com/company/detik-com/mycompany/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px]"
                          src="/images/footer/sosmed/linkedin.png" alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="order-last">
                      <a
                        href="https://www.youtube.com/detikcom"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px]"
                          src="/images/footer/sosmed/youtube.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt:20px md:hidden">
                <div className="grid grid-cols-1 my-3 sm:my-0">
                  <div className="flex row-span-2 md:row-span-2 justify-center gap-0 sm:gap-2 md:gap-2 space-x-0 text-[12px] py-2 font-normal">
                    Connect With Us
                  </div>
                  <div className="flex col-span-4 md:col-span-1 justify-center gap-0 sm:gap-2 md:gap-2 space-x-0">
                    <div className="">
                      <a
                        href="https://www.facebook.com/detikinet/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px] mx-1"
                          src="/images/footer/sosmed/facebook.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://twitter.com/detikinet/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px] mx-1"
                          src="/images/footer/sosmed/twitter.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://www.instagram.com/detikinet/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px] mx-1"
                          src="/images/footer/sosmed/instagram.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://www.linkedin.com/company/detik-com/mycompany/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px] mx-1"
                          src="/images/footer/sosmed/linkedin.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                    <div className="order-last">
                      <a
                        href="https://www.youtube.com/detikcom"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Image
                          className="w-[32px] md:w-[32px] mx-1"
                          src="/images/footer/sosmed/youtube.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-0 md:mx-0 my-6 border-[#D8C270] sm:mx-auto lg:my-8" />
          <div className="mx-0 md:mx-0 justify-center sm:flex items-center text-center md:items-center md:justify-between">
            <span className="text-[10px] text-[#D8C270] sm:text-center  font-normal">
              Copyright @ 2023 detikcom. All right reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
