import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/minsu.jpg"}
          alt="An image showing Minsu"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&quot;m Minsu.</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
