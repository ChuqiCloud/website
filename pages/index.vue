<template>
  <NuxtLayout>
    <NuxtPage />
    <div>
      <!-- Announcement Banner -->
      <div class="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
        <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          <!-- Grid -->
          <div
            class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2"
          >
            <div class="text-center md:text-start">
              <p class="text-xs text-white/80 uppercase tracking-wider">
                Preview of Preline
              </p>
              <p class="mt-1 text-white font-medium">
                Sign up to get unlimited updates. No credit card required.
              </p>
            </div>
            <!-- End Col -->

            <div
              class="mt-3 text-center md:text-start md:flex md:justify-end md:items-center"
            >
              <a
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                Sign up free
              </a>
            </div>
            <!-- End Col -->
          </div>
          <!-- End Grid -->
        </div>
      </div>
      <!-- End Announcement Banner -->

      <!-- ========== HEADER ========== -->
      <header
        class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7"
      >
        <nav
          class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
          aria-label="Global"
        >
          <div class="md:col-span-3">
            <!-- Logo -->
            <a
              class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../templates/creative-agency/index.html"
              aria-label="Preline"
            >
              <img
                class="h-8"
                src="https://bbs.acmecloud.cn/data/attachment/common/template/boardimg_20240115efehkfwk.png"
                alt="Acmecloud"
              />
            </a>
            <!-- End Logo -->
          </div>

          <!-- Button Group -->
          <div
            class="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3"
          >
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
            >
              Sign in
            </button>
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
            >
              Hire us
            </button>

            <div class="hs-dropdown">
              <button
                type="button"
                class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
              >
                <svg
                  class="hs-dark-mode-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <svg
                  class="hs-dark-mode-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </button>

              <div
                id="selectThemeDropdown"
                class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
              >
                <button
                  type="button"
                  class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                  data-hs-theme-click-value="default"
                >
                  Default (Light)
                </button>
                <button
                  type="button"
                  class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                  data-hs-theme-click-value="dark"
                >
                  Dark
                </button>
                <button
                  type="button"
                  class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                  data-hs-theme-click-value="auto"
                >
                  Auto (System)
                </button>
              </div>
            </div>

            <div class="md:hidden">
              <button
                type="button"
                class="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <!-- End Button Group -->

          <!-- Collapse -->
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          >
            <div
              class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0"
            >
              <div>
                <a
                  class="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                  href="#"
                  aria-current="page"
                  >首页</a
                >
              </div>
              <div>
                <a
                  class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                  >产品</a
                >
              </div>
              <div>
                <a
                  class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                  >服务</a
                >
              </div>
              <div>
                <a
                  class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                  >支持</a
                >
              </div>
              <div>
                <a
                  class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                  >关于</a
                >
              </div>
            </div>
          </div>
          <!-- End Collapse -->
        </nav>
      </header>
      <!-- ========== END HEADER ========== -->

      <!-- Hero -->
      <div
        class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <!-- Announcement Banner -->
          <div class="flex justify-center">
            <a
              class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
              href="#"
            >
              创新为基，无限可能
              <span
                class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400"
              >
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          <!-- End Announcement Banner -->

          <!-- Title -->
          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1
              class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200"
            >
              共同构建
              <span
                class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                >新一代IDC产品</span
              >
            </h1>
          </div>
          <!-- End Title -->

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-neutral-400">
              AcmeCloud 系一个优秀的软件服务提供商，拥有 5 年 IDC
              经验，汇聚前沿，云启未来，极致云厚积薄发，愿与千百厂商推动技术革新，赋能上云
            </p>
          </div>

          <!-- Buttons -->
          <div class="mt-8 gap-3 flex justify-center">
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              即刻开始
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <button
              type="button"
              class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              $ npm i acmecloud
              <span
                class="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400"
              >
                <svg
                  class="flex-shrink-0 size-4 group-hover:rotate-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path
                    d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                  />
                </svg>
              </span>
            </button>
          </div>
          <!-- End Buttons -->

          <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <!--<span class="text-sm text-gray-600 dark:text-neutral-400">Package Manager:</span>
      <span class="text-sm font-bold text-gray-900 dark:text-white">npm</span>
      <svg class="size-5 text-gray-300 dark:text-neutral-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
      </svg>-->
            <a
              class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              安装指南
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- End Hero -->

      <!-- Features -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
          <div class="lg:col-span-4">
            <!-- Stats -->
            <div class="lg:pe-6 xl:pe-12">
              <p class="text-6xl font-bold leading-10 text-blue-600">
                92%
                <span
                  class="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                    />
                  </svg>
                  +7% this month
                </span>
              </p>
              <p class="mt-2 sm:mt-3 text-gray-500 dark:text-neutral-500">
                of U.S. adults have bought from businesses using Space
              </p>
            </div>
            <!-- End Stats -->
          </div>
          <!-- End Col -->

          <div
            class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-neutral-700"
          >
            <div
              class="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8"
            >
              <!-- Stats -->
              <div>
                <p class="text-3xl font-semibold text-blue-600">99.95%</p>
                <p class="mt-1 text-gray-500 dark:text-neutral-500">
                  in fulfilling orders
                </p>
              </div>
              <!-- End Stats -->

              <!-- Stats -->
              <div>
                <p class="text-3xl font-semibold text-blue-600">2,000+</p>
                <p class="mt-1 text-gray-500 dark:text-neutral-500">
                  partner with Preline
                </p>
              </div>
              <!-- End Stats -->

              <!-- Stats -->
              <div>
                <p class="text-3xl font-semibold text-blue-600">85%</p>
                <p class="mt-1 text-gray-500 dark:text-neutral-500">
                  this year alone
                </p>
              </div>
              <!-- End Stats -->
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Features -->

      <!-- Icon Blocks -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="10" height="14" x="3" y="8" rx="2" />
                <path
                  d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
                />
                <path d="M8 18h.01" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Responsive
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Responsive, and mobile-first project on the web
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Customizable
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Components are easily customized and extendable
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Documentation
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Every component and plugin is well documented
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"
                />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                24/7 Support
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
          <!-- End Icon Block -->
        </div>
      </div>
      <!-- End Icon Blocks -->

      <!-- Features -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="aspect-w-16 aspect-h-7">
          <img
            class="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Image Description"
          />
        </div>

        <!-- Grid -->
        <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="lg:col-span-1">
            <h2
              class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200"
            >
              We tackle the challenges start-ups face
            </h2>
            <p class="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
              Besides working with start-up enterprises as a partner for
              digitalization, we have built enterprise products for common pain
              points that we have encountered in various products and projects.
            </p>
          </div>
          <!-- End Col -->

          <div class="lg:col-span-2">
            <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
              <!-- Icon Block -->
              <div class="flex gap-x-5">
                <svg
                  class="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
                <div class="grow">
                  <h3
                    class="text-lg font-semibold text-gray-800 dark:text-white"
                  >
                    Creative minds
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-neutral-400">
                    We choose our teams carefully. Our people are the secret to
                    great work.
                  </p>
                </div>
              </div>
              <!-- End Icon Block -->

              <!-- Icon Block -->
              <div class="flex gap-x-5">
                <svg
                  class="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 10v12" />
                  <path
                    d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
                  />
                </svg>
                <div class="grow">
                  <h3
                    class="text-lg font-semibold text-gray-800 dark:text-white"
                  >
                    Simple and affordable
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-neutral-400">
                    From boarding passes to movie tickets, there's pretty much
                    nothing you can't store with Preline.
                  </p>
                </div>
              </div>
              <!-- End Icon Block -->

              <!-- Icon Block -->
              <div class="flex gap-x-5">
                <svg
                  class="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <div class="grow">
                  <h3
                    class="text-lg font-semibold text-gray-800 dark:text-white"
                  >
                    Industry-leading documentation
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-neutral-400">
                    Our documentation and extensive Client libraries contain
                    everything a business needs to build a custom integration.
                  </p>
                </div>
              </div>
              <!-- End Icon Block -->

              <!-- Icon Block -->
              <div class="flex gap-x-5">
                <svg
                  class="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div class="grow">
                  <h3
                    class="text-lg font-semibold text-gray-800 dark:text-white"
                  >
                    Designing for people
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-neutral-400">
                    We actively pursue the right balance between functionality
                    and aesthetics, creating delightful experiences.
                  </p>
                </div>
              </div>
              <!-- End Icon Block -->
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Features -->

      <!-- Card Blog -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card -->
          <div
            class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div
              class="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl"
            >
              <svg
                class="size-28"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="10" fill="white" />
                <path
                  d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z"
                  fill="url(#paint0_linear_2204_541)"
                />
                <path
                  d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z"
                  fill="#2684FF"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2204_541"
                    x1="24.734"
                    y1="29.2284"
                    x2="16.1543"
                    y2="44.0429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stop-color="#0052CC" />
                    <stop offset="0.92" stop-color="#2684FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="p-4 md:p-6">
              <span
                class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"
              >
                Atlassian API
              </span>
              <h3
                class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white"
              >
                Atlassian
              </h3>
              <p class="mt-3 text-gray-500 dark:text-neutral-500">
                A software that develops products for software developers and
                developments.
              </p>
            </div>
            <div
              class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700"
            >
              <a
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                View sample
              </a>
              <a
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div
            class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div
              class="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl"
            >
              <svg
                class="size-28"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="10" fill="white" />
                <g clip-path="url(#clip0_2204_541)">
                  <path
                    d="M37.0409 28.8697C33.1968 28.8697 30.0811 31.9854 30.0811 35.8288C30.0811 39.6726 33.1968 42.789 37.0409 42.789C40.8843 42.789 44 39.6726 44 35.8288C44 31.9854 40.8843 28.8697 37.0409 28.8697ZM18.9594 28.8701C15.116 28.8704 12 31.9854 12 35.8292C12 39.6726 15.116 42.7886 18.9594 42.7886C22.8032 42.7886 25.9192 39.6726 25.9192 35.8292C25.9192 31.9854 22.8032 28.8701 18.9591 28.8701H18.9594ZM34.9595 20.1704C34.9595 24.0138 31.8438 27.1305 28.0004 27.1305C24.1563 27.1305 21.0406 24.0138 21.0406 20.1704C21.0406 16.3269 24.1563 13.2109 28.0003 13.2109C31.8438 13.2109 34.9591 16.3269 34.9591 20.1704H34.9595Z"
                    fill="url(#paint0_radial_2204_541)"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_2204_541"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)"
                  >
                    <stop offset="0%" stop-color="#FFB900" />
                    <stop offset="0.6" stop-color="#F95D8F" />
                    <stop offset="0.999" stop-color="#F95353" />
                  </radialGradient>
                  <clipPath id="clip0_2204_541">
                    <rect
                      width="32"
                      height="29.5808"
                      fill="white"
                      transform="translate(12 13.2096)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="p-4 md:p-6">
              <span
                class="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500"
              >
                Asana API
              </span>
              <h3
                class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white"
              >
                Asana
              </h3>
              <p class="mt-3 text-gray-500 dark:text-neutral-500">
                Track tasks and projects, use agile boards, measure progress.
              </p>
            </div>
            <div
              class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700"
            >
              <a
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                View sample
              </a>
              <a
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div
            class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div
              class="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl"
            >
              <svg
                class="size-28"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="10" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.7326 11.968C21.9637 11.9693 20.5321 13.4049 20.5334 15.1738C20.5321 16.9427 21.965 18.3782 23.7339 18.3795H26.9345V15.1751C26.9358 13.4062 25.5029 11.9706 23.7326 11.968C23.7339 11.968 23.7339 11.968 23.7326 11.968M23.7326 20.5184H15.2005C13.4316 20.5197 11.9987 21.9553 12 23.7242C11.9974 25.4931 13.4303 26.9286 15.1992 26.9312H23.7326C25.5016 26.9299 26.9345 25.4944 26.9332 23.7255C26.9345 21.9553 25.5016 20.5197 23.7326 20.5184V20.5184Z"
                  fill="#36C5F0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.0001 23.7242C44.0014 21.9553 42.5684 20.5197 40.7995 20.5184C39.0306 20.5197 37.5977 21.9553 37.599 23.7242V26.9312H40.7995C42.5684 26.9299 44.0014 25.4944 44.0001 23.7242ZM35.4666 23.7242V15.1738C35.4679 13.4062 34.0363 11.9706 32.2674 11.968C30.4985 11.9693 29.0656 13.4049 29.0669 15.1738V23.7242C29.0643 25.4931 30.4972 26.9286 32.2661 26.9312C34.035 26.9299 35.4679 25.4944 35.4666 23.7242Z"
                  fill="#2EB67D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.2661 44.0322C34.035 44.0309 35.4679 42.5953 35.4666 40.8264C35.4679 39.0575 34.035 37.622 32.2661 37.6207H29.0656V40.8264C29.0642 42.594 30.4972 44.0295 32.2661 44.0322ZM32.2661 35.4804H40.7995C42.5684 35.4791 44.0013 34.0436 44 32.2747C44.0026 30.5058 42.5697 29.0702 40.8008 29.0676H32.2674C30.4985 29.0689 29.0656 30.5045 29.0669 32.2734C29.0656 34.0436 30.4972 35.4791 32.2661 35.4804V35.4804Z"
                  fill="#ECB22E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 32.2746C11.9987 34.0435 13.4316 35.479 15.2005 35.4804C16.9694 35.479 18.4024 34.0435 18.401 32.2746V29.0688H15.2005C13.4316 29.0702 11.9987 30.5057 12 32.2746ZM20.5334 32.2746V40.825C20.5308 42.5939 21.9637 44.0295 23.7326 44.0321C25.5016 44.0308 26.9345 42.5952 26.9332 40.8263V32.2772C26.9358 30.5083 25.5029 29.0728 23.7339 29.0702C21.9637 29.0702 20.5321 30.5057 20.5334 32.2746C20.5334 32.2759 20.5334 32.2746 20.5334 32.2746Z"
                  fill="#E01E5A"
                />
              </svg>
            </div>
            <div class="p-4 md:p-6">
              <span
                class="block mb-1 text-xs font-semibold uppercase text-amber-500"
              >
                Slack API
              </span>
              <h3
                class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white"
              >
                Slack
              </h3>
              <p class="mt-3 text-gray-500 dark:text-neutral-500">
                Email collaboration and email service desk made easy.
              </p>
            </div>
            <div
              class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700"
            >
              <a
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                View sample
              </a>
              <a
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->

      <!-- FAQ -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2">
            <div class="max-w-xs">
              <h2
                class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
              >
                Frequently<br />asked questions
              </h2>
              <p
                class="mt-1 hidden md:block text-gray-600 dark:text-neutral-400"
              >
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>
          <!-- End Col -->

          <div class="md:col-span-3">
            <!-- Accordion -->
            <div
              class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700"
            >
              <div
                class="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  Can I cancel at anytime?
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p class="text-gray-600 dark:text-neutral-400">
                    Yes, you can cancel anytime no questions are asked while you
                    cancel but we would highly appreciate if you will give us
                    some feedback.
                  </p>
                </div>
              </div>

              <div
                class="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  My team has credits. How do we use them?
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p class="text-gray-600 dark:text-neutral-400">
                    Once your team signs up for a subscription plan. This is
                    where we sit down, grab a cup of coffee and dial in the
                    details.
                  </p>
                </div>
              </div>

              <div
                class="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                >
                  How does Preline's pricing work?
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <p class="text-gray-600 dark:text-neutral-400">
                    Our subscriptions are tiered. Understanding the task at hand
                    and ironing out the wrinkles is key.
                  </p>
                </div>
              </div>

              <div
                class="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                >
                  How secure is Preline?
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                >
                  <p class="text-gray-600 dark:text-neutral-400">
                    Protecting the data you trust to Preline is our first
                    priority. This part is really crucial in keeping the project
                    in line to completion.
                  </p>
                </div>
              </div>

              <div
                class="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                >
                  How do I get access to a theme I purchased?
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                >
                  <p class="text-gray-600 dark:text-neutral-400">
                    If you lose the link for a theme you purchased, don't panic!
                    We've got you covered. You can login to your account, tap
                    your avatar in the upper right corner, and tap Purchases. If
                    you didn't create a login or can't remember the information,
                    you can use our handy Redownload page, just remember to use
                    the same email you originally made your purchases with.
                  </p>
                </div>
              </div>

              <div
                class="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-six"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                >
                  Upgrade License Type
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                >
                  <p class="text-gray-600 dark:text-neutral-400">
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Accordion -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End FAQ -->

      <!-- ========== FOOTER ========== -->
      <footer
        class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div class="col-span-full hidden lg:col-span-1 lg:block">
            <a
              class="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
              >Brand</a
            >
            <p
              class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400"
            >
              © 2022 Preline.
            </p>
          </div>
          <!-- End Col -->

          <div>
            <h4
              class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100"
            >
              Product
            </h4>

            <div class="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Pricing</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Changelog</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Docs</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Download</a
                >
              </p>
            </div>
          </div>
          <!-- End Col -->

          <div>
            <h4
              class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100"
            >
              Company
            </h4>

            <div class="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >About us</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Blog</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Careers</a
                >
                <span class="inline text-blue-600 dark:text-blue-500"
                  >— We're hiring</span
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Customers</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Newsroom</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Sitemap</a
                >
              </p>
            </div>
          </div>
          <!-- End Col -->

          <div>
            <h4
              class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100"
            >
              Resources
            </h4>

            <div class="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Community</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Help & Support</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >eBook</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >What's New</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Status</a
                >
              </p>
            </div>
          </div>
          <!-- End Col -->

          <div>
            <h4
              class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100"
            >
              Developers
            </h4>

            <div class="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Api</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Status</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >GitHub</a
                >
                <span class="inline text-blue-600 dark:text-blue-500"
                  >— New</span
                >
              </p>
            </div>

            <h4
              class="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100"
            >
              Industries
            </h4>

            <div class="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Financial Services</a
                >
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Education</a
                >
              </p>
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->

        <div class="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
          <div class="sm:flex sm:justify-between sm:items-center">
            <div class="flex items-center gap-x-3">
              <!-- Language Dropdown -->
              <div
                class="hs-dropdown [--placement:top-left] relative inline-flex"
              >
                <button
                  id="footer-language-dropdown"
                  type="button"
                  class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  <svg
                    class="size-3 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us1"
                    viewBox="0 0 512 512"
                  >
                    <g fill-rule="evenodd">
                      <g stroke-width="1pt">
                        <path
                          fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                      </g>
                      <path
                        fill="#192f5d"
                        d="M0 0h98.8v70H0z"
                        transform="scale(3.9385)"
                      />
                      <path
                        fill="#fff"
                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                        transform="scale(3.9385)"
                      />
                    </g>
                  </svg>
                  English (US)
                  <svg
                    class="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                  aria-labelledby="footer-language-dropdown"
                >
                  <a
                    class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <svg
                      class="size-3.5 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd">
                        <g stroke-width="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                  </a>
                  <a
                    class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <svg
                      class="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    Deutsch
                  </a>
                  <a
                    class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <svg
                      class="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-dk"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                      <path fill="#fff" d="M144 0h73.1v512H144z" />
                      <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                    </svg>
                    Dansk
                  </a>
                  <a
                    class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <svg
                      class="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                      </g>
                    </svg>
                    Italiano
                  </a>
                  <a
                    class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <svg
                      class="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                    >
                      <defs>
                        <path
                          id="a"
                          fill="#ffde00"
                          d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                        />
                      </defs>
                      <path fill="#de2910" d="M0 0h512v512H0z" />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        xlink:href="#a"
                      />
                    </svg>
                    中文 (繁體)
                  </a>
                </div>
              </div>
              <!-- End Language Dropdown -->

              <div class="space-x-4 text-sm ms-4">
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Terms</a
                >
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Privacy</a
                >
                <a
                  class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                  >Status</a
                >
              </div>
            </div>

            <div class="flex justify-between items-center">
              <div class="mt-3 sm:hidden">
                <a
                  class="flex-none text-xl font-semibold dark:text-white"
                  href="#"
                  aria-label="Brand"
                  >Brand</a
                >
                <p
                  class="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400"
                >
                  © 2022 Preline.
                </p>
              </div>

              <!-- Social Brands -->
              <div class="space-x-4">
                <a
                  class="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </a>
                <a
                  class="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
                <a
                  class="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
                    />
                  </svg>
                </a>
              </div>
              <!-- End Social Brands -->
            </div>
            <!-- End Col -->
          </div>
        </div>
      </footer>
      <!-- ========== END FOOTER ========== -->
    </div>
  </NuxtLayout>
</template>
