// import Header from "@/components/Header";

export default function RootLayoout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
    </>
  );
}
