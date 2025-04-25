import React from "react";
import PhoneIcon from "@/svg/PhoneIcon";
import EmailIcon from "@/svg/EmailIcon";
import LocationIcon from "@/svg/LocationIcon";
import { heroTexts } from "@/data/text";

function Header() {
  return (
    <ul className="p-4 flex max-w-[650px] justify-between">
      <li>
        <a
          href={`tel:${heroTexts.contact.phone}`}
          className="flex items-center space-x-2 group hover:text-indigo-600 h-12 -my-6 md:my-auto md:h-auto"
        >
          <PhoneIcon />
          <span>{heroTexts.contact.phone}</span>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${heroTexts.contact.email}`}
          className="flex items-center space-x-2 group hover:text-indigo-600 h-12 -my-6 md:my-auto md:h-auto"
        >
          <EmailIcon />
          <span>{heroTexts.contact.email}</span>
        </a>
      </li>
      <li>
        <button
          type="button"
          className="flex items-center space-x-2 group h-12 -my-6 md:my-auto md:h-auto"
        >
          <LocationIcon />
          <span>{heroTexts.contact.location}</span>
        </button>
      </li>
    </ul>
  );
}

export default Header;
