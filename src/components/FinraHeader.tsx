"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAssetUrl } from "@/utils/asset";
import styles from "./FinraHeader.module.css";

export default function FinraHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`${styles.headerNav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.brand} aria-label="Finra Capital Homepage">
            <img
              src={getAssetUrl("/resource1/home1_creativeAgency/assets/img/logo.svg")}
              alt="Finra Capital Logo"
              className={styles.logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.menuDesktop}>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={`${styles.navLink} ${styles.active}`}>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <a
                  href="https://finra.com.vn/tin-tuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  href="https://finra.com.vn/tuyen-dung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a
                  href="https://finra.com.vn/hdsd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Header Action Button & Mobile Toggler */}
          <div className={styles.headerActions}>
            <button
              className={styles.btnInvest}
              onClick={() => window.open("https://apps.apple.com/vn/app/finrainvest/id6738405146?l=vi", "_blank")}
            >
              Đầu tư ngay
            </button>
            <button
              className={styles.toggler}
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMenuOpen(false)} />
      )}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <img
            src={getAssetUrl("/resource1/home1_creativeAgency/assets/img/logo.svg")}
            alt="Finra Logo"
            style={{ height: 36, width: "auto" }}
          />
          <button
            className={styles.closeBtn}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Đóng menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.drawerBody}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/" className={`${styles.mobileNavLink} ${styles.active}`} onClick={() => setIsMenuOpen(false)}>
                Về chúng tôi
              </Link>
            </li>
            <li>
              <a href="https://finra.com.vn/tin-tuc" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink}>
                Tin tức
              </a>
            </li>
            <li>
              <a href="https://finra.com.vn/tuyen-dung" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink}>
                Tuyển dụng
              </a>
            </li>
            <li>
              <a href="https://finra.com.vn/hdsd" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink}>
                Hướng dẫn sử dụng
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.drawerFooter}>
          <button
            className={styles.mobileBtnInvest}
            onClick={() => {
              setIsMenuOpen(false);
              window.open("https://apps.apple.com/vn/app/finrainvest/id6738405146?l=vi", "_blank");
            }}
          >
            Đầu tư ngay
          </button>
          <a href="tel:19005082" className={styles.mobileBtnHotline}>
            Hotline: 1900 5082
          </a>
        </div>
      </div>
    </>
  );
}
