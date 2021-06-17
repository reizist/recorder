import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBell, faHashtag, faHome } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import Link from "next/link";

export default function LeftMenu() {
  return (
    <div className="flex flex-col items-baseline justify-center ml-10">
      <div className="pb-6">
        <span className="mr-8 tracking-wider">
          <Link href="/calc">
            <a className="hover:no-underline hover:text-purple-700">
              計算ドリルジェネレータ
            </a>
          </Link>
        </span>
      </div>

      <div className="pb-6">
        <span className="mr-8 tracking-wider">
          <a
            href="#"
            class="text-grey-dark hover:no-underline hover:text-purple-700"
          >
            漢字ドリルジェネレータ
          </a>
        </span>
      </div>
    </div>
  );
}
