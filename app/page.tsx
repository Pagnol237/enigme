'use client'
import Image from "next/image";
import Styles from "@/app/style/style.module.scss"
import { url } from "inspector";
import Bg from "@/public/images/bg.jpg"
import { useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Erreur de lecture audio:", error);
      });
    }
  };
  return (
    <div className={Styles.bg} style={{backgroundImage:`url(${Bg.src})`}}>
      <audio ref={audioRef} src="/audio/click_V2.mp3"/>
      <button onClick={handleClick}>
        
        commencer
        </button>
    </div>
  );
}
