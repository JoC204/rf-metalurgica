import React from "react";
import "../Styles/Home.css";

const Home = ({
  title = "Bienvenido a RF Metalúrgica",
  content = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros. Nullam auctor, nunc nec ultricies ultricies, nunc eros ultricies eros, nec ultricies eros eros nec eros.",
}) => {
  return (
    <section className="home">
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
};

export default Home;
