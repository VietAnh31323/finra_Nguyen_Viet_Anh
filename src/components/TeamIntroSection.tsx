import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function TeamIntroSection() {
  return (
    <section className="team-intro-section">
      <div className="container-custom">
        <div className="team-intro-grid">
          {/* Team Image Left */}
          <div className="team-intro-left">
            <img
              src={getAssetUrl("/resource/images/ve_chung_toi/team.png")}
              alt="Đội ngũ Finra"
              className="team-intro-img"
              loading="lazy"
            />
          </div>

          {/* Team Content Right */}
          <div className="team-intro-right">
            <div className="team-intro-right-header">
              <div className="section-label">
                <span className="blue-gradient-text">05/</span> CON NGƯỜI FINRA
              </div>
              <h3 className="team-quote">
                “Sức mạnh cốt lõi của Finra ở{" "}
                <span className="blue-gradient-text" style={{ fontWeight: 600 }}>
                  đội ngũ nhân sự tinh hoa
                </span>{" "}
                nơi giao thoa giữa tư duy quản trị tài chính nhạy bén và năng lực công nghệ đột phá”
              </h3>
            </div>

            {/* Core Values 3 items */}
            <div className="team-core-values">
              {/* Item 1 */}
              <div className="core-value-item">
                <div className="core-value-icon">
                  <img
                    src={getAssetUrl("/resource/images/icons/shield-02.svg")}
                    alt="Chuẩn mực"
                    loading="lazy"
                  />
                </div>
                <div className="core-value-text-group">
                  <h4 className="core-value-title">CHUẨN MỰC</h4>
                  <p className="core-value-desc">
                    Chuẩn mực trong tác phong, tư duy và hành động
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="core-value-item">
                <div className="core-value-icon">
                  <img
                    src={getAssetUrl("/resource/images/icons/fire.svg")}
                    alt="Nhiệt huyết"
                    loading="lazy"
                  />
                </div>
                <div className="core-value-text-group">
                  <h4 className="core-value-title">NHIỆT HUYẾT</h4>
                  <p className="core-value-desc">
                    Trẻ trung, năng động, luôn sẵn sàng chinh phục mục tiêu
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="core-value-item">
                <div className="core-value-icon">
                  <img
                    src={getAssetUrl("/resource/images/icons/hourglass.svg")}
                    alt="Kỷ luật"
                    loading="lazy"
                  />
                </div>
                <div className="core-value-text-group">
                  <h4 className="core-value-title">KỶ LUẬT</h4>
                  <p className="core-value-desc">
                    Kiên trì với những việc nhỏ để tạo nên tăng trưởng bền vững
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
