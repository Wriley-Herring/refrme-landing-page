import Link from "next/link";
import Image from "next/image";
import RefrmeLogo from "@/public/images/ReferMe_logo.png"; // Adjust the path as needed

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
       <Image
                className="box-content"
                src={RefrmeLogo}
                width={28}
                height={28}
                alt="Refrme Logo"
              />
    </Link>
  );
}