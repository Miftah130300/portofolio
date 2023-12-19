import { useEffect } from "react";

export function ShowAlert({ openAlert, closeAlert }) {
  // if openAlert is true, the alert is open
  useEffect(() => {
    if (openAlert) {
      const timeAlertId = setTimeout(() => {
        closeAlert();
      }, 2000);

      return () => {
        clearTimeout(timeAlertId);
      };
    }
  }, [openAlert, closeAlert]);

  if (!openAlert) return null;

  return (
    <div className="bg-teal-100 border border-teal-400 text-teal-700 p-2 top-[2%] rounded flex fixed z-50 w-full max-w-[90%] lg:max-w-[35%] max-h-[100px] mx-3"
      role="alert">
      <div className="flex-col md:flex w-full h-full">
        <div><strong className="font-bold">Congratulations!</strong></div>
        <span> Your message was successfully sent.</span>
      </div>
    </div>
  );
}
