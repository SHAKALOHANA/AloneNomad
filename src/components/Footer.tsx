import {
	FooterContainer,
	FooterMenu,
	SocialMedia,
	FooterLink,
  containerBlock,
  whiteSpace,
} from "./Footer.css";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
	<footer className={FooterContainer}>
    <div className={containerBlock}>
      <div className={whiteSpace}>©codeit - 2024</div>
      <div className={FooterMenu}>
        <Link href="/privacy" className={FooterLink}>
          Privacy Policy
        </Link>
        <Link href="/faq" className={FooterLink}>
          FAQ
        </Link>
      </div>
      <div className={SocialMedia}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="글로벌 노마드 페이스북"
        >
          <Image
            src="/icons/facebookLogo.svg"
            alt="페이스북"
            width={20}
            height={20}
            priority
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="글로벌 노마드 트위터"
        >
          <Image
            src="/icons/twitterLogo.svg"
            alt="트위터"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="글로벌 노마드 유튜브"
        >
          <Image
            src="/icons/youtubeLogo.svg"
            alt="유튜브"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="글로벌 노마드 인스타그램"
        >
          <Image
            src="/icons/instagramLogo.svg"
            alt="인스타그램"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
	</footer>
);

export default Footer;
