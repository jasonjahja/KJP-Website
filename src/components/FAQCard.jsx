import { useEffect, useRef, useState } from "react";
import chevronDown from "../assets/icons/chevron_down.svg";

export default function FaqCard({ question, answer, isOpen, onToggle }) {
  const [openInternal, setOpenInternal] = useState(false);

  const open = typeof isOpen === "boolean" ? isOpen : openInternal;

  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggle = () => {
    if (onToggle) onToggle();
    else setOpenInternal((prev) => !prev);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    if (open) setHeight(contentRef.current.scrollHeight);
    else setHeight(0);
  }, [open]);

  return (
    <div className="border-b border-bw5 text-bw8">
      <button
        type="button"
        onClick={toggle}
        className="w-full px-5 xl:px-15 py-15 xl:py-25 text-left flex flex-col hover:cursor-pointer"
      >
        {/* Row: Question + Chevron */}
        <div className="w-full flex items-center justify-between">
          <h3 className="text-s1 xl:text-h6 pr-5">{question}</h3>

          <img
            src={chevronDown}
            alt="toggle"
            className={`w-30 w-[20px] shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {/* Answer below */}
        <div
          style={{ height: `${height}px` }}
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
        >
          <div ref={contentRef} className="pt-15">
            <p className="text-b5 xl:text-b2 text-bw7">{answer}</p>
          </div>
        </div>
      </button>
    </div>
  );
}
