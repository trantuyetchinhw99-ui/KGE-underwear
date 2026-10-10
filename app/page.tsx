
const products = [
  {
    name: "Seamless Everyday Brief",
    thai: "กางเกงชั้นในไร้ตะเข็บ",
    price: 290,
    color: "Sand",
    image: "/images/bra1.jpg",
  },
  {
    name: "Soft Cotton Brief",
    thai: "กางเกงชั้นในผ้าคอตตอน",
    price: 250,
    color: "Cream",
    image: "/images/bra2.jpg",
  },
  {
    name: "Everyday Comfort Bra",
    thai: "เสื้อชั้นในใส่สบาย",
    price: 490,
    color: "Black",
    image: "/images/bra3.jpg",
  },
  {
    name: "Soft Touch Collection",
    thai: "คอลเลกชันสัมผัสนุ่ม",
    price: 350,
    color: "Rose",
    image: "/images/bra4.jpg",
  },
];

const money = (price: number) =>
  `฿${price.toLocaleString("en-US")}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#302821]">
      <div className="bg-[#302821] px-4 py-2 text-center text-xs tracking-widest text-white">
        FREE SHIPPING ON ORDERS OVER ฿999
      </div>

      <header className="flex items-center justify-between border-b border-[#E8E1D8] px-5 py-5 md:px-12">
        <button
          aria-label="Open menu"
          className="text-sm tracking-widest"
        >
          ☰ MENU
        </button>

        <a
          href="/"
          className="text-xl font-semibold tracking-[0.25em] md:text-2xl"
        >
          KGE
          <span className="ml-2 font-light">UNDERWEAR</span>
        </a>

        <a href="/cart" className="text-sm tracking-wider">
          BAG (0)
        </a>
      </header>

      <section className="grid min-h-[480px] md:min-h-[580px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-7 py-16 md:px-16 lg:px-24">
          <p className="mb-5 text-xs tracking-[0.3em] text-[#8D7764]">
            COMFORT IN EVERY DETAIL
          </p>

          <h1 className="max-w-lg text-5xl font-light leading-tight md:text-6xl">
            Feel good.
            <br />
            Feel like you.
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#766B60]">
            Everyday underwear designed for your comfort,
            confidence and every little moment.
          </p>

          <a
            href="#products"
            className="mt-9 w-fit bg-[#302821] px-8 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#655344]"
          >
            SHOP COLLECTION →
          </a>
        </div>

        <div className="flex min-h-[340px] items-center justify-center bg-[#EAE0D4] p-8 md:min-h-0">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] text-[#8D7764]">
              KGE UNDERWEAR
            </p>
            <p className="mt-5 text-4xl font-light leading-relaxed md:text-5xl">
              SIMPLE
              <br />
              SOFT
              <br />
              YOURS
            </p>
            <p className="mt-5 text-xs tracking-widest">
              YOUR EVERYDAY ESSENTIALS
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-12 md:py-20">
        <div className="mb-8 text-center">
          <p className="text-xs tracking-[0.25em] text-[#8D7764]">
            MADE FOR EVERYDAY
          </p>
          <h2 className="mt-3 text-3xl font-light">
            Find your comfort
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {[
            ["01", "PANTIES", "กางเกงชั้นใน"],
            ["02", "BRAS", "เสื้อชั้นใน"],
            ["03", "SEAMLESS", "ไร้ตะเข็บ"],
            ["04", "BEST SELLERS", "สินค้าขายดี"],
          ].map(([number, title, subtitle]) => (
            <a
              key={number}
              href="#products"
              className="flex min-h-36 flex-col justify-between bg-[#EEE7DE] p-5 transition hover:bg-[#E4D8CA] md:min-h-44 md:p-7"
            >
              <span className="text-xs text-[#8D7764]">{number}</span>
              <div>
                <h3 className="text-sm tracking-widest">{title}</h3>
                <p className="mt-2 text-xs text-[#766B60]">
                  {subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="products" className="px-5 pb-16 md:px-12 md:pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#8D7764]">
              YOUR DAILY FAVORITES
            </p>
            <h2 className="mt-3 text-3xl font-light">
              Best sellers
            </h2>
          </div>
          <span className="text-xs text-[#766B60]">
            04 PRODUCTS
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
          {products.map((product) => (
            <article key={product.name}>
              <a href="#products" className="block overflow-hidden bg-[#EEE7DE]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </a>

              <div className="pt-4">
                <p className="text-[10px] tracking-wider text-[#8D7764]">
                  {product.color.toUpperCase()}
                </p>
                <h3 className="mt-2 text-sm">{product.name}</h3>
                <p className="mt-1 text-xs text-[#766B60]">
                  {product.thai}
                </p>
                <p className="mt-3 text-sm font-medium">
                  {money(product.price)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#EAE0D4] px-6 py-16 text-center md:py-24">
        <p className="text-xs tracking-[0.3em] text-[#8D7764]">
          THE KGE PROMISE
        </p>
        <h2 className="mt-4 text-3xl font-light md:text-4xl">
          Comfort is always in style.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#766B60]">
          Thoughtful essentials. Everyday comfort.
          Made to be part of your life.
        </p>
      </section>

      <footer className="bg-[#302821] px-6 py-10 text-center text-white">
        <p className="text-lg tracking-[0.25em]">KGE UNDERWEAR</p>
        <p className="mt-3 text-xs text-[#D0C3B5]">
          YOUR COMFORT, YOUR EVERYDAY.
        </p>
        <p className="mt-8 text-[10px] text-[#BFB2A4]">
          © 2026 KGE UNDERWEAR. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}

