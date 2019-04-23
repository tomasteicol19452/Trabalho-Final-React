const postData = [
  {
    id: 1,
    author: "Rute",
    imgUrl: "https://recipes.timesofindia.com/photo/53110049.cms",
    date: "04/08/2019",
    nLikes: 390,
    comentarios: [
      ["Vitor", "05/08/2019", "Deliciosa! 😋"],
      ["Hugo", "06/08/2019", "Gostei Imenso."],
      ["Ana", "10/09/2019", "Por mim levava ananás..."],
      ["Tomas", "04/10/2019", "Prefiro um belo salmão 🐟"]
    ],
    description: "Deliciosa Pizza, feita por alguém na internet."
  },
  {
    id: 2,
    author: "Ricardo",
    imgUrl:
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
    date: "19/08/2019",
    nLikes: 230,
    comentarios: [["Zé", "20/08/2019", "Hamburger is life"]],
    description: "Hamburger is love"
  },
  {
    id: 3,
    author: "Manuel",
    imgUrl:
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg",
    date: "22/08/2019",
    nLikes: 1,
    comentarios: [
      ["Pedro", "22/08/2019", "My favorite food!!!"],
      ["Joana", "22/08/2019", "No one... Well except Pedro..."],
      ["Rui", "23/08/2019", "Nice Try... 😑"]
    ],
    description: "Who else loves salad?"
  },
  {
    id: 4,
    author: "João",
    imgUrl:
      "https://cdn-image.foodandwine.com/sites/default/files/1499783284/rainbow-cake-XL-RECIPE2017.jpg",
    date: "30/08/2019",
    nLikes: 350,
    comentarios: [
      ["Rita", "31/08/2019", "Parece o da minha avó"],
      ["Rui", "01/09/2019", "😲"],
      ["Maria", "01/09/2019", "It looks so good"]
    ],
    description: "Acabadinho de fazer"
  },
  {
    id: 5,
    author: "Raquel",
    imgUrl: "http://www.pamperedchef.com/iceberg/com/recipe/1126803-lg.jpg",
    date: "01/09/2019",
    nLikes: 210,
    comentarios: [["Tiago", "01/09/2019", "Everyone is in love with pizza"]],
    description: "I think I'm in love ❤️"
  },
  {
    id: 6,
    author: "Hugo",
    imgUrl:
      "http://babul.pt/wp-content/uploads/2016/07/babul-bitoque-no-prato-menu-13-01.jpg",
    date: "02/09/2019",
    nLikes: 225,
    comentarios: [
      ["Carolina", "02/09/2019", "Sem dúvidas 😁"],
      ["Vasco", "03/09/2019", "Comia e repetia"]
    ],
    description: "Best food ever!!!"
  },
  {
    id: 7,
    author: "Claudio",
    imgUrl:
      "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/My-Brazilian-Feijoada-_EXPS_THD17_205084_B08_15_6b.jpg",
    date: "02/09/2019",
    nLikes: 260,
    comentarios: [["Sara", "04/09/2019", "A minha favorita 😍"]],
    description: "Feijoada Brasileira"
  },
  {
    id: 8,
    author: "Joaquim",
    imgUrl:
      "http://www.lovethispic.com/uploaded_images/58143-Cute-Cupcakes.jpg",
    date: "03/09/2019",
    nLikes: 410,
    comentarios: [
      ["Sandra", "03/09/2019", "So cute!!!"],
      ["Pedro", "05/09/2019", "How many calories does it have?!?!"]
    ],
    description: "Who wants to taste one?"
  },
  {
    id: 9,
    author: "Barbara",
    imgUrl:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/07/dairy-free-chocolate-peanut-butter-ice-cream-recipe-4.jpg",
    date: "06/09/2019",
    nLikes: 580,
    comentarios: [
      ["Marlene", "06/09/2019", "Is it gluten free?"],
      ["Marlene", "08/09/2019", "Gluten???"],
      ["Marlene", "10/09/2019", "Please answer"]
    ],
    description: "Dairy-Free Chocolate Peanut Butter Ice Cream 🤗"
  },
  {
    id: 10,
    author: "Ramos",
    imgUrl:
      "https://paraisodossabores.pt/wp-content/uploads/2016/11/chouri%C3%A7o-carne-extra.png",
    date: "08/09/2019",
    nLikes: 1040,
    comentarios: [
      ["Jorge", "08/09/2019", "Adoro"],
      ["Andreia", "08/09/2019", "Lindo"]
    ],
    description: "Que rico chouriço"
  },
  {
    id: 11,
    author: "Carlos",
    imgUrl:
      "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Layered-Fresh-Fruit-Salad_EXPS_HCA18_2778_B04_26_3b.jpg",
    date: "09/09/2019",
    nLikes: 310,
    comentarios: [["Joana", "09/09/2019", "This one we like 😁"]],
    description: "Fruit Salad 😋😋😋"
  },
  {
    id: 12,
    author: "André",
    imgUrl:
      "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x500.jpg",
    date: "09/09/2019",
    nLikes: 500,
    comentarios: [
      ["Tânia", "09/09/2019", "It looks great"],
      ["Rui", "09/09/2019", "Amazing!!!"],
      [
        "Pedro",
        "10/09/2019",
        "Do you guys have any idea how many calories it has?! Just Salad for me thanks."
      ]
    ],
    description: "Some lovely lasagna"
  },
  {
    id: 13,
    author: "Marco",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
    date: "12/09/2019",
    nLikes: 450,
    comentarios: [["juliana", "13/09/2019", "Yummy!"]],
    description: "An amazing dish"
  },
  {
    id: 14,
    author: "Marta",
    imgUrl:
      "https://pinchofyum.com/wp-content/uploads/Red-Curry-Noodles-Stir-Fry-Square.jpg",
    date: "15/09/2019",
    nLikes: 390,
    comentarios: [["Marco", "15/09/2019", "Spicy!"]],
    description: "Red Curry Noodles"
  },
  {
    id: 15,
    author: "Henrique",
    imgUrl:
      "https://www.yellowblissroad.com/wp-content/uploads/2015/07/lemon-chicken-fb.jpg",
    date: "16/09/2019",
    nLikes: 270,
    comentarios: [],
    description: "Lemon Garlic Roasted Chicken Drumsticks"
  },
  {
    id: 16,
    author: "Francisco",
    imgUrl:
      "https://d1doqjmisr497k.cloudfront.net/-/media/mccormickcan/recipes/tablet/cinnamon_steak_rub_800.ashx?vd=20180617T022438Z&hash=DC99503EA289ABA48E49F5A91C80EEE752F9EB2C",
    date: "16/09/2019",
    nLikes: 390,
    comentarios: [["Patricia", "16/09/2019", "😠😠😠😠"]],
    description: "The things vegetarians lose..."
  },
  {
    id: 17,
    author: "Patricia",
    imgUrl: "https://www.pamperedchef.ca/iceberg/com/recipe/990697-lg.jpg",
    date: "18/09/2019",
    nLikes: 0,
    comentarios: [["Tomas", "18/09/2019", "Não."]],
    description: "So yummy 😃"
  },
  {
    id: 18,
    author: "Tomas",
    imgUrl:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8c2f746c6aea4951b41d94ea96399901/BFV17423_4_Ways_To_Cook_Salmon_FB1080SQ.jpg",
    date: "19/09/2019",
    nLikes: 25,
    comentarios: [["Raquel", "19/09/2019", "Have you tried pizza?!"]],
    description: "Pan-fried salmon is so freaking delicious"
  },
  {
    id: 19,
    author: "Tatiana",
    imgUrl:
      "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg",
    date: "22/09/2019",
    nLikes: 580,
    comentarios: [["Hugo", "23/09/2019", "I'm getting so hungry"]],
    description: "Spaghetti!!!"
  },
  {
    id: 20,
    author: "Afonso",
    imgUrl:
      "https://images.ricardocuisine.com/services/recipes/1074x1074_831593511531f257a2e637-background.jpg",
    date: "23/09/2019",
    nLikes: 380,
    comentarios: [
      ["Ana", "23/09/2019", "They look perfect"],
      ["Tiago", "23/09/2019", "I love to eat them by the sea, so relaxing"]
    ],
    description: "Pasteis de Belem"
  }
];

export default postData;
