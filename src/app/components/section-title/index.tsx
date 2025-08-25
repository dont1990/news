import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return <p className="text-2xl mb-6 border-b border-border pb-2">{title}</p>;
};

export default SectionTitle;
