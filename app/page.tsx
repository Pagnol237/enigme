'use client'
import Image from "next/image";
import Styles from "@/app/style/style.module.scss"
import { url } from "inspector";
import Bg from "@/public/images/bg.jpg"
import { useRef } from "react";
import Phone from '@/public/images/phones.png'
import Logo from '@/public/images/logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <div className={Styles.bg}>
      <div className={Styles.leftBox}>
          <div className={Styles.logoBox}>
            <Image
              src={Logo}
              alt="enigma logo"
              className={Styles.logo}
            />
            <div>
              <p className={Styles.Text}>
                Cette application propose des énigmes progressives conçues pour améliorer la logique, la concentration et le raisonnement. La difficulté augmente au fil des niveaux afin d’offrir un véritable défi intellectuel.
                
              </p>
              <p className={Styles.text2}>
                  Si vous rencontrez un problème, avez une question ou souhaitez faire une suggestion, vous pouvez nous contacter via le boutton si dessous.
              </p>

            </div>

            <Link href="/" as="mailto:pnounjo@gmail.com">
            <div className={Styles.btn}>
              contacter nous
            </div>
            </Link>
          </div>
      </div>
      <div className={Styles.rightBox}>
        <Image 
          src={Phone}
          alt=" phone enigma presentaion "
          className={Styles.phones}
        />
      </div>
    </div>
  );
}
