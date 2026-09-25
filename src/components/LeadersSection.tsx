"use client";

import React, { useState } from "react";
import { getAssetUrl } from "@/utils/asset";

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  desc: string;
  fullBio?: string;
}

const leaders: Leader[] = [
  {
    id: "quang-trung",
    name: "Ông Đỗ Quang Trung",
    role: "TỔNG GIÁM ĐỐC FINRA CAPITAL",
    image: "/resource/images/ve_chung_toi/leader_quang_trung.png",
    desc: "16 năm kinh nghiệm làm việc trong lĩnh vực Tài chính - Ngân hàng - Bất động sản. Tham gia hoạch định chiến lược, điều hành hoạt động kinh doanh, phát triển mô hình và mạng lưới phân phối.",
    fullBio: "16 năm kinh nghiệm làm việc trong lĩnh vực Tài chính - Ngân hàng - Bất động sản. Tham gia hoạch định chiến lược, điều hành hoạt động kinh doanh, phát triển mô hình và mạng lưới phân phối. Từng giữ các chức vụ lãnh đạo quan trọng tại các tổ chức tài chính lớn, dẫn dắt các dự án đầu tư quy mô, định hình chiến lược phát triển hệ sinh thái tài chính công nghệ đột phá tại Finra Capital.",
  },
  {
    id: "hai-linh",
    name: "Bà Nguyễn Thị Hải Linh",
    role: "PHÓ TGĐ KINH DOANH MIỀN BẮC 2",
    image: "/resource/images/ve_chung_toi/leader_hai_linh.png",
    desc: "Hơn 15 năm kinh nghiệm trong lĩnh vực tài chính, ngân hàng và tư vấn đầu tư, chị Nguyễn Thị Hải Linh sở hữu nền tảng chuyên môn vững chắc cùng bề dày kinh nghiệm trong quản trị kinh doanh và phát triển đội ngũ.",
    fullBio: "Hơn 15 năm kinh nghiệm trong lĩnh vực tài chính, ngân hàng và tư vấn đầu tư, chị Nguyễn Thị Hải Linh sở hữu nền tảng chuyên môn vững chắc cùng bề dày kinh nghiệm trong quản trị kinh doanh và phát triển đội ngũ. Chị luôn tận tâm xây dựng mối quan hệ đối tác tin cậy, đồng hành cùng khách hàng trong các quyết định gia tăng giá trị tài sản bền vững.",
  },
  {
    id: "anh-tu",
    name: "Ông Ngô Anh Tú",
    role: "PHÓ TGĐ KINH DOANH MIỀN BẮC 3",
    image: "/resource/images/ve_chung_toi/leader_anh_tu.png",
    desc: "23 năm làm việc trong linh vực: Ngân hàng - Tài chính - Bảo hiểm và Bất động sản. Đảm nhiệm nhiều vị trí Quản lý quan trọng tại các Bank và TC Tài chính lớn.",
    fullBio: "23 năm làm việc trong lĩnh vực: Ngân hàng - Tài chính - Bảo hiểm và Bất động sản. Đảm nhiệm nhiều vị trí Quản lý quan trọng tại các Ngân hàng thương mại và Tổ chức Tài chính lớn tại Việt Nam. Sở hữu năng lực phân tích thị trường sắc bén, quản trị rủi ro toàn diện và chiến lược phân phối sản phẩm đầu tư chuyên sâu.",
  },
];

export default function LeadersSection() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <section className="leaders-section">
      {/* Background Decor */}
      <div className="leader-bg-wrapper">
        <img
          src={getAssetUrl("/resource/images/ve_chung_toi/leader_decor.png")}
          alt="Leader Decor"
          className="leader-bg-img"
          loading="lazy"
        />
      </div>

      <div className="container-custom">
        <div className="section-label">
          <span className="blue-gradient-text">06/</span>{" "}
          <span style={{ color: "#6B7280" }}>NHỮNG NGƯỜI DẪN ĐƯỜNG</span>
        </div>
        <h2 className="section-title">
          Đội ngũ lãnh đạo <span className="blue-gradient-text">Finra</span>
        </h2>

        {/* Leaders Grid */}
        <div className="leaders-grid">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="leader-card group"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="leader-img-wrapper">
                <img
                  src={getAssetUrl(leader.image)}
                  alt={leader.name}
                  className="leader-img"
                  loading="lazy"
                />
                <div className="leader-hover-overlay">
                  <div className="leader-hover-btn">Xem thêm thông tin</div>
                </div>
              </div>
              <div className="leader-info">
                <div>
                  <div className="leader-role">{leader.role}</div>
                  <div className="leader-name">{leader.name}</div>
                </div>
                <div className="leader-desc">{leader.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leader Detail Modal */}
      {selectedLeader && (
        <div
          className="leader-modal-overlay"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="leader-modal-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="leader-modal-close"
              onClick={() => setSelectedLeader(null)}
              aria-label="Đóng"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="leader-modal-content-wrapper">
              <div className="leader-modal-left">
                <div className="leader-modal-role">{selectedLeader.role}</div>
                <h3 className="leader-modal-name">{selectedLeader.name}</h3>
                <div className="leader-modal-desc">
                  <p>{selectedLeader.fullBio || selectedLeader.desc}</p>
                </div>
              </div>
              <div className="leader-modal-right">
                <img
                  src={getAssetUrl(selectedLeader.image)}
                  alt={selectedLeader.name}
                  className="leader-modal-img"
                />
              </div>
            </div>

            <div className="leader-modal-gradient-overlay"></div>
          </div>
        </div>
      )}
    </section>
  );
}
