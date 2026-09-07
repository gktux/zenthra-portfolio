import ErpProjectPage from '@/app/projects/erp/page';

export const metadata = {
  title: "Zenthra Bilişim ERP — Kurumsal Kaynak Planlama",
  description: "Zenthra ERP ile Depo (WMS), Üretim (MES), Kalite (QMS), Satınalma, Muhasebe ve İK süreçlerinizi tek platformdan yönetin.",
};

export default function ErpRedirectPage() {
  return <ErpProjectPage />;
}
