import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img
          src={getAssetUrl("/resource/images/ve_chung_toi/hero_banner.png")}
          alt="Finra Hero"
          className="hero-bg-img"
          loading="eager"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-brand">FINRA</span>
          <span className="hero-subtitle-line">NỀN TẢNG ĐẦU TƯ CÔNG NGHỆ</span>
          <span className="hero-subtitle-line hero-subtitle-gradient">
            TÀI CHÍNH HIỆN ĐẠI
          </span>
        </h1>
      </div>
    </section>
  );
}
