import Link from "next/link";

function Footer() {
  const links = [
    {
      title: "About",
      links: [
        { label: "Company", href: "/company" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Help Center", href: "/help-center" },
        { label: "FAQ", href: "/faq" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    {
      title: "HELP",
      links: [
        { label: "How to use", href: "/how-to-use" },
        { label: "Troubleshooting", href: "/troubleshooting" },
        { label: "System Status", href: "/system-status" },
        { label: "Account Settings", href: "/account-settings" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "SOCIAL",
      links: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "YouTube", href: "https://youtube.com" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-red-400 py-12 shadow-lg border-t border-gray-700">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {links.map((link) => {
          return (
            <div key={link.title} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">{link.title}</h3>
              {link.links.map((subLink) => (
                <div key={subLink.label}>
                  <Link href={subLink.href}>
                    {subLink.label}
                  </Link>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://facebook.com" className="text-gray-400 hover:text-teal-400" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Facebook</span> 
        </a>
        <a href="https://twitter.com" className="text-gray-400 hover:text-teal-400" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Twitter</span> 
        </a>
        <a href="https://instagram.com" className="text-gray-400 hover:text-teal-400" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Instagram</span> 
        </a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-teal-400" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">LinkedIn</span> 
        </a>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Airbnb. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
