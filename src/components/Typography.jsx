import React, { ReactNode } from "react";

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  highlighted: "h2",
  p: "span",
  body: "span",
  "body-small": "span",
  small: "span",
};

const sizes = {
  h1: "text-[22px] xs:text-[30px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[60px] 2xl:text-[120px]",
  h2: "text-[41.25px] xs:text-[45px] sm:text-[50px] md:text-[55px] lg:text-[60px] xl:text-[65px] 2xl:text-[50px]",
  h3: "text-[31.5px] xs:text-[34.5px] sm:text-[38px] md:text-[40px] lg:text-[41px] xl:text-[42px] 2xl:text-[43px]",
  h4: "text-[30px] xs:text-[33px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]",
  h5: "text-[22px] xs:text-[24.5px] sm:text-[27px] md:text-[30px] lg:text-[31px] xl:text-[32px] 2xl:text-[33px]",
  h6: "text-[16px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[27px] xl:text-[28px] 2xl:text-[30px]",
  p: "text-[15px] xs:text-[16.5px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[20.5px]",
  body: "text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] xl:text-[17px] 2xl:text-[18px]",
  "body-small":
    "text-[10.5px] xs:text-[11.5px] sm:text-[12.5px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]",
  small:
    "text-[7.5px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[10.5px] xl:text-[11px] 2xl:text-[12px]",
  highlighted:
    "text-[22px] xs:text-[26px] xsx:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[39px] 2xl:text-[40px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold",
};

export const Typography = ({ variant, children, className = "" }) => {
  const sizeClasses = sizes[variant];
  const Tag = tags[variant];
  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
