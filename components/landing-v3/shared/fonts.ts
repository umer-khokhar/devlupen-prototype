import { Inter, JetBrains_Mono, Rubik } from "next/font/google";

const rubik = Rubik({
  variable: "--landing-rubik",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--landing-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--landing-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const LANDING_FONT_CLASSES = `${rubik.variable} ${inter.variable} ${jetBrainsMono.variable}`;
