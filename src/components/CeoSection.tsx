import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function CeoSection() {
  return (
    <section className="ceo-section">
      {/* Desktop Image */}
      <div className="ceo-desktop-img d-none d-lg-block">
        <img
          src={getAssetUrl("/resource/images/ve_chung_toi/CEO_banner.png")}
          alt="CEO Finra"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="ceo-content">
        <div className="ceo-label-group">
          <div className="section-label-ceo">
            <span className="purple-text">01 /</span> THÔNG ĐIỆP TỪ NGƯỜI DẪN LỐI
          </div>
          <img
            src={getAssetUrl("/resource/images/icons/quote_icon_xl.svg")}
            alt="Quote"
            className="quote-icon"
            loading="lazy"
          />
        </div>

        <p className="quote-text-main">
          Khi thị trường không ngừng thay đổi, niềm tin của khách hàng luôn là nền tảng cho sự phát triển của Finra. Chúng tôi theo đuổi sứ mệnh{" "}
          <span className="text-gradient-blue">“Gia tăng giá trị thực”</span>{" "}
          thông qua việc kiến tạo các giải pháp đầu tư minh bạch, hiệu quả và bền vững.
        </p>

        <p className="quote-text-main">
          Với hệ sinh thái toàn diện từ bất động sản, tài chính đến chứng khoán, Finra mang đến những cơ hội đầu tư an toàn, bảo toàn giá trị và gia tăng lợi ích dài hạn cho khách hàng.
        </p>

        <p className="quote-text-main">
          Finra cam kết đồng hành bằng tinh thần trách nhiệm, sự chuyên nghiệp và khát vọng kiến tạo những giá trị bền vững cho tương lai.
        </p>

        <div className="ceo-signature-new">
          <div className="ceo-divider"></div>
          <div className="ceo-name-new">Ông Đỗ Quang Trung</div>
          <div className="ceo-title-new">Tổng Giám Đốc Finra Capital</div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="ceo-mobile-img d-lg-none">
        <div className="ceo-mobile-blur"></div>
        <img
          src={getAssetUrl("/resource/images/ve_chung_toi/CEO_banner_mb.png")}
          alt="CEO Finra"
          loading="lazy"
        />
      </div>
    </section>
  );
}
