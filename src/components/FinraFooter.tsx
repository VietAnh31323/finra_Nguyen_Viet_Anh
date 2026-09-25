import React from "react";
import Link from "next/link";
import { getAssetUrl } from "@/utils/asset";

export default function FinraFooter() {
  return (
    <footer className="finra-footer">
      <img
        src={getAssetUrl("/resource/images/illus/footer-bg.png")}
        alt="background wave"
        className="footer-bg-wave"
        loading="lazy"
      />
      <div className="finra-container">
        <div className="footer-layout">
          {/* Company Info */}
          <div className="company-info">
            <div className="footer-logo">
              <Link href="/">
                <img
                  src={getAssetUrl("/resource/images/illus/logo-full.svg")}
                  alt="Finra Logo"
                  className="logo-img"
                  loading="lazy"
                />
              </Link>
            </div>
            <h6 className="company-name">
              Công Ty Cổ Phần <br className="hide-on-tablet" />
              Công Nghệ Tài Chính Finra Capital
            </h6>
            <div className="company-details">
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Tầng 10, Tòa nhà Hapro, Số 11B Cát Linh, <br className="hide-on-tablet" />
                  phường Ô Chợ Dừa, thành phố Hà Nội
                </span>
              </div>
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@finra.com.vn</span>
              </div>
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>1900 5082</span>
              </div>
            </div>
          </div>

          {/* Links 1: Về Finra */}
          <div className="link-group">
            <h6 className="link-title">Về Finra</h6>
            <ul className="link-list">
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>
                <Link href="/" className="router-link-active router-link-exact-active">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <a href="https://finra.com.vn/tin-tuc" target="_blank" rel="noopener noreferrer">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/tuyen-dung" target="_blank" rel="noopener noreferrer">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/hdsd" target="_blank" rel="noopener noreferrer">
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2: Sản phẩm */}
          <div className="link-group">
            <h6 className="link-title">Sản phẩm</h6>
            <ul className="link-list">
              <li>
                <a href="https://finra.com.vn/san-pham/finra-star" target="_blank" rel="noopener noreferrer">
                  Finra Star
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/san-pham/finra-snap" target="_blank" rel="noopener noreferrer">
                  Finra Snap
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/san-pham/finra-shield" target="_blank" rel="noopener noreferrer">
                  Finra Shield
                </a>
              </li>
              <li>
                <a href="https://finra.com.vn/san-pham/bat-dong-san" target="_blank" rel="noopener noreferrer">
                  Bất động sản
                </a>
              </li>
            </ul>
          </div>

          {/* Action Column: Social & Apps */}
          <div className="action-column">
            <div className="social-section">
              <h6 className="link-title">Theo dõi chúng tôi</h6>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <img
                    src={getAssetUrl("/resource/images/icons/facebook.svg")}
                    alt="Facebook"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="YouTube"
                >
                  <img
                    src={getAssetUrl("/resource/images/icons/youtube.svg")}
                    alt="YouTube"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://m.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Messenger"
                >
                  <img
                    src={getAssetUrl("/resource/images/icons/messenger.svg")}
                    alt="Messenger"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            <div className="app-section">
              <h6 className="link-title">Tải ứng dụng</h6>
              <div className="app-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.bolt.finracapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-btn"
                  aria-label="Tải trên Google Play"
                >
                  <img
                    src={getAssetUrl("/resource/images/icons/googleplay.svg")}
                    alt="Google Play"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://apps.apple.com/vn/app/finrainvest/id6738405146?l=vi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-btn"
                  aria-label="Tải trên App Store"
                >
                  <img
                    src={getAssetUrl("/resource/images/icons/appstore.svg")}
                    alt="App Store"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
