import React from "react";
import { getAssetUrl } from "@/utils/asset";

export default function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <img
        src={getAssetUrl("/resource/images/ve_chung_toi/ideal_banner.webp")}
        width={1920}
        height={900}
        alt=""
        className="philosophy-bg-img"
        loading="lazy"
      />
      <div className="philosophy-overlay"></div>
      <div className="container-custom">
        <div className="philosophy-header">
          <div className="philosophy-header-left">
            <div className="section-label">
              <span className="blue-gradient-text">04/</span> Trách nhiệm và Cam kết
            </div>
            <h2 className="section-title">
              Triết lý kinh doanh <span className="blue-gradient-text">của Finra</span>
            </h2>
          </div>
          <div className="philosophy-header-right"></div>
        </div>

        <div className="philosophy-cards-wrapper">
          <div className="philosophy-cards">
            {/* Card 1: SÁNG TẠO */}
            <div className="philo-card">
              <div className="philo-card-top">
                <div className="philo-icon-wrap">
                  <div className="philo-icon-inner bg-purple-gradient">
                    <img
                      src={getAssetUrl("/resource/images/icons/idea-01.svg")}
                      alt=""
                      className="philo-icon"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="philo-number">01</span>
              </div>
              <h3 className="philo-title">SÁNG TẠO</h3>
              <div className="philo-divider"></div>
              <p className="philo-text">
                Không ngừng đổi mới, ứng dụng công nghệ để bứt phá
              </p>
              <img
                src={getAssetUrl("/resource/images/ve_chung_toi/waves_1.png")}
                alt=""
                className="philo-card-deco"
                loading="lazy"
              />
              <div className="philo-card-dot dot-1"></div>
            </div>

            {/* Card 2: KIÊN ĐỊNH */}
            <div className="philo-card">
              <div className="philo-card-top">
                <div className="philo-icon-wrap philo-icon-wrap--blue">
                  <div className="philo-icon-inner bg-blue-gradient">
                    <img
                      src={getAssetUrl("/resource/images/icons/target-02.svg")}
                      alt=""
                      className="philo-icon"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="philo-number">02</span>
              </div>
              <h3 className="philo-title">KIÊN ĐỊNH</h3>
              <div className="philo-divider philo-divider--blue"></div>
              <p className="philo-text">
                Vững mục tiêu, bền chí theo đuổi hành trình đã chọn
              </p>
              <img
                src={getAssetUrl("/resource/images/ve_chung_toi/waves_2.png")}
                alt=""
                className="philo-card-deco"
                loading="lazy"
              />
              <div className="philo-card-dot dot-2"></div>
            </div>

            {/* Card 3: LINH HOẠT */}
            <div className="philo-card">
              <div className="philo-card-top">
                <div className="philo-icon-wrap">
                  <div className="philo-icon-inner bg-purple-gradient">
                    <img
                      src={getAssetUrl("/resource/images/icons/puzzle.svg")}
                      alt=""
                      className="philo-icon"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="philo-number">03</span>
              </div>
              <h3 className="philo-title">LINH HOẠT</h3>
              <div className="philo-divider"></div>
              <p className="philo-text">
                Thích ứng nhanh với thay đổi, lựa chọn giải pháp phù hợp nhất
              </p>
              <img
                src={getAssetUrl("/resource/images/ve_chung_toi/waves_3.png")}
                alt=""
                className="philo-card-deco"
                loading="lazy"
              />
              <div className="philo-card-dot dot-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
