import * as React from "react";

import { Style } from "./style";

import { ClaimStatusCard } from "./claimStatusCard/ClaimStatusCard";
import { Navbar } from "./Navbar/Navbar";

export const ClaimStatus = () => {
  const classes = Style();

  return (
    <>
      <Navbar />
      <ClaimStatusCard />
    </>
  );
};
