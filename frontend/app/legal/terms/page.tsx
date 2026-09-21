import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <Link className="legal-back" href="/">← 살도로 돌아가기</Link>
        <p className="legal-eyebrow">SALDO · TERMS</p>
        <h1>이용약관</h1>
        <p className="legal-updated">최종 업데이트: 2026년 9월 21일</p>
        <h2>1. 서비스의 성격</h2>
        <p>살도는 사용자가 기록한 수입·지출을 정리하고 예산 계획을 돕는 개인 금융 기록 서비스입니다. 내비게이터의 계산값은 기록 기반 참고치이며 금융·투자 자문이나 지급 보증이 아닙니다.</p>
        <h2>2. 사용자 책임</h2>
        <p>사용자는 본인의 계정으로 정확한 정보를 입력하고 로그인 계정을 안전하게 관리해야 합니다. 타인의 정보를 입력하거나 서비스 운영을 방해하는 행위는 금지됩니다.</p>
        <h2>3. 금융 연동의 한계</h2>
        <p>오픈뱅킹은 승인된 운영 환경에서만 활성화됩니다. 수동 입력 모드에서는 은행 잔액이나 자동 결제 결과를 제공하지 않으며, 고정비 루틴도 결제·출금을 실행하지 않습니다.</p>
        <h2>4. 탈퇴</h2>
        <p>설정에서 회원 탈퇴를 진행하면 저장된 계정과 가계부 데이터를 삭제합니다. 삭제된 데이터는 복구할 수 없으므로 필요한 거래는 CSV로 먼저 내보내 주세요.</p>
      </div>
    </main>
  );
}
