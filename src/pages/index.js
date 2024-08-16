import { Batgerel } from "@/Components/Batgerel";
import { Battseren } from "@/Components/Battseren";
import { Belgutei } from "@/Components/Belgutei";
import { Bilguun } from "@/Components/Bilguun";
import { Byambaa } from "@/Components/Byambaa";
import { Chantsal } from "@/Components/Chantsal";
import { Ganbat } from "@/Components/Ganbat";
import { Namuun } from "@/Components/Namuun";
import { Norovoo } from "@/Components/Norovoo";
import { Oyunbat } from "@/Components/Oyunbat";
import { Shagai } from "@/Components/Shagai";
import { Temuujin } from "@/Components/Temuujin";
import { Tengis } from "@/Components/Tengis";
import { Tsagaanaa } from "@/Components/Tsagaanaa";
import { Tsenguun } from "@/Components/Tsenguun";
import { Tsovoo } from "@/Components/Tsovoo";
import { Uskhuu } from "@/Components/Uskhuu";
import { Zolbayar } from "@/Components/Zolbayar";
import { Zolboo } from "@/Components/Zolboo";
import { Layout } from "@/Components/Layout";
import { Greeting } from "@/Components/Greeting";

const Names = [
  "Batgerel",
  "Battseren",
  "Belgutei",
  "Bilguun",
  "Byambaa",
  "Chantsal",
  "Ganbat",
  "Namuun",
  "Norovoo",
  "Oyunbat",
  "Shagai",
  "Temuujin",
  "Tengis",
  "Tsagaanaa",
  "Tsenguun",
  "Tsovoo",
  "Uskhuu",
  "Zolbayar",
  "Zolboo",
];

const Home = () => {
  return (
    <>
      <Layout>
        {Names.map((el) => {
          return <Greeting name={el} />;
        })}
      </Layout>
    </>
  );
};

export default Home;
