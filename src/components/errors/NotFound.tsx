import ErrorLayout from './ErrorLayout';

export default function NotFound() {
  return (
    <ErrorLayout>
      <div className="relative p-6">
        <div className="flex gap-5 justify-center items-center">
          <h1 className="font-bold text-3xl py-5 pr-5 border-r-2 border-accent">
            <span>404</span>
          </h1>
          <h2 className="text-2xl">The page could not be found.</h2>
        </div>

        <a className="flex justify-end underline hover:text-primary cursor-pointer select-none text-xl transition-colors duration-100">
          Back to home
        </a>
      </div>
    </ErrorLayout>
  );
}
