import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <Link className="legal-back" href="/">← 살도로 돌아가기</Link>
        <p className="legal-eyebrow">SALDO · PRIVACY</p>
        <h1>개인정보처리방침</h1>
        <p className="legal-updated">최종 업데이트: 2026년 9월 21일</p>
        <h2>1. 수집하는 정보</h2>
        <p>살도는 Google 또는 카카오 로그인 과정에서 제공되는 식별자, 이름, 이메일(제공되는 경우)을 계정 연결에 사용합니다. 사용자가 직접 입력한 거래·예산·고정비도 해당 계정에 저장됩니다.</p>
        <h2>2. 이용 목적과 보관</h2>
        <p>수집 정보는 로그인, 개인별 가계부 제공, 통계 계산, 서비스 오류 대응에만 사용합니다. 회원 탈퇴를 요청하면 계정과 연결된 가계부 데이터를 삭제하며, 법령상 보관이 필요한 정보가 있는 경우에는 해당 기간 후 삭제합니다.</p>
        <h2>3. 외부 제공</h2>
        <p>살도는 소셜 로그인 인증을 위해 각 제공자의 공식 OAuth 화면을 사용하며 비밀번호를 받거나 저장하지 않습니다. 오픈뱅킹을 직접 연결한 경우에만 금융결제원 API를 호출합니다.</p>
        <h2>4. 이용자 권리</h2>
        <p>설정에서 거래 CSV를 내려받거나 회원 탈퇴 및 데이터 삭제를 요청할 수 있습니다. 문의는 서비스 운영자에게 남겨 주세요.</p>
      </div>
    </main>
  );
}
