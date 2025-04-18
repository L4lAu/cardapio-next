import css from './card.module.css';



const pratosPP = [
  {
    id:7,
    imagem: "../pratosFoto/Lasagna Bolognese.avif",
    titulo: "Lasagna Bolognese",
    ingrediente: "carne moída, molho bolonhesa, queijo e massa fresca",
    preco: "R$ 78,90",
  },
  { 
    id:9,
    imagem: "../pratosFoto/pumpkinlasagna.png",
    titulo: "pumpkin ricotta lasagna",
    ingrediente: "abobora, ricota, molho bechamel, queijo parmesão",
    preco: "R$ 65,00",
  },
  {
    id:10,
    imagem: "../pratosFoto/Gnocchi de Batata.jpg",
    titulo: "Gnocchi de Batata",
    ingrediente: "gnocchi, molho de tomate, manjericão e parmesão",
    preco: "R$ 59,90",
  },
  {
    id:11,
    imagem: "../pratosFoto/Ravioli de Ricota.webp",
    titulo: "Ravioli de Ricota",
    ingrediente: "massa fresca, ricota e molho de manteiga e sálvia",
    preco: "R$ 62,00",
  },
  {
    id:5,
    imagem: "../pratosFoto/Risotto de Funghi.webp",
    titulo: "Risotto de Funghi",
    ingrediente: "arroz arbóreo, cogumelos funghi, caldo de legumes e queijo parmesão",
    preco: "R$ 79,00",
  },
  {
    id: 12,
    imagem: "../pratosFoto/Lasagna Vegetariana.jpg",
    titulo: "Lasagna Vegetariana",
    ingrediente: "abobrinha, berinjela, molho de tomate, queijo e massa fresca",
    preco: "R$ 74,50",
  },
  {
    id: 13,
    imagem: "../pratosFoto/Risotto ai Frutti di Mar.jpg",
    titulo: "Risotto ai Frutti di Mar",
    ingrediente: "arroz arbóreo, camarões, lula, mexilhões e caldo de peixe",
    preco: "R$ 85,00",
  },
  {
    id: 9,
    imagem: "../pratosFoto/Lasagna alla Carne Macinata.jpg",
    titulo: "Lasagna alla Carne Macinata",
    ingrediente: "massa fresca, carne moída, molho de tomate, queijo e molho bechamel",
    preco: "R$ 74,00",
  },

]

const pratosMacarrão = [
  {
    id: 1,
    imagem: "../pratosFoto/hamMushroom.webp",
    titulo: "Ham Mushroom",
    ingrediente: "macarrão, cogumelo, presunto e molho especial",
    preco: "R$ 66,90",
  },
  {
    id:2,
    imagem: "../pratosFoto/images.jpeg",
    titulo: "Ragù alla bolognese",
    ingrediente: "carne, legumes, vinho, extrato de tomate e molho.",
    preco: "R$ 53,99",
  },
  {
    id:3,
    imagem: "../pratosFoto/Spaghetti Carbonara.jpg",
    titulo: "Spaghetti Carbonara",
    ingrediente: "spaghetti, ovos, pancetta, queijo parmesão e pimenta preta",
    preco: "R$ 54,50",
  },
  {
    id:4,
    imagem: "../pratosFoto/Penne Arrabbiata.webp",
    titulo: "Penne Arrabbiata",
    ingrediente: "penne, molho de tomate picante, alho e azeite",
    preco: "R$ 48,90",
  },
  {
    id:6,
    imagem: "../pratosFoto/Fettucine Alfredo.webp",
    titulo: "Fettucine Alfredo",
    ingrediente: "fettucine, molho de creme de leite, queijo parmesão e manteiga",
    preco: "R$ 68,00",
  },
  {
    id: 7,
    imagem: "../pratosFoto/Spaghetti Aglio e Olio.webp",
    titulo: "Spaghetti Aglio e Olio",
    ingrediente: "spaghetti, alho, azeite, pimenta e salsinha",
    preco: "R$ 45,00",
  },
  {
    id: 8,
    imagem: "../pratosFoto/Tagliatelle al Sugo di Fungh.jpeg",
    titulo: "Tagliatelle al Sugo di Fungh",
    ingrediente: "tagliatelle, cogumelos frescos, creme de leite e queijo parmesão",
    preco: "R$ 69,00",
  },
  
  {
    id: 14,
    imagem: "../pratosFoto/Fettuccine ao Pesto.jpeg",
    titulo: "Fettuccine ao Pesto",
    ingrediente: "fettuccine, molho pesto de manjericão, pinoli e queijo parmesão",
    preco: "R$ 72,00",
  },
  
  ];



const pratosPizza = [
{ id:12,
  imagem: "../pratosFoto/Pizza Margherita.jpg",
  titulo: "Pizza Margherita",
  ingrediente: "molho de tomate, mozzarella, manjericão e azeite",
  preco: "R$ 55,00",
},
{
  id:13,
  imagem: "../pratosFoto/Pizza Pepperoni.jpg",
  titulo: "Pizza Pepperoni",
  ingrediente: "molho de tomate, mozzarella, pepperoni, orégano",
  preco: "R$ 63,90",
},
{
  id:14,
  imagem: "../pratosFoto/Pizza Quattro Formaggi.jpeg",
  titulo: "Pizza Quattro Formaggi",
  ingrediente: "molho de tomate, mozzarella, gorgonzola, parmesão e ricota",
  preco: "R$ 72,90",
},
{
  id: 15,
  imagem: "../pratosFoto/Pizza Marinara.jpg",
  titulo: "Pizza Marinara",
  ingrediente: "molho de tomate, alho, orégano e azeite de oliva",
  preco: "R$ 49,00",
},
{
  id: 16,
  imagem: "../pratosFoto/Pizza Prosciutto e Funghi.webp",
  titulo: "Pizza Prosciutto e Funghi",
  ingrediente: "molho de tomate, mozzarella, presunto e cogumelos",
  preco: "R$ 68,50",
},
{
  id: 17,
  imagem: "../pratosFoto/Pizza Capricciosa.avif",
  titulo: "Pizza Capricciosa",
  ingrediente: "molho de tomate, mozzarella, presunto, cogumelos, alcachofras e azeitonas",
  preco: "R$ 75,00",
},
{
  id: 18,
  imagem: "../pratosFoto/Pizza Diavola.jpg",
  titulo: "Pizza Diavola",
  ingrediente: "molho de tomate, mozzarella, salame picante e orégano",
  preco: "R$ 69,90",
},
{
  id: 19,
  imagem: "../pratosFoto/Pizza Napoletana.jpg",
  titulo: "Pizza Napoletana",
  ingrediente: "molho de tomate, mozzarella, anchovas, alcaparras e orégano",
  preco: "R$ 70,00",
}


];
const sobremesas = [
  {
    id:1,
    imagem: "../pratosFoto/Tiramisu.jpg",
    titulo: "Tiramisu",
    ingrediente: "café, queijo mascarpone, cacau em pó, biscoitos champagne e licor",
    preco: "R$ 38,90",
  },
  {
    id: 2,
    imagem: "../pratosFoto/.jpg",
    titulo: "Panna Cotta",
    ingrediente: "creme de leite, açúcar, gelatina e calda de frutas vermelhas",
    preco: "R$ 34,00",
  },
  {
    id: 3,
    imagem: "../pratosFoto/.jpg",
    titulo: "Cannoli Siciliani",
    ingrediente: "massa crocante frita recheada com creme de ricota doce e frutas cristalizadas",
    preco: "R$ 42,50",
  },
  {
    id: 4,
    imagem: "../pratosFoto/.jpg",
    titulo: "Zabaione",
    ingrediente: "gemas, açúcar e vinho Marsala batidos em creme leve",
    preco: "R$ 36,90",
  }
]


const MacarrãoCard = () => {
  return (
    <>
    <h1 className={css.subtitulo}>Piatti di Pasta</h1>
    <div className={css.container}>
        <div className={css.container2}>
        {pratosMacarrão.map((item) => (
          <div key={item.id} className={css.card}>
            <div className={css.limiteimg}>
              <img src={item.imagem} alt={item.titulo} className={css.cardImagem} />
            </div>
            <p className={css.titulo}>{item.titulo}</p>
            <p className={css.ingrediente}>{item.ingrediente}</p>
            <p className={css.preco}>{item.preco}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}


const PizzaCard = () => {
  return (
    <>
    <h1 className={css.subtitulo}>Pizze</h1>
      <div className={css.container}>
        <div className={css.container2}>
        {pratosPizza.map((item) => (
          <div key={item.id} className={css.card}>
            <div className={css.limiteimg}>
              <img src={item.imagem} alt={item.titulo} className={css.cardImagem} />
            </div>
            <p className={css.titulo}>{item.titulo}</p>
            <p className={css.ingrediente}>{item.ingrediente}</p>
            <p className={css.preco}>{item.preco}</p>
          </div>
        ))}
        </div>
      </div>
      
    
</>
  );
};
const SobremesaCard = () => {
  return (
    <>
    <h1 className={css.subtitulo}>Dolci della Casa</h1>
    <div className={css.container}>
      <div className={css.container2}>
      {sobremesas.map((item) => (
        <div key={item.id} className={css.card}>
          <div className={css.limiteimg}>
            <img src={item.imagem} alt={item.titulo} className={css.cardImagem} />
          </div>
          <p className={css.titulo}>{item.titulo}</p>
          <p className={css.ingrediente}>{item.ingrediente}</p>
          <p className={css.preco}>{item.preco}</p>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}
const PrimeirosPratosCard = () => {
  return (
    <>
    <h1 className={css.subtitulo}>Primi Piatti </h1>
    <div className={css.container}>
      <div className={css.container2}>
      {pratosPP.map((item) => (
        <div key={item.id} className={css.card}>
          <div className={css.limiteimg}>
            <img src={item.imagem} alt={item.titulo} className={css.cardImagem} />
          </div>
          <p className={css.titulo}>{item.titulo}</p>
          <p className={css.ingrediente}>{item.ingrediente}</p>
          <p className={css.preco}>{item.preco}</p>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

module.exports = {PizzaCard, MacarrãoCard, SobremesaCard, PrimeirosPratosCard};

