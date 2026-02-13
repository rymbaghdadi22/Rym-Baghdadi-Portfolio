const Footer = () => (
  <footer className="section-padding py-8 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading font-bold text-gradient text-lg">RB</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rym Baghdadi. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
