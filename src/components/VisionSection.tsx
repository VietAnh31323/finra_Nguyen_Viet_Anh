import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function VisionSection() {
  return (
    <section className="vision-section">
      <img
        src={getAssetUrl("/resource/images/ve_chung_toi/vision_banner.png")}
        alt="Vision Banner"
        className="vision-bg-img"
        loading="lazy"
      />
      <div className="container-custom vision-content">
        <div>
          <div className="section-label">
            <span className="purple-text">02 /</span> CHÚNG TÔI HƯỚNG ĐẾN ĐÂU
          </div>
          <h2 className="section-title">Tầm nhìn &amp; Sứ mệnh</h2>
        </div>

        <div className="vision-grid">
          {/* Card 1: Tầm Nhìn */}
          <div className="vision-card">
            <img
              src={getAssetUrl("/resource/images/ve_chung_toi/effect_dots.png")}
              className="vision-card-bg-img"
              alt="dots"
              loading="lazy"
            />
            <div className="vision-card-header">
              <div className="vision-card-icon">
                <img
                  src={getAssetUrl("/resource/images/icons/vision.svg")}
                  alt="Vision Icon"
                  loading="lazy"
                />
              </div>
              <h3 className="vision-card-title">Tầm Nhìn</h3>
            </div>
            <p className="vision-card-text">
              Finra định vị trở thành một trong những công ty tài chính hàng đầu trong lĩnh vực đầu tư tại Việt Nam bằng việc tạo ra những sản phẩm đầu tư ứng dụng và mang lại giá trị lâu dài cho khách hàng.
              <br />
              <br />
              Chúng tôi tin rằng sự phát triển của mỗi cá nhân và doanh nghiệp đều góp phần vào sự thịnh vượng chung của xã hội
            </p>
          </div>

          {/* Card 2: Sứ Mệnh */}
          <div className="vision-card">
            <img
              src={getAssetUrl("/resource/images/ve_chung_toi/effect_dots.png")}
              className="vision-card-bg-img"
              alt="dots"
              loading="lazy"
            />
            <div className="vision-card-header">
              <div className="vision-card-icon">
                <img
                  src={getAssetUrl("/resource/images/icons/mission.svg")}
                  alt="Mission Icon"
                  loading="lazy"
                />
              </div>
              <h3 className="vision-card-title">Sứ Mệnh</h3>
            </div>
            <div>
              <p className="vision-card-text">
                Finra cung cấp các giải pháp đầu tư tài chính hiệu quả, minh bạch và an toàn cho khách hàng
              </p>
              <ul className="vision-list vision-card-text">
                <li>
                  <img
                    src={getAssetUrl("/resource/images/icons/checkmark-circle-01.svg")}
                    alt="Check"
                    className="vision-list-icon"
                    loading="lazy"
                  />
                  <span>
                    <strong>Tư vấn chuyên nghiệp:</strong> Cung cấp tư vấn, giải pháp tài chính hữu ích, toàn diện, minh bạch và chuyên sâu.
                  </span>
                </li>
                <li>
                  <img
                    src={getAssetUrl("/resource/images/icons/checkmark-circle-01.svg")}
                    alt="Check"
                    className="vision-list-icon"
                    loading="lazy"
                  />
                  <span>
                    <strong>Đổi mới sáng tạo:</strong> Luôn cập nhật và áp dụng công nghệ mới nhất để mang lại trải nghiệm tốt nhất.
                  </span>
                </li>
                <li>
                  <img
                    src={getAssetUrl("/resource/images/icons/checkmark-circle-01.svg")}
                    alt="Check"
                    className="vision-list-icon"
                    loading="lazy"
                  />
                  <span>
                    <strong>Khách hàng là trung tâm:</strong> Đặt lợi ích khách hàng lên hàng đầu, đồng hành và hỗ trợ trong mọi hành trình đầu tư.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
