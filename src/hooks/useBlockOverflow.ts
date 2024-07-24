import React from "react";

export const useBlockOverflow = (isOpen: boolean) => {
  React.useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0];
    if (body === null) return;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);
};
