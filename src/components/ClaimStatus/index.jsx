import * as React from "react";

import { Style } from "./style";

import { ClaimStatusCard } from "./ClaimStatusCard";
import { Navbar } from "./Navbar";

export const ClaimStatus = () => {
  const classes = Style();

  return (
    <>
      <Navbar />
      <ClaimStatusCard />
    </>
  );
};
