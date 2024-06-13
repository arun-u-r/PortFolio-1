
const Footer = () => {
  return (
    <footer className="bg-teritary py-12 border-t border-neutral-800">
      <div className=" mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <a href="/">
        <img src='/public/urLogoDark.svg' width={64} height={54}  alt="ur" />
          </a>
          {/* Copyright and Legal Mumbo Jumbo */}
          <div className="">
            Copyright &copy; arun UR.&nbsp;{new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
