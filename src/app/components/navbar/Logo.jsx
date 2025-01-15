import * as React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 text-lg">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1503f77099f8cb0131579227d31cc48bd4e934ed98af999f4e38c9f4f52da790?apiKey=5f097db1344b45feb8fabd3088776b44&"
        className="object-contain aspect-square w-24"
        alt="IETE Student Forum Logo"
      />
      <div>
        <span className="font-semibold text-white text-xl">IETE Student Forum</span>
        <br />
        <span className="text-orange-400 text-lg">Amrita Coimbatore</span>
      </div>
    </div>
  );
}
