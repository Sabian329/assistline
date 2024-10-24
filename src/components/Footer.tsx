export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="flex flex-col content-center items-center gap-5 mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-16 lg:px-8">
        <div className="flex flex-col">
          <a
            href="tel: +48662921107"
            className="text-white/80 hover:text-white"
          >
            tel. 662921107
          </a>
          <a
            href="mailto: kontakt@assistline.pl"
            className="text-white/80 hover:text-white"
          >
            kontakt@assistline.pl
          </a>
        </div>
        <div>
          <p className="text-white/50">© ASSISTLINE.PL 2024</p>
          <p className="text-white/30">ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
