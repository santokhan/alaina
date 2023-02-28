import { Button } from '@mui/material';

export default function SLayout({ children, className = '' }) {
  return (
    <section className={'relative ' + className}>
      <div className={'relative ' + className}>
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
export function STitle({ children, className = '' }) {
  return (
    <div
      className={
        'text-3xl sm:text-4xl lg:text-5xl font-semibold capitalize text-gray-700 flex flex-col items-center text-center ' +
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

export function SDes({ children, className = '' }) {
  return (
    <div className={'text-base text-alaina-gray-thin ' + className}>
      {children}
    </div>
  );
}

export const RoundedButton = ({ children }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#ffffff',
      borderRadius: '2rem',
      color: 'rgb(22,163,74)',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
      gap: '0.5rem',
      px: '2rem',
      py: { xs: '0.75rem', sm: '1rem' },
      boxShadow: 'none',
      ':hover': {
        backgroundColor: 'rgb(22,163,74)',
        color: 'white',
        boxShadow: 'none',
        color: 'white'
      },
      ':focus': {
        backgroundColor: 'rgb(22,163,74)',
        color: 'white',
        boxShadow: 'none',
        color: 'white'
      }
    }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="pt-1 whitespace-nowrap">
      {children ? children : 'GET FREE ESTIMATE'}
    </span>
  </Button>
);
