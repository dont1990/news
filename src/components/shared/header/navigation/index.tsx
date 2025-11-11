import React, { Dispatch, SetStateAction, Suspense } from "react";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";
import Container from "../../container";
import { navItems } from "@/constants/navigation/nav-items";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }: Props) => {
  useBodyScrollLock(isMobileMenuOpen);

  return (
    <div className="bg-muted/30 border-t border-border">
      <Container paddingY="py-0">
        <Suspense fallback={"loading"}>
          <DesktopNav navItems={navItems} />
          {isMobileMenuOpen && (
            <MobileNav
              onClose={() => setIsMobileMenuOpen(false)}
              navItems={navItems}
            />
          )}
        </Suspense>
      </Container>
    </div>
  );
};

export default Navigation;
