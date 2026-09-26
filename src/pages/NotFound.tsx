import { Helmet } from "react-helmet-async";
import { Button } from "../components/Button";

const NotFound = () => (
  <main className="flex min-h-[75vh] items-center bg-slate-50 px-6 pb-20 pt-40 text-center">
    <Helmet>
      <title>Page Not Found | Nav Web Design</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>

    <div className="mx-auto max-w-2xl">
      <p className="section-eyebrow">404 error</p>
      <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">
        This page could not be found
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
        The link may be outdated or the page may have moved. Use one of the options below to keep exploring.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
        <Button to="/" arrow className="px-7 py-4">
          Return Home
        </Button>
        <Button to="/services" variant="secondary" className="px-7 py-4">
          View Services
        </Button>
      </div>
    </div>
  </main>
);

export default NotFound;
