import { getCategories } from "@/lib/constants";
import { Container } from "../container/Container";
import { Logo } from "../logo/Logo";
import { Spacer } from "../spacer/Spacer";

export function Footer() {
  const categories = getCategories();
  return (
    <footer className="bg-mikadoYellow rounded-t-lg shadow-lg  border-t border-accent-2">
      <Container>
        <div className="py-10 grid grid-cols-6">
          <Spacer height="14" />
          <div className="flex items-center justify-between min-w-max">
            <Logo />
            <p>Thanks for reading!</p>
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col justify-between ">
            <span className="font-sans font-semibold text-lg">Tutorial</span>
            <div className="flex flex-col">
              {categories?.map((category) => (
                <a key={category} href="">
                  {category}
                </a>
              ))}
            </div>
          </div>
          <div>
            <span className="font-sans font-semibold text-lg">Links</span>
            <div className="flex flex-col">
              <a href="">Twitter</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <p className="py-4 text-center">
          © 2022-present Vincent Boursicot. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

Footer.displayName = "Footer";
