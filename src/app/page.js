"use client";

import { useRef, useEffect } from "react";
import "./home.css";
import Carrossel from "../components/carrossel/carrossel.jsx"; // o carrossel de baixo
import Card from "../components/Card/card"
import Cardapio from "./cardapio";


export default function SlidePrincipal() {
  const slidesRef = useRef(null);
  const totalSlides = 3;
  const currentSlide = useRef(0);
  const intervalRef = useRef(null);

  const showSlide = (index) => {
    currentSlide.current = (index + totalSlides) % totalSlides;
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentSlide.current * 100}vw)`;
    }
  };

  useEffect(() => {
    showSlide(0);

    intervalRef.current = setInterval(() => {
      showSlide(currentSlide.current + 1);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slides" ref={slidesRef}>
          <div className="slide">
            <img src="/home/restaurante1.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="/home/restaurante2.jpg" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="/home/scooter.jpg" alt="Slide 3" />
          </div>
        </div>

        <div className="controls">
          <button className="control-btn" onClick={() => showSlide(currentSlide.current - 1)}>❮</button>
          <button className="control-btn" onClick={() => showSlide(currentSlide.current + 1)}>❯</button>
        </div>
      </div>

      {/* Carrossel de baixo */}
      <section style={{ padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Veja mais opções</h2>
        <Carrossel />
      </section>


    <div style={{color: 'black'}}>
      <h1 style={{display: 'flex', justifyContent: 'center', paddingBottom: '4vh', fontSize: '300%'}}>cardapio</h1>

      <h2 style={{display: 'flex', justifyContent: 'center'}}>mais pedidos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        
        <Card
          
          imagem="../pratosFoto/hamMushroom.webp"
          titulo="Ham Mushroom"
          ingrediente="macarrão, cogumelo, presunto e molho especial"
          preco="R$ 66,90"
          />
    
        <Card
          imagem="../pratosFoto/images.jpeg"
          titulo="Ragù alla bolognese"
          ingrediente="carne, legumes, vinho, extrato de tomate e molho."
          preco="R$ 53,99"
          />
          <Card
            imagem="../pratosFoto/Spaghetti Carbonara.jpg" 
            titulo="Spaghetti Carbonara" 
            ingrediente="spaghetti, ovos, pancetta, queijo parmesão e pimenta preta" 
            preco="R$ 54,50"
            />
          
          <Card
          imagem="../pratosFoto/Penne Arrabbiata.webp"
          titulo="Penne Arrabbiata" 
          ingrediente="penne, molho de tomate picante, alho e azeite" 
          preco="R$ 48,90"
          />
          <Card
          imagem="../pratosFoto/Risotto de Funghi.webp"
          titulo="Risotto de Funghi" 
          ingrediente="arroz arbóreo, cogumelos funghi, caldo de legumes e queijo parmesão" 
          preco="R$ 79,00"
          />
          <Card
          imagem="../pratosFoto/Fettucine Alfredo.webp" 
          titulo="Fettucine Alfredo" 
          ingrediente="fettucine, molho de creme de leite, queijo parmesão e manteiga" 
          preco="R$ 68,00"
          />



          
      </div>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>massa</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

      
      <Card
          imagem="../pratosFoto/Lasagna Bolognese.avif"
          titulo="Lasagna Bolognese" 
          ingrediente="carne moída, molho bolonhesa, queijo e massa fresca" 
          preco="R$ 78,90"
          />
      <Card
          imagem="../pratosFoto/pumpkinlasagna.png"
          titulo="pumpkin ricotta lasagna"
          ingrediente="abobora, ricota, molho bechamel, queijo parmesão"
          preco="R$ 65,00"
          />
          <Card
          imagem="../pratosFoto/Gnocchi de Batata.jpg" 
          titulo="Gnocchi de Batata" 
          ingrediente="gnocchi, molho de tomate, manjericão e parmesão" 
          preco="R$ 59,90"
          />
          
          <Card      
          imagem="../pratosFoto/Ravioli de Ricota.webp"
          titulo="Ravioli de Ricota" 
          ingrediente="massa fresca, ricota e molho de manteiga e sálvia" 
          preco="R$ 62,00"
          />
      </div>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>Pizza</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        
      <Card
          imagem="../pratosFoto/Pizza Margherita.jpg"
          titulo="Pizza Margherita" 
          ingrediente="molho de tomate, mozzarella, manjericão e azeite" 
          preco="R$ 55,00"
          />
          
          <Card
          imagem="../pratosFoto/Pizza Pepperoni.jpg"
          titulo="Pizza Pepperoni" 
          ingrediente="molho de tomate, mozzarella, pepperoni, orégano" 
          preco="R$ 63,90"
          />
          <Card
          imagem="../pratosFoto/Pizza Quattro Formaggi.jpeg"
           titulo="Pizza Quattro Formaggi" 
          ingrediente="molho de tomate, mozzarella, gorgonzola, parmesão e ricota" 
          preco="R$ 72,90"
          />
          </div>
          <h2 style={{display: 'flex', justifyContent: 'center'}}>sobremesa</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        
      <Card
          imagem="../pratosFoto/Tiramisu.jpg"
          titulo="Tiramisu" 
          ingrediente="café, queijo mascarpone, cacau em pó, biscoitos champagne e licor" 
          preco="R$ 38,90"
          />
      </div>
    </div>
       
    </>
  );
}






