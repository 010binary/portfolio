import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import styles from "./index.module.css";

const socialLinks = [
  {
    title: "Github",
    link: "https://github.com/amartey-tricky",
    icon: <Github className={styles.social_icon} />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/amartey-tricky/",
    icon: <Linkedin className={styles.social_icon} />,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/amartey_tricky",
    icon: <Twitter className={styles.social_icon} />,
  },
  {
    title: "Email",
    link: "mailto:patrickannan23@gmail.com",
    icon: <Mail className={styles.social_icon} />,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {/* Copyright */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Patrick's Portfolio • All rights
          reserved
        </div>
        {/* Social Links */}
        <div className={styles.social_links}>
          {socialLinks.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social_icons}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
