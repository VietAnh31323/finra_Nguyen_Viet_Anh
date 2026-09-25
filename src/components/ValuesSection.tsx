import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function ValuesSection() {
  return (
    <section className="values-section">
      <img
        src={getAssetUrl("/resource/images/ve_chung_toi/core_value_banner.webp")}
        width={1920}
        height={919}
        alt=""
        className="values-bg-img"
        loading="lazy"
      />
      <div className="container-custom" style={{ position: "relative" }}>
        <div className="values-bottom-title">
          <div className="section-label">03/ NỀN TẢNG PHÁT TRIỂN</div>
          <h2 className="section-title">Giá trị cốt lõi</h2>
        </div>

        <div className="values-cascade-wrapper">
          {/* Group 1: Minh Bạch */}
          <div className="value-item-group group-1">
            <div className="value-text-part">
              <div className="value-row-icon bg-purple-icon">
                <img
                  src={getAssetUrl("/resource/images/icons/security-check.svg")}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="value-row-content">
                <h4 className="value-row-title">MINH BẠCH</h4>
                <p className="value-row-desc">
                  Công khai thông tin, <br />
                  rõ ràng trong hoạt động
                </p>
              </div>
            </div>
            <div className="value-image-part">
              <img
                src={getAssetUrl("/resource/images/ve_chung_toi/core_value_1.webp")}
                width={434}
                height={250}
                alt="Giá trị cốt lõi Minh Bạch"
                loading="lazy"
              />
            </div>
          </div>

          {/* Group 2: Bảo Toàn */}
          <div className="value-item-group group-2">
            <div className="value-text-part">
              <div className="value-row-icon bg-blue-icon">
                <img
                  src={getAssetUrl("/resource/images/icons/security-lock.svg")}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="value-row-content">
                <h4 className="value-row-title">BẢO TOÀN</h4>
                <p className="value-row-desc">
                  Quản lý nguồn vốn <br />
                  an toàn, chặt chẽ
                </p>
              </div>
            </div>
            <div className="value-image-part">
              <img
                src={getAssetUrl("/resource/images/ve_chung_toi/core_value_2.webp")}
                width={434}
                height={250}
                alt="Giá trị cốt lõi Bảo Toàn"
                loading="lazy"
              />
            </div>
          </div>

          {/* Group 3: Chia Sẻ */}
          <div className="value-item-group group-3">
            <div className="value-text-part">
              <div className="value-row-icon bg-purple-icon">
                <img
                  src={getAssetUrl("/resource/images/icons/share-07.svg")}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="value-row-content">
                <h4 className="value-row-title">CHIA SẺ</h4>
                <p className="value-row-desc">
                  Tối ưu nguồn lực, gia tăng giá trị <br />
                  cho cộng sự và nhà đầu tư
                </p>
              </div>
            </div>
            <div className="value-image-part">
              <img
                src={getAssetUrl("/resource/images/ve_chung_toi/core_value_3.webp")}
                width={434}
                height={250}
                alt="Giá trị cốt lõi Chia Sẻ"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
