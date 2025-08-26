import { categories } from "@/app/data/categories/categories";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="md:hidden py-6 border-t border-border"
    >
      <div className="grid grid-cols-2 gap-3 px-2">
        {categories.map((category, i) => (
          <motion.div
            key={category.english}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/category/${category.english}`}
              onClick={onClose}
              className="block px-4 py-3 text-sm font-medium rounded-xl text-center 
                        bg-muted/50 hover:bg-primary/10 hover:text-primary 
                        transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {category.persian}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
