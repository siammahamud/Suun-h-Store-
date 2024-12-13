import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const OfferModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const currentTime = new Date().getTime(); // বর্তমান সময় (মিলিসেকেন্ডে)
    const modalLastShown = localStorage.getItem("offerModalShown");

    // যদি মডাল কখনো দেখানো না হয় বা ৩০ মিনিট পেরিয়ে যায়
    if (!modalLastShown || currentTime - modalLastShown > 30 * 60 * 1000) {
      setOpen(true); // মডাল দেখান
      localStorage.setItem("offerModalShown", currentTime); // বর্তমান সময় সংরক্ষণ করুন
    }
  },[]);

  return (
    <>
      <Dialog
        open={open}
        size="xs"
        handler={handleOpen}
        className="bg-teal-500"
      >
        <DialogBody className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-red-500 mr-96"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography className="text-justify" color="white" variant="h5">
            🎀 বিশেষ অফার! আপনার প্রথম অর্ডারে ৫০% ছাড় পান! সাথে থাকছে ফ্রি
            ডেলিভারি !🎀
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            className="bg-red-700"
            variant="text"
            color="white"
            onClick={handleOpen}
          >
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default OfferModal;
