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
        "text-3xl sm:text-4xl lg:text-5xl font-semibold capitalize text-gray-700 flex flex-col items-center" +
        className
      }
    >
      {children}
      <Divider />
    </div>
  );
}
export const Divider = () => (
  <div className="flex items-center my-4 lg:my-8 gap-2">
    <div className="w-24 lg:w-48 h-[1px] bg-gray-300"></div>
    <div className="w-[5px] h-[5px] rounded-full bg-gray-300"></div>
    <div className="w-24 lg:w-48 h-[1px] bg-gray-300"></div>
  </div>
);

export function SDes({ children, className = "" }) {
  return (
    <div className={"text-base text-alaina-gray-thin " + className}>
      {children}
    </div>
  );
}
