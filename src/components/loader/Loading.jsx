/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Loading = ({ loading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (loading) {
      // লোডিং শুরু হলে প্রগ্রেস আপডেট করতে থাকবে
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval); // ১০০% হলে বন্ধ করো
            return 100;
          }
          return oldProgress + 10; // প্রতিবার ১০% করে বাড়াও
        });
      }, 200); // প্রতি ২০০ms এ আপডেট হবে
    } else {
      // লোডিং শেষ হলে প্রগ্রেস বার হাইড করো
      setProgress(0);
    }

    return () => {
      clearInterval(interval); // কম্পোনেন্ট আনমাউন্ট হলে বন্ধ করো
    };
  }, [loading]);

  return (
    loading && (
      <div className="h-screen w-screen bg-opacity-50">
        <div className="fixed top-0 left-0 w-full bg-gray-200">
          <div
            className="h-1 bg-blue-500 transition-all duration-200"
            style={{ width: `${progress}%` }} // ডাইনামিক প্রগ্রেস
          ></div>
        </div>
      </div>
    )
  );
};

export default Loading;
