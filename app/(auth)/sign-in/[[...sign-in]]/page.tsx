import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white z-50 fixed top-0 w-full h-full">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="absolute top-0 left-0 h-full w-full z-10 bg-[#111] opacity-70"></div>
          <img
            alt=" store picture"
            src="/storefront.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />

          <div className="hidden lg:relative lg:block lg:p-12 z-20">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img src="/logo.svg" alt="store logo" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Your Store
            </h2>

            <p className="mt-4 mb-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className=" flex flex-col justify-center items-center gap-5 basis-1 max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <img src="/logo.svg" alt="store logo" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Your Store
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <SignIn path="/sign-in" />
          </div>
        </main>
      </div>
    </section>
  );
}
