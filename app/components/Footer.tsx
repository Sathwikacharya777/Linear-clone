import Link from "next/link";

const footerLinks = [
  {
    title: "Features",
    links: ["PCB Design", "IoT Solutions", "Embedded Systems", "Hardware Sync", "Security", "Inventory"],
  },
  {
    title: "Product",
    links: ["Engineers", "Inventory", "Pricing", "Changelog", "Documentation", "Download"],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/product" },
      { label: "Customers", href: "/customers" },
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: ["Community", "Status", "Startups", "Privacy", "Terms", "DPA"],
  },
  {
    title: "Connect",
    links: ["Contact us", "X (Twitter)", "GitHub", "YouTube", "LinkedIn"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/[0.05] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">

          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-black rotate-45" />
              </div>
              <span className="font-bold text-white tracking-tighter text-lg">
                Linear-Clone
              </span>
            </Link>
          </div>

          {/* Right Side: Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 w-full">
            {footerLinks.map((column, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-[13px] font-semibold text-white tracking-tight italic">
                  {column.title}
                </h4>

                <ul className="space-y-3">
                  {column.links.map((link, j) => {
                    const label = typeof link === "string" ? link : link.label;
                    const href =
                      typeof link === "string"
                        ? `/${link.toLowerCase().replace(/\s+/g, "-")}`
                        : link.href;

                    return (
                      <li key={j}>
                        <Link
                          href={href}
                          className="text-[13px] text-zinc-500 hover:text-white transition-colors duration-200"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-24 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-zinc-600 font-medium uppercase tracking-widest">
            © 2026 Linear-Clone Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            <span className="text-[11px] text-zinc-600 font-bold uppercase tracking-widest">
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
