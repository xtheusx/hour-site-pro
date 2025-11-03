import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto">
        <img src={logo} alt="Site 1h" className="w-32 h-32 object-contain" />
      </div>
    </header>
  );
};

export default Header;
