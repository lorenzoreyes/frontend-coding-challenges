export const Item = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-sm text-amber-50/30">{label}</p>
    <p className="font-light tracking-wide">{value}</p>
  </div>
);
