import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function EcosystemSection() {
  return (
    <section className="ecosystem-section">
      <div className="container-custom">
        <div className="section-label center">
          <span className="blue-gradient-text">07/</span> SỨC MẠNH TỪ SỰ KẾT NỐI
        </div>
        <h2 className="section-title center">
          Hệ sinh thái <span className="purple-text">Bolt Holdings</span>
        </h2>

        <div className="ecosystem-layout">
          {/* Row 1: Bất động sản */}
          <div className="eco-row">
            <div className="eco-row-label">
              <img
                src={getAssetUrl("/resource/images/icons/building-07.svg")}
                alt=""
                loading="lazy"
              />
              <span>Bất động sản</span>
            </div>
            <div className="eco-row-items">
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/ramond.png")}
                  alt="Ramond"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/lighthousing.png")}
                  alt="Light Housing"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Tài chính */}
          <div className="eco-row">
            <div className="eco-row-label">
              <img
                src={getAssetUrl("/resource/images/icons/money-02.svg")}
                alt=""
                loading="lazy"
              />
              <span>Tài chính</span>
            </div>
            <div className="eco-row-items">
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/upsc.png")}
                  alt="UP Securities"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/finra.png")}
                  alt="Finra"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/upwealth.png")}
                  alt="UP Wealth"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Vận hành */}
          <div className="eco-row">
            <div className="eco-row-label">
              <img
                src={getAssetUrl("/resource/images/icons/settings-01.svg")}
                alt=""
                loading="lazy"
              />
              <span>Vận hành</span>
            </div>
            <div className="eco-row-items">
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/stellar.png")}
                  alt="Stellar"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/boltx.png")}
                  alt="BoltX"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/nomad.png")}
                  alt="Nomad"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
              <div className="eco-item">
                <img
                  src={getAssetUrl("/resource/images/doi_tac/urban.png")}
                  alt="Urban"
                  className="eco-logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
