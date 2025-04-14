export function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full gap-2 mt-5">
      <div className="font-bold text-xl text-nowrap text-gray-500">{children}</div>
      <div className="w-full border-b-1 border-gray-300" />
    </div>
  );
}