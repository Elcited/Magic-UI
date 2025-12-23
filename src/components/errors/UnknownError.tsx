import ErrorLayout from './ErrorLayout';

export default function UnknownError() {
  return (
    <ErrorLayout>
      <div className="p-6 relative">
        <div className="flex gap-5 justify-center items-center">
          <h1 className="font-bold text-3xl py-5 pr-5 border-r-2 border-accent">
            <span>UnKnown Error</span>
          </h1>
          <h2 className="text-xl">Something went wrong.</h2>
        </div>

        <a className="flex justify-end underline hover:text-primary cursor-pointer select-none text-xl transition-colors duration-100">
          Back to home
        </a>
      </div>
    </ErrorLayout>
  );
}
