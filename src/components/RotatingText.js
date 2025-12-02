import { useState, useEffect } from "react";

const RotatingText = ({ words, typingSpeed = 120, deletingSpeed = 70, pause = 1000, className }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timer;

    if (!isDeleting) {
      // typing
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    } else {
      // deleting
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, words, index, typingSpeed, deletingSpeed, pause]);

  return <span className={className}>{text}</span>;
};

export default RotatingText;
