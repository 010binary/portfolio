"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./index.module.css";

interface MenuItem {
  title: string;
  href: string;
  index: number;
}

const menuItems: MenuItem[] = [
  { title: "Home", href: "/", index: 0 },
  { title: "About", href: "/about", index: 1 },
  { title: "Projects", href: "/projects", index: 2 },
  { title: "Contact", href: "/contact", index: 3 },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();
  const activeItem = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.glass}>
        <nav className={styles.nav}>
          <div className={styles.nav_menu}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/" className={styles.logo_link}>
                Patrick Annang
              </Link>
            </div>
            {/*  DesktopMenu */}
            <div className={styles.desktop_menu}>
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${styles.menu_link} ${activeItem(item.href) ? styles.active : styles.inactive}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {/* MobileMenu */}
            <div className={styles.mobile_menu}>
              <button
                type="button"
                onClick={toggleMenu}
                className={styles.mobile_button}
                aria-label="Toggle Menu"
              >
                <div className={styles.mobile_button_icon}>
                  <div
                    className={`${styles.menu_icon} ${isOpen ? styles.menu_open : styles.menu_closed}`}
                  >
                    <Menu size={20} />
                  </div>
                  <div
                    className={`${styles.menu_icon} ${isOpen ? styles.x_closed : styles.x_open}`}
                  >
                    <X size={20} />
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* MobileMenu */}
          <div
            className={`${styles.mobile_nav} ${isOpen ? styles.open : styles.closed}`}
          >
            <div
              className={`$styles.mobile_menu_box ${isOpen ? styles.animation_open : styles.animation_closed}`}
            >
              {menuItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${styles.mobile_link} ${activeItem(item.href) ? styles.link_active : styles.link_inactive} ${index === 0 ? "rounded-b-2xl" : ""} ${index === menuItems.length - 1 ? "rounded-b-2xl" : ""}`}
                  onClick={toggleMenu}
                  style={{
                    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: `${index * 75}ms`,
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
