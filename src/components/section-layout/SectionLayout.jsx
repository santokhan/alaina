export default function SLayout({ children, className = "" }) {
  return (
    <section className={"relative " + className}>
      <div className={"relative " + className}>
        <div className="max-w-7xl mx-auto p-4">{children}</div>
      </div>
    </section>
  );
}
export function SMain({ children }) {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-6 relative">
      {children}
    </div>
  );
}
export function SHeader({ children }) {
  return <div className="text-center flex flex-col gap-4 px-4">{children}</div>;
}
export function SIcon({ children }) {
  return <div className="flex justify-center">{children}</div>;
}
export function STitle({ children, className = "" }) {
  return (
    <div
      className={
        "text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize text-gray-700 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function SDes({ children, className = "" }) {
  return <div className={"text-base  " + className}>{children}</div>;
}
