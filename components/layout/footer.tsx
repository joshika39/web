import Link from "@/toolkit/components/custom/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import ALogoDark from '@/public/a-logo-onlight.png';
import ALogoLight from '@/public/a-logo-ondark.png';
import ThemedImage from "@/toolkit/components/themed-image";
import LogoDark from "@/public/logo-dark.png";

export default function Footer() {
  return (
    <footer
      className="bottom-0 flex w-full items-center justify-between flex-col p-4 gap-4 border-t bg-background">
      <div className="flex flex-wrap w-full max-w-4xl gap-2 sm:gap-4 sm:justify-around justify-center items-center">
        <ThemedImage
          darkImage={LogoDark}
          lightImage={Logo}
          alt={"logo"}
          className={'w-20'}
        />
        <Link
          href={'https://ablaze.one'}
          className='mx-6 md:mx-0'
        >
          <ThemedImage
            darkImage={ALogoLight}
            lightImage={ALogoDark}
            alt={"ablaze"}
            className={'w-20'}
          />
        </Link>
        <p className={'text-center text-sm text-neutral-600 dark:text-gray-50'}>
          &copy;{new Date().getFullYear()} Floorp Browser
        </p>
      </div>
    </footer>
  )
}