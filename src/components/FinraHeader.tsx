"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAssetUrl } from "@/utils/asset";

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
      <nav className={`finra-header-nav ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="finra-header-container">
          <Link href="/" className="header-brand" aria-label="Finra Capital">
            <img
              src={getAssetUrl("/resource1/home1_creativeAgency/assets/img/logo.svg")}
              alt="Finra Logo"
              className="header-logo-img"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation - Centered, no underline */}
          <div className="header-menu-desktop">
            <ul className="header-nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Về chúng tôi
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://finra.com.vn/tin-tuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://finra.com.vn/tuyen-dung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Tuyển dụng
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://finra.com.vn/hdsd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Action button & Mobile toggle button */}
          <div className="header-actions">
            <div className="header-cta">
              <button
                className="btn-invest-now"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/vn/app/finrainvest/id6738405146?l=vi",
                    "_blank"
                  )
                }
              >
                Đầu tư ngay
              </button>
            </div>
            <button
              className="header-toggler"
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Mở menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
        <div className="header-menu-mobile-full">
          <div className="mobile-menu-header">
            <img
              src={getAssetUrl("/resource1/home1_creativeAgency/assets/img/logo.svg")}
              alt="Finra Logo"
              className="header-logo-img"
            />
            <button
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Đóng menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="mobile-menu-body">
            <ul className="header-nav-list-mobile">
              <li>
                <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <a href="https://finra.com.vn/tin-tuc" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/tuyen-dung" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/hdsd" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-footer">
            <button
              className="btn-invest-mobile"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/vn/app/finrainvest/id6738405146?l=vi",
                  "_blank"
                )
              }
            >
              Đầu tư ngay
            </button>
            <a href="tel:19005082" className="btn-hotline">
              Hotline: 1900 5082
            </a>
          </div>
        </div>
      )}
    </>
  );
}
