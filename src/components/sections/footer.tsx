import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-screen bg-secondary-background border-t-4 border-border">
      <div className="mx-auto p-8 flex flex-row gap-1">
        <div className="font-jersey text-xl">
          © {year} Dimas Rangga | Built with
        </div>
        <Heart fill="currentColor" size={16} className="self-center" />
      </div>
    </footer>
  );
};

export default Footer;
