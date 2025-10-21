import { motion } from "framer-motion";

export default function Hamburger({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  const lineProps = {
    className: "h-0.5 w-5 bg-foreground rounded-full", 
    transition: { duration: 0.3 },
  };

  return (
    <div
      className="md:hidden cursor-pointer flex flex-col justify-between h-5 w-5"
      onClick={toggle}
    >
      {/* Top Line */}
      <motion.span
        {...lineProps}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0, // smaller shift
        }}
      />
      {/* Middle Line */}
      <motion.span
        {...lineProps}
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
      />
      {/* Bottom Line */}
      <motion.span
        {...lineProps}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -10 : 0, // smaller shift
        }}
      />
    </div>
  );
}
