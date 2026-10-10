

import { CircleUserRound } from "lucide-react";

type Komentar = {
  nama: string,
  jabatan: string,
  pesan: string,
  waktu: string
}

const komentar: Komentar = {
  nama: "Liam",
  jabatan: "Product Designer",
  pesan:
    "The only thing left is to get the final illustration, and then we are ready to launch!",
  waktu: "00:05:39",
}

function App() {

  return (
    <div className="p-10 max-md:p-4 bg-gradient-to-r from-blue-400 to-pink-500">

      <header className="w-full bg-white border-b border-gray-100 rounded-t-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo kiri */}
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <span>Nova</span>
          </a>

          {/* Menu tengah */}
          <div className="flex items-center gap-8 text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-purple-600">
              How it works
            </a>
            <a href="#use-cases" className="hover:text-purple-600">
              Use cases
            </a>
            <a href="#features" className="hover:text-purple-600">
              Features
            </a>
            <a href="#pricing" className="hover:text-purple-600">
              Pricing
            </a>
            <a href="#faq" className="hover:text-purple-600">
              FAQ
            </a>
          </div>

          <div>
            <CircleUserRound size={24} />
          </div>

        </nav>

      </header>

      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-22 h-150 max-md:h-auto py-5 px-6 lg:py-11 lg:px-22 bg-white/85">

        <section className="flex flex-col md:gap-6 my-auto">
          <h1 className="text-6xl tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">AI analysis</span>
            <br />
            for real-time
            <br />
            discussions
          </h1>

          <p className="mt-4 text-base">
            Live AI records your meetings, recognizes who's speaking,
            and provides real-time insights and live recommendations
            — all without taking manual notes.
          </p>

          <div className="flex gap-3 mt-6 ">
            <button className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-blue-500 to-pink-500 cursor-pointer">
              ⊕ Start for free
            </button>

            <button className="border border-gray-400 px-4 py-2 rounded-xl cursor-pointer">
              Contact us
            </button>
          </div>

          <div className="flex gap-5 mt-5 text-xs ">
            <span>✓ 31-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </section>

        <section className="relative h-100 my-auto">
          <div className="absolute left-2 top-2 md:left-11 md:top-11">
            <img
              className="object-cover w-25 h-20 rounded-3xl"
              src="https://i.pravatar.cc/150?img=12"
              alt="Peserta meeting pertama"
            />
          </div>

          <div className="absolute right-2 top-2 md:right-11 md:top-11">
            <img
              className="object-cover w-25 h-20 rounded-3xl"
              src="https://i.pravatar.cc/150?img=47"
              alt="Peserta meeting kedua"
            />
          </div>

          <div className="absolute bottom-2 left-2 md:bottom-5 md:left-11">
            <img
              className="object-cover w-25 h-20 rounded-3xl"
              src="https://i.pravatar.cc/150?img=44"
              alt="Peserta meeting ketiga"
            />
          </div>

          <div className="absolute right-2 bottom-2 md:right-11 md:bottom-5">
            <img
              className="object-cover w-25 h-20 rounded-3xl"
              src="https://i.pravatar.cc/150?img=49"
              alt="Peserta meeting keempat"
            />
          </div>

          {/* KARTU ANALISIS AUDIO */}
          <div className="absolute w-50 h-55 px-3 pt-3 text-white rounded-t-xl left-1/2 -translate-x-1/2 bg-black ">
            <div className="flex justify-between">
              <span className="text-xs">End-of-Sprint</span>
              <span className="text-xs">•••</span>
            </div>

            <h3>Meeting</h3>

            <div className="mt-22">
              {Array.from({ length: 30 }, (_, index) => (
                <span
                  key={index}
                  style={{
                    height: `${10 + Math.random() * 25} px`,
                  }}
                />
              ))}
            </div>

            <div className="recording">
              <span className="recording-dot" />
              <span>{komentar.waktu}</span>
              <span className="analyzing">Analyzing...</span>
            </div>
          </div>

          {/* KARTU KOMENTAR */}
          <div className="absolute flex flex-col gap-2 w-[80%] p-5 rounded-2xl bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-5">
              <img className="w-11 rounded-full"
                src="https://i.pravatar.cc/100?img=12"
                alt="Foto profil pembicara"
              />

              <div className="flex flex-col">
                <strong>{komentar.nama}</strong>
                <small>{komentar.jabatan}</small>
              </div>
            </div>

            <p>{komentar.pesan}</p>

            <div className="flex justify-between">
              <span>AI summary</span>
              <span>♡ Helpful</span>
            </div>
          </div>

          <div className="absolute w-11 h-11 p-2 rounded-full text-white text-center left-1/2 -translate-x-1/2 bottom-11 bg-black">Ⅱ</div>
        </section>

      </div>
      <footer className="">
        <div className="w-full bg-white">
          {/* Promo */}
          <div className="flex justify-center items-center gap-2 py-2 text-[10px] text-gray-700">
            <p>
              Enjoy <span className="font-bold">50% off</span> premium features for first 3 months
              <span className="text-gray-400"> — 21 days remaining</span>
            </p>

            <span className="text-purple-500">◉ Start 14 days trial</span>
          </div>

          {/* Logo */}
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 font-bold text-sm">
              <span className="text-xl">◎</span>
              SHELLS
            </div>

            <div className="flex items-center gap-1.5 font-bold text-sm">
              <span className="text-xl">◆</span>
              SmartFinder
            </div>

            <div className="flex items-center gap-1.5 font-bold text-sm">
              <span className="text-xl">◉</span>
              Zoomerr
            </div>

            <div className="flex items-center gap-1.5 font-bold text-sm">
              <span className="text-xl">◐</span>
              kontrast
            </div>

            <div className="flex items-center gap-1.5 font-bold text-xs">
              <span className="text-xl">▥</span>
              WAVESMARATHON
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App;