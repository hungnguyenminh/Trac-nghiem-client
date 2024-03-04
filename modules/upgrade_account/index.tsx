import React from "react";
import UpgradeCard from "@/modules/upgrade_account/components/UpgradeCard";

export function UpgradeAccount()   {
  return (
    <div className={"m-6"}>
      <h1 className={"font-bold text-center mt-6 mb-4"}>Nâng cấp tài khoản</h1>
      <h4 className={"text-center"}>Nâng cấp lên tài khoản VIP để tận hưởng những tính năng tuyệt vời dành cho học tập</h4>
          <div className={"grid grid-cols-1 pt-12 space-y-12 lg:space-y-0 lg:grid-cols-3 lg:gap-x-6 xl-gap-8"}>
            <UpgradeCard title={"Miễn phí"} listBenefit={[
                "2 team members",
                "2 lượt thi thử cho mỗi đề thi",
                "5 lượt ôn thi miễn phí",
                "Xem lại đáp án",
                "Xem chi tiết lời giải",
                "Hỗ trợ 24/7",
            ]}></UpgradeCard>
            <UpgradeCard title={"Gói tháng"} price={40000} time={"Tháng"} listBenefit={[
                "Bao gồm các tính năng miễn phí",
                "Không hiển thị quảng cáo",
                "Làm đề miễn phí",
                "Đảo câu hỏi",
                "Đảo đáp án",
                "Luyện đề online",
                "Tải đề miễn phí",
            ]}></UpgradeCard>
            <UpgradeCard title={"Gói năm"} price={100000} time={"Năm"} listBenefit={[
                "Bao gồm các tính năng VIP",
                "Làm đề miễn phí",
                "Đảo câu hỏi",
                "Đảo đáp án",
                "Tuỳ chỉnh tính năng theo yêu cầu",
                "Complete documentation",
                "Tải tài liệu học tập không giới hạn",
            ]}></UpgradeCard>
          </div>

    </div>
  );
}
