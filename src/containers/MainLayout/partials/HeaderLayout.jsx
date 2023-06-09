import React, { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Images } from "@/utils/images";
//web3
import { useWeb3React } from "@web3-react/core";
import {
  injected,
  walletconnect,
  resetWalletConnector,
  walletlink,
} from "@/helpers/connectors";
import { getContract } from "@/helpers/contract";

const navigation = [
  {
    name: "Store",
    href: "#",
    current: true,
    icon: <img src={Images.navBagIcon} alt="icon" />,
  },
  {
    name: "Comic Book",
    href: "#",
    current: false,
    icon: <img src={Images.navDocumentIcon} alt="icon" />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false);
  //connector, library, chainId, account, activate, deactivate
  const web3reactContext = useWeb3React();
  //web3react
  const writeToContractUsingWeb3React = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 100);
      const myContract = getContract(
        web3reactContext.library,
        web3reactContext.account
      );
      const overrides = {
        gasLimit: 230000,
      };
      const response = await myContract.store(randomNumber, overrides);
      console.log(response);
      alert("write " + randomNumber);
    } catch (ex) {
      console.log(ex);
      alert(ex);
    }
  };

  const disconnectMetamaskSimple = () => {
    try {
      web3reactContext.deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  //web3react context
  const checkInfoSimple = async () => {
    try {
      console.log("web3reactContext");
      console.log(web3reactContext);
    } catch (ex) {
      console.log(ex);
    }
  };

  //web3react metamask
  const connectMetamaskSimple = async () => {
    try {
      await web3reactContext.activate(injected);
      setIsOpen(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  //web3react walletconnect
  const connectWalletConnectSimple = async () => {
    alert("asdasd")
    try {
      resetWalletConnector(walletconnect);
      await web3reactContext.activate(walletconnect);
      setIsOpen(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  //web3react coinbase
  const connectCoinbaseSimple = async () => {
    try {
      await web3reactContext.activate(walletlink);
    } catch (ex) {
      console.log(ex);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <Fragment>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 ">
                      <div className="font-jungle text-3xl">FFC</div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "btext-white"
                                : "text-gray-400 hover:text-white",
                              "px-3 py-2 rounded-md text-md font-medium font-oswald"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#!"
                        className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#!"
                        className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#!"
                        className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 16 12">
                          <path
                            d="M13.1982 1.30761C12.2419 0.876356 11.2169 0.557606 10.1451 0.376356C10.1355 0.374523 10.1256 0.375704 10.1168 0.379735C10.1079 0.383766 10.1006 0.390448 10.0957 0.398856C9.96443 0.629481 9.81818 0.930106 9.71568 1.16761C8.57887 0.997754 7.42312 0.997754 6.28631 1.16761C6.17214 0.904393 6.0434 0.647746 5.90068 0.398856C5.89584 0.390345 5.88853 0.383512 5.8797 0.379268C5.87088 0.375025 5.86098 0.373572 5.85131 0.375106C4.78006 0.556356 3.75506 0.875106 2.79818 1.30698C2.78995 1.31043 2.78297 1.31632 2.77818 1.32386C0.833181 4.18323 0.300056 6.97198 0.561931 9.72573C0.56266 9.73248 0.564753 9.739 0.568084 9.74491C0.571415 9.75082 0.575914 9.75599 0.581306 9.76011C1.71655 10.5866 2.98277 11.2162 4.32693 11.6226C4.3363 11.6255 4.34632 11.6255 4.35569 11.6226C4.36506 11.6197 4.37333 11.614 4.37943 11.6064C4.66868 11.2195 4.92499 10.8091 5.14568 10.3795C5.14875 10.3736 5.15051 10.3671 5.15086 10.3605C5.15121 10.3539 5.15013 10.3473 5.1477 10.3411C5.14527 10.335 5.14154 10.3294 5.13677 10.3248C5.13201 10.3202 5.1263 10.3167 5.12006 10.3145C4.71631 10.1624 4.32511 9.97896 3.95006 9.76573C3.94332 9.76188 3.93764 9.75642 3.93353 9.74984C3.92942 9.74326 3.92701 9.73576 3.92651 9.72801C3.92602 9.72027 3.92745 9.71253 3.93069 9.70547C3.93393 9.69842 3.93886 9.69228 3.94506 9.6876C4.02381 9.62948 4.10256 9.56886 4.17756 9.50823C4.18431 9.50278 4.19244 9.49931 4.20105 9.4982C4.20965 9.4971 4.2184 9.49841 4.22631 9.50198C6.68068 10.6045 9.33881 10.6045 11.7644 9.50198C11.7724 9.4982 11.7812 9.49672 11.7899 9.49771C11.7987 9.49871 11.8069 9.50213 11.8138 9.5076C11.8888 9.56886 11.9669 9.62948 12.0463 9.6876C12.0526 9.69218 12.0576 9.69824 12.0609 9.70523C12.0643 9.71222 12.0658 9.71994 12.0654 9.72768C12.0651 9.73542 12.0628 9.74294 12.0588 9.74958C12.0548 9.75623 12.0492 9.76177 12.0426 9.76573C11.6688 9.98073 11.2801 10.1626 10.8719 10.3139C10.8657 10.3161 10.86 10.3197 10.8552 10.3244C10.8504 10.329 10.8467 10.3347 10.8443 10.3409C10.8418 10.3471 10.8408 10.3537 10.8411 10.3604C10.8415 10.3671 10.8432 10.3736 10.8463 10.3795C11.0713 10.8089 11.3288 11.2176 11.6119 11.6057C11.6178 11.6137 11.626 11.6196 11.6354 11.6228C11.6448 11.6259 11.6549 11.6261 11.6644 11.6232C13.0109 11.218 14.2792 10.5881 15.4157 9.76011C15.4212 9.75623 15.4259 9.75121 15.4293 9.74539C15.4328 9.73957 15.4349 9.73308 15.4357 9.72636C15.7482 6.54261 14.9119 3.77636 13.2176 1.32511C13.2134 1.31714 13.2065 1.31093 13.1982 1.30761ZM5.51256 8.04886C4.77381 8.04886 4.16443 7.38073 4.16443 6.56136C4.16443 5.74136 4.76193 5.07386 5.51256 5.07386C6.26881 5.07386 6.87256 5.74698 6.86068 6.56136C6.86068 7.38136 6.26318 8.04886 5.51256 8.04886ZM10.4969 8.04886C9.75756 8.04886 9.14881 7.38073 9.14881 6.56136C9.14881 5.74136 9.74568 5.07386 10.4969 5.07386C11.2532 5.07386 11.8569 5.74698 11.8451 6.56136C11.8451 7.38136 11.2538 8.04886 10.4969 8.04886Z"
                            fill="#FBFBFB"
                          />
                        </svg>
                      </a>

                      {web3reactContext.account ? (
                        <button className="rounded-full font-oswald bg-secondary-300 text-white leading-normal hover:bg-secondary-300 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-auto h-8 pt-0 px-4">
                          {web3reactContext.account}
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsOpen(true)}
                          className="rounded-full font-oswald bg-secondary-300 text-white leading-normal hover:bg-secondary-300 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-auto h-8 pt-0 px-4"
                        >
                          Connect Wallet
                        </button>
                      )}

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100 transform"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="transition ease-in duration-75 transform"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {/* {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))} */}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden h-screen bg-dark">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item, index) => (
                    <Fragment key={index}>
                      <Disclosure.Button
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white"
                            : "text-gray-300 hover:text-white",
                          "block px-3 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className="flex flex-row justify-between p-4 items-center border-b">
                          <div className="flex flex-row items-center">
                            <div>{item.icon}</div>
                            <div className="ml-2 font-oswald text-white text-xl">
                              {item.name}
                            </div>
                          </div>
                          <div>
                            <img src={Images.navArrowRight} alt="icon" />
                          </div>
                        </div>
                      </Disclosure.Button>
                    </Fragment>
                  ))}
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className={classNames(
                      true
                        ? "text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 rounded-md text-base font-medium"
                    )}
                    aria-current={true ? "page" : undefined}
                  >
                    {web3reactContext.account ? (
                      <button className="rounded-full font-oswald bg-secondary-300 text-white leading-normal hover:bg-secondary-300 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-auto h-8 pt-0 px-4">
                        {web3reactContext.account}
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsOpen(true)}
                        className="rounded-full font-oswald bg-secondary-300 text-white leading-normal hover:bg-secondary-300 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-auto h-8 pt-0 px-4"
                      >
                        Connect Wallet
                      </button>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <a
                      href="#!"
                      className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-10 h-10 m-1 py-2 px-2"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-10 h-10 m-1 py-2 px-2"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-10 h-10 m-1 py-2 px-2"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 16 12">
                        <path
                          d="M13.1982 1.30761C12.2419 0.876356 11.2169 0.557606 10.1451 0.376356C10.1355 0.374523 10.1256 0.375704 10.1168 0.379735C10.1079 0.383766 10.1006 0.390448 10.0957 0.398856C9.96443 0.629481 9.81818 0.930106 9.71568 1.16761C8.57887 0.997754 7.42312 0.997754 6.28631 1.16761C6.17214 0.904393 6.0434 0.647746 5.90068 0.398856C5.89584 0.390345 5.88853 0.383512 5.8797 0.379268C5.87088 0.375025 5.86098 0.373572 5.85131 0.375106C4.78006 0.556356 3.75506 0.875106 2.79818 1.30698C2.78995 1.31043 2.78297 1.31632 2.77818 1.32386C0.833181 4.18323 0.300056 6.97198 0.561931 9.72573C0.56266 9.73248 0.564753 9.739 0.568084 9.74491C0.571415 9.75082 0.575914 9.75599 0.581306 9.76011C1.71655 10.5866 2.98277 11.2162 4.32693 11.6226C4.3363 11.6255 4.34632 11.6255 4.35569 11.6226C4.36506 11.6197 4.37333 11.614 4.37943 11.6064C4.66868 11.2195 4.92499 10.8091 5.14568 10.3795C5.14875 10.3736 5.15051 10.3671 5.15086 10.3605C5.15121 10.3539 5.15013 10.3473 5.1477 10.3411C5.14527 10.335 5.14154 10.3294 5.13677 10.3248C5.13201 10.3202 5.1263 10.3167 5.12006 10.3145C4.71631 10.1624 4.32511 9.97896 3.95006 9.76573C3.94332 9.76188 3.93764 9.75642 3.93353 9.74984C3.92942 9.74326 3.92701 9.73576 3.92651 9.72801C3.92602 9.72027 3.92745 9.71253 3.93069 9.70547C3.93393 9.69842 3.93886 9.69228 3.94506 9.6876C4.02381 9.62948 4.10256 9.56886 4.17756 9.50823C4.18431 9.50278 4.19244 9.49931 4.20105 9.4982C4.20965 9.4971 4.2184 9.49841 4.22631 9.50198C6.68068 10.6045 9.33881 10.6045 11.7644 9.50198C11.7724 9.4982 11.7812 9.49672 11.7899 9.49771C11.7987 9.49871 11.8069 9.50213 11.8138 9.5076C11.8888 9.56886 11.9669 9.62948 12.0463 9.6876C12.0526 9.69218 12.0576 9.69824 12.0609 9.70523C12.0643 9.71222 12.0658 9.71994 12.0654 9.72768C12.0651 9.73542 12.0628 9.74294 12.0588 9.74958C12.0548 9.75623 12.0492 9.76177 12.0426 9.76573C11.6688 9.98073 11.2801 10.1626 10.8719 10.3139C10.8657 10.3161 10.86 10.3197 10.8552 10.3244C10.8504 10.329 10.8467 10.3347 10.8443 10.3409C10.8418 10.3471 10.8408 10.3537 10.8411 10.3604C10.8415 10.3671 10.8432 10.3736 10.8463 10.3795C11.0713 10.8089 11.3288 11.2176 11.6119 11.6057C11.6178 11.6137 11.626 11.6196 11.6354 11.6228C11.6448 11.6259 11.6549 11.6261 11.6644 11.6232C13.0109 11.218 14.2792 10.5881 15.4157 9.76011C15.4212 9.75623 15.4259 9.75121 15.4293 9.74539C15.4328 9.73957 15.4349 9.73308 15.4357 9.72636C15.7482 6.54261 14.9119 3.77636 13.2176 1.32511C13.2134 1.31714 13.2065 1.31093 13.1982 1.30761ZM5.51256 8.04886C4.77381 8.04886 4.16443 7.38073 4.16443 6.56136C4.16443 5.74136 4.76193 5.07386 5.51256 5.07386C6.26881 5.07386 6.87256 5.74698 6.86068 6.56136C6.86068 7.38136 6.26318 8.04886 5.51256 8.04886ZM10.4969 8.04886C9.75756 8.04886 9.14881 7.38073 9.14881 6.56136C9.14881 5.74136 9.74568 5.07386 10.4969 5.07386C11.2532 5.07386 11.8569 5.74698 11.8451 6.56136C11.8451 7.38136 11.2538 8.04886 10.4969 8.04886Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            </Fragment>
          )}
        </Disclosure>
      </div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-30"
                leave="ease-in duration-200"
                leaveFrom="opacity-30"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 dialogue-overlay opacity-30" />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="flex flex-col">
                    <div
                      className="hover:bg-gray-100 border-b border-solid border-gray-200 transition-all duration-200 cursor-pointer flex flex-col justify-center p-6 py-8"
                      onClick={connectMetamaskSimple}
                    >
                      <img
                        src={Images.metamaskWalletImage}
                        width="97"
                        height="97"
                        alt="Metamask Logo"
                        className="mx-auto"
                      />
                      <div className="text-center mt-1">
                        <h2 className="text-2xl font-semibold text-gray-900">
                          MetaMask
                        </h2>
                        <p className="text-gray-500">
                          Connect your metamask wallet.
                        </p>
                      </div>
                    </div>
                    <div
                      className="hover:bg-gray-100 transition-all duration-200 cursor-pointer flex flex-col justify-center p-6 py-8"
                      onClick={connectWalletConnectSimple}
                    >
                      <img
                        src={Images.connectWalletImage}
                        width="97"
                        height="97"
                        alt="Metamask Logo"
                        className="mx-auto"
                      />
                      <div className="text-center mt-1">
                        <h2 className="text-2xl font-semibold text-gray-900">
                          Wallet Connect
                        </h2>
                        <p className="text-gray-500">
                          Scan with your favorite wallet to connect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
              {/* <style jsx>{`
                :global(.dialogue-overlay) {
                  background-color: black;
                  opacity: 0.3;
                }
              `}</style> */}
            </div>
          </Dialog>
        </Transition>
      </div>
    </Fragment>
  );
}

export default HeaderLayout;
