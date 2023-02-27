export default function Container({ children, className = "" }) {
  return (
    <div className={"max-w-screen-xl mx-auto px-4 relative " + className}>
      {children}
    </div>
  );
}
