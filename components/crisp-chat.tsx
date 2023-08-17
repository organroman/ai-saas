"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("72b7d2bc-2553-47dd-9eb4-ec4a31116db9");
  }, []);
  return null;
};

export default CrispChat;
