import { PropsWithChildren } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Meta } from "../meta/Meta";
import { Spacer } from "../spacer/Spacer";
import { Wrapper } from "../wrapper/Wrapper";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  isPost?: boolean;
}

export function Layout({ children, home, isPost }: LayoutProps) {
  return (
    <>
      <Meta />
      {home ? (
        <>
          <Wrapper height="min-h-min z-3">
            <div style={{ minHeight: "48px", minWidth: "48px" }}></div>
            <Header />
            <div style={{ minHeight: "48px", minWidth: "48px" }}></div>
          </Wrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={120}
            preserveAspectRatio="none"
            width="100%"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FEC601"
              fillOpacity="1"
              d="M0,288L24,277.3C48,267,96,245,144,234.7C192,224,240,224,288,197.3C336,171,384,117,432,90.7C480,64,528,64,576,101.3C624,139,672,213,720,213.3C768,213,816,139,864,106.7C912,75,960,85,1008,74.7C1056,64,1104,32,1152,32C1200,32,1248,64,1296,96C1344,128,1392,160,1416,176L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
          <Main>{children}</Main>
          <Footer />
        </>
      ) : isPost ? (
        <>
          <Wrapper height="min-h-min z-3" isPost={true}>
            <Header isPost={true} />
          </Wrapper>
          {children}
          <Footer />
        </>
      ) : (
        <>
          <Wrapper height="min-h-min z-3">
            <Divider />
            <Header />
            <Divider />
          </Wrapper>
          <Main>{children}</Main>
          <Footer />
        </>
      )}
    </>
  );
}

const Divider = () => (
  <div style={{ minHeight: "48px", minWidth: "48px" }}></div>
);

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main
      className="flex-1 grid"
      style={{
        gap: "64px 96px",
        width: "100%",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      {children}
    </main>
  );
};
