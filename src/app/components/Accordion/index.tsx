"use client";

import { useState } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
  openedId: string;
  id: string;
  handler: (e: any, id: any) => void;
};

const Accordion = ({ label, children, openedId, id, handler }: Props) => {
  const handleClick = (event: any) => {
    handler(event, id);
  };

  return (
    <details open={id === openedId}>
      <summary onClick={(e) => handleClick(e)}>{label}</summary>
      <div>{children}</div>
    </details>
  );
};

export default Accordion;

export const AccordionContainer = () => {
  const [open, setOpen] = useState<string>("");

  const handleClick = (event: any, id: string) => {
    event.preventDefault();
    setOpen(id);
  };
  return (
    <div>
      <Accordion id={"1"} openedId={open} label={"Text1"} handler={handleClick}>
        Content
      </Accordion>
      <Accordion id={"2"} openedId={open} label={"Text2"} handler={handleClick}>
        Content
      </Accordion>
      <Accordion id={"3"} openedId={open} label={"Text3"} handler={handleClick}>
        Content
      </Accordion>
    </div>
  );
};
