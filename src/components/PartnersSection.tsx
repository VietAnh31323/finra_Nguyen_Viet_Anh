import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="container-custom">
        <div className="section-label center">
          <span className="blue-gradient-text">08/</span> ĐƠN VỊ ĐỒNG HÀNH
        </div>
        <h2 className="section-title center">
          Đồng hành cùng những <span className="purple-text">đối tác tin cậy</span>
        </h2>

        <div className="partners-grid-new">
          {/* Pristie */}
          <div className="partner-item-new">
            <img
              src={getAssetUrl("/resource/images/doi_tac/pristie.webp")}
              alt="Pristie"
              className="partner-logo-new"
              loading="lazy"
            />
          </div>

          {/* UP Securities */}
          <div className="partner-item-new">
            <img
              src={getAssetUrl("/resource/images/doi_tac/upsc.png")}
              alt="UP Securities"
              className="partner-logo-new"
              loading="lazy"
            />
          </div>

          {/* Ramond */}
          <div className="partner-item-new">
            <img
              src={getAssetUrl("/resource/images/doi_tac/ramond.png")}
              alt="Ramond"
              className="partner-logo-new"
              loading="lazy"
            />
          </div>

          {/* Light Housing */}
          <div className="partner-item-new">
            <img
              src={getAssetUrl("/resource/images/doi_tac/lighthousing.png")}
              alt="Light Housing"
              className="partner-logo-new"
              loading="lazy"
            />
          </div>

          {/* LPBank */}
          <div className="partner-item-new">
            <img
              src={getAssetUrl("/resource/images/doi_tac/lpbank.png")}
              alt="LPBank"
              className="partner-logo-new"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
