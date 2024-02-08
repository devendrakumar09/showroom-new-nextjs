import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="pb-5 header text-center ">
      <div className="container py-5">
        <header className="py-5">
          <h1 className="display-4">Welcome to y Store Application</h1>
          <p className="font-italic mb-1">Using css animation and pseudo elements, create a nice animated play button.</p>
          <p className="font-italic">Snippet by
            <a className="" href="https://bootstrapious.com/">
              <u>Bootstrapious</u>
            </a>
          </p>
        </header>
      </div>


      <div className="text-center">
        <a className={styles.animatedBtn +' '+ 'btn'} href="/store">Go</a>
      </div>

    </section>
  );
}
