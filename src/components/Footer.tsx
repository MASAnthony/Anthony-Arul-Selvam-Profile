import { portfolioData } from '../data/portfolio';

const Footer = () => {
    return (
      <footer className="py-8 bg-white border-t border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#64748B] text-sm font-medium">
            {portfolioData.footer.copyright}
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
