import * as React from "react";

export default function NavigationItem({ text }) {
  return (
    <div
      className="cursor-pointer hover:text-orange-400 transition-colors"
      tabIndex="0"
      role="button"
    >
      {text}
    </div>
  );
}
