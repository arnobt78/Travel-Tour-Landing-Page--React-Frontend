import { motion } from "framer-motion";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 scroll-mt-16 bg-grey-1 text-center px-8"
    >
      <PageLinks
        parentClass="flex justify-center flex-wrap gap-4 mb-6"
        itemClass="footer-link"
      />
      <ul className="flex justify-center flex-wrap gap-4 mb-6 list-none m-0 p-0">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <SocialLink
              {...link}
              itemClass="text-2xl md:text-3xl text-white hover:text-primary-5 transition-colors duration-300"
            />
          </li>
        ))}
      </ul>
      <p className="capitalize tracking-widest text-white text-sm">
        &copy; Backroads travel tours company{" "}
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </motion.footer>
  );
};

export default Footer;
