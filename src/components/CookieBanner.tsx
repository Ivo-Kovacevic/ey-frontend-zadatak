import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem("cookieConsent");
    console.log(consentStatus);

    if (consentStatus === null) setShowBanner(true);
  }, []);

  const accept = () => {
    setShowBanner(false);
    localStorage.setItem("cookieConsent", "true");
  };

  const decline = () => {
    setShowBanner(false);
    localStorage.setItem("cookieConsent", "false");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center gap-4 border-t-2 border-neutral-900 bg-white px-4 p-8">
      <p className="flex-grow">
        We use cookies to enhance your browsing experience and analyze our traffic. By clicking
        "Accept", you consent to our use of cookies.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={accept}
          className="rounded-xl border-2 border-neutral-900 bg-neutral-900 px-4 py-2 text-white hover:brightness-150"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="rounded-xl border-2 border-neutral-400 bg-white px-4 py-2 hover:brightness-95"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
