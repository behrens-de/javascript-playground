const dogs = [
  {
    name: "American Pitbull Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_287024849-Kopie-430x430.jpg",

    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["freundlich", "gutmütig", "selbstbewusst", "treu"],
  },
  {
    name: "Alpenländische Dachsbracke",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/04/shutterstock_1702569346-Kopie-430x430.jpg",
    height: "36-38cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["arbeitswillig", "freundlich", "mutig", "treu"],
  },
  {
    name: "Appenzeller Sennenhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/04/shutterstock_1925631671-Kopie-430x430.jpg",
    height: "50-56cm",
    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["aktiv", "intelligent", "selbstbewusst", "verschmust"],
  },
  {
    name: "Affenpinscher",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/04/shutterstock_445018054-Kopie-430x430.jpg",
    height: "25-30cm",
    typeOfBreed: "Begleithund",
    activity: 35,
    personality: ["anpassbar", "lebhaft", "verschmust", "verspielt"],
  },
  {
    name: "Alaskan Malamute",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/04/shutterstock_1803184699_komp-430x430.jpg",
    height: "59-64cm",
    typeOfBreed: "Begleithund",
    activity: 45,
    personality: ["aktiv", "arbeitswillig", "kinderlieb", "willensstark"],
  },
  {
    name: "American Staffordshire Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/07/American-Staffordshire-Terrier_553222033-430x430.jpg",
    height: "43-48cm",
    typeOfBreed: "Begleithund",
    activity: 40,
    personality: ["aufmerksam", "lebhaft", "lernwillig", "mutig"],
  },
  {
    name: "Afghanischer Windhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_650128147-komprimiert-430x430.jpg",
    height: "63-74cm",
    typeOfBreed: "Begleithund",
    activity: 45,
    personality: ["anhänglich", "selbstbewusst", "wachsam", "willensstark"],
  },
  {
    name: "Akita",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/11/shutterstock_265439057-komprimiert-430x430.jpg",
    height: "58-68cm",
    typeOfBreed: "Wachhund",
    activity: 35,
    personality: ["ausgeglichen", "gehorsam", "treu", "willensstark"],
  },
  {
    name: "Australian Shepherd",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/06/shutterstock_416466661-430x430.jpg",
    height: "46-58cm",
    typeOfBreed: "Hütehund",
    activity: 50,
    personality: ["aktiv", "ausgeglichen", "gutmütig", "intelligent"],
  },
  {
    name: "Airedale Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/04/shutterstock_401718178-komprimiert-430x430.jpg",
    height: "56-61cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["anhänglich", "freundlich", "intelligent", "mutig"],
  },

  {
    name: "Bloodhound",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/07/shutterstock_1113495818-Kopie-430x430.jpg",
    height: "58-69cm",
    typeOfBreed: "Polizeihund",
    activity: 40,
    personality: ["arbeitswillig", "gutmütig", "kinderlieb"],
  },
  {
    name: "Bergamasker",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_65637454-Kopie-430x430.jpg",
    height: "54-60cm",
    typeOfBreed: "Hütehund",
    activity: 45,
    personality: ["arbeitswillig", "gutmütig", "intelligent", "selbstbewusst"],
  },
  {
    name: "Border Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/05/shutterstock_1464454034_komp-430x430.jpg",
    height: "28-40cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["aktiv", "freundlich", "intelligent", "lebhaft"],
  },
  {
    name: "Bologneser",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/05/shutterstock_626156432_komp-430x430.jpg",
    height: "20-30cm",
    typeOfBreed: "Begleithund",
    activity: 20,
    personality: ["anhänglich", "gutmütig", "verschmust", "wachsam"],
  },
  {
    name: "Bichon Frisé",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/05/iStock-160987733-430x430.jpg",
    height: "23-30cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["aktiv", "freundlich", "intelligent", "kinderlieb"],
  },
  {
    name: "Belgischer Schäferhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/04/shutterstock_138940277_Kopie-430x430.jpg",
    height: "58-62cm",
    typeOfBreed: "Polizeihund",
    activity: 50,
    personality: ["aktiv", "anhänglich", "lebhaft", "lernwillig"],
  },
  {
    name: "Border Collie",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_376523338-430x430.jpg",
    height: "50-53cm",
    typeOfBreed: "Hütehund",
    activity: 50,
    personality: ["aktiv", "intelligent", "kinderlieb", "lernwillig"],
  },
  {
    name: "Beagle",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/02/shutterstock_222861379-430x430.jpg",
    height: "33-40cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["freundlich", "lebhaft", "treu", "wachsam"],
  },
  {
    name: "Berner Sennenhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_128176703-430x430.jpg",
    height: "57-70cm",
    typeOfBreed: "Familienhund",
    activity: 35,
    personality: ["gutmütig", "selbstbewusst", "treu", "wachsam"],
  },
  {
    name: "Bullterrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_696633640-430x430.jpg",
    height: "45-55cm",
    typeOfBreed: "Wachhund",
    activity: 40,
    personality: ["anhänglich", "ausgeglichen", "lebhaft", "mutig"],
  },
  {
    name: "Briard",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/03/shutterstock_551475355-1-1-430x430.jpg",
    height: "56-68cm",
    typeOfBreed: "Hütehund",
    activity: 40,
    personality: ["anhänglich", "kinderlieb", "lebhaft", "liebevoll"],
  },
  {
    name: "Bernhardiner",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/11/shutterstock_539843389-komprimiert-430x430.jpg",
    height: "65-90cm",
    typeOfBreed: "Wachhund",
    activity: 20,
    personality: ["ausgeglichen", "freundlich", "gutmütig", "wachsam"],
  },
  {
    name: "Bearded Collie",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/shutterstock_637931764-komprimiert-430x430.jpg",
    height: "51-56cm",
    typeOfBreed: "Hütehund",
    activity: 40,
    personality: ["aufmerksam", "intelligent", "lebhaft", "selbstbewusst"],
  },
  {
    name: "Basenji",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/Basenji_520544230-komprimiert-430x430.jpg",
    height: "40-43cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["intelligent", "liebevoll", "selbstbewusst", "willensstark"],
  },
  {
    name: "Bordeaux Dogge",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/shutterstock_116089669-1-1-430x430.jpg",
    height: "58-68cm",
    typeOfBreed: "Wachhund",
    activity: 20,
    personality: ["ausgeglichen", "freundlich", "gutmütig", "wachsam"],
  },
  {
    name: "Basset Hound",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_247455631-komprimiert-430x430.jpg",
    height: "33-38cm",
    typeOfBreed: "Jagdhund",
    activity: 35,
    personality: ["anhänglich", "ausgeglichen", "treu", "willensstark"],
  },
  {
    name: "Bullmastiff",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/12/Bullmastiff-stehend-430x430.jpg",
    height: "61-69cm",
    typeOfBreed: "Wachhund",
    activity: 35,
    personality: ["intelligent", "lebhaft", "treu", "wachsam"],
  },
  {
    name: "Bobtail (Old English Sheepdog)",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_382239544-komprimiert-430x430.jpg",
    height: "56-61cm",
    typeOfBreed: "Hütehund",
    activity: 40,
    personality: ["ausgeglichen", "kinderlieb", "treu", "verspielt"],
  },
  {
    name: "Boston Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_1195591732-komprimiert-430x430.jpg",
    height: "36-42cm",
    typeOfBreed: "Begleithund",
    activity: 35,
    personality: ["aktiv", "freundlich", "intelligent", "lebhaft"],
  },
  {
    name: "Deutscher Pinscher",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_1100668127-430x430.jpg",
    height: "45-50cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: [
      "aktiv",
      "intelligent",
      "selbstbewusst",
      "verschmust",
      "verspielt",
      "wachsam",
    ],
  },
  {
    name: "Dackel",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/11/Rauhaardackel_iStock-858143422-430x430.jpg",
    height: "20-26cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["arbeitswillig", "intelligent", "mutig", "willensstark"],
  },
  {
    name: "Deutsche Dogge",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/07/Deutsche-Dogge_243209011-430x430.jpg",
    height: "72-86cm",
    typeOfBreed: "Wachhund",
    activity: 40,
    personality: ["anhänglich", "freundlich", "kinderlieb", "sensibel"],
  },
  {
    name: "Dobermann",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/10/Dobermann_673893031-430x430.jpg",
    height: "63-72cm",
    typeOfBreed: "Wachhund",
    activity: 40,
    personality: ["anhänglich", "arbeitswillig", "ausgeglichen", "mutig"],
  },
  {
    name: "Deutscher Boxer",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/05/shutterstock_232556533-komprimiert-430x430.jpg",
    height: "53-63cm",
    typeOfBreed: "Polizeihund",
    activity: 40,
    personality: ["intelligent", "liebevoll", "verspielt", "wachsam"],
  },
  {
    name: "Dalmatiner",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/07/Dalmatiner_162655121-430x430.jpg",
    height: "54-62cm",
    typeOfBreed: "Familienhund",
    activity: 50,
    personality: ["aktiv", "kinderlieb", "liebevoll", "sensibel"],
  },
  {
    name: "Deutscher Schäferhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/11/shutterstock_296346053-1-430x430.jpg",
    height: "55-65cm",
    typeOfBreed: "Polizeihund",
    activity: 45,
    personality: ["arbeitswillig", "intelligent", "selbstbewusst", "treu"],
  },
  {
    name: "Dogo Argentino",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/12/shutterstock_386096602-430x430.jpg",
    height: "60-68cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["freundlich", "selbstbewusst", "treu", "wachsam"],
  },
  {
    name: "Deutsch Drahthaar",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/11/shutterstock_1112510438-komprimiert-430x430.jpg",
    height: "57-68cm",
    typeOfBreed: "Jagdhund",
    activity: 50,
    personality: ["arbeitswillig", "gehorsam", "mutig", "treu"],
  },
  {
    name: "Eurasier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/05/shutterstock_1945447228-Kopie-430x430.jpg",
    height: "48-60cm",
    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["anhänglich", "ausgeglichen", "selbstbewusst", "wachsam"],
  },
  {
    name: "Englische Bulldogge",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_1202703667-komprimiert-430x430.jpg",
    height: "31-40cm",
    typeOfBreed: "Familienhund",
    activity: 20,
    personality: ["kinderlieb", "liebevoll", "mutig", "treu"],
  },
  {
    name: "English Pointer",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/12/shutterstock_663268522-komprimiert-430x430.jpg",
    height: "61-69cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["arbeitswillig", "ausgeglichen", "freundlich", "lernwillig"],
  },
  {
    name: "English Cocker Spaniel",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/English-Cocker-Spaniel_109129094-430x430.jpg",
    height: "38-41cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["anhänglich", "freundlich", "gehorsam", "lebhaft"],
  },
  {
    name: "Foxterrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/shutterstock_692745586-komprimiert-430x430.jpg",
    height: "35-39cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["aufmerksam", "freundlich", "lebhaft", "mutig"],
  },
  {
    name: "Französische Bulldogge",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/05/Fraz%C3%B6sische-Bulldogge_333010346-430x430.jpg",
    height: "24-35cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["freundlich", "gutmütig", "liebevoll", "verspielt"],
  },
  {
    name: "Gordon Setter",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/03/shutterstock_143624941-komprimiert-430x430.jpg",
    height: "62-66cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["ausgeglichen", "freundlich", "intelligent", "lebhaft"],
  },
  {
    name: "Golden Retriever",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/05/shutterstock_246054700-430x430.jpg",
    height: "51-56cm",
    typeOfBreed: "Blindenhund",
    activity: 40,
    personality: ["aktiv", "freundlich", "intelligent", "kinderlieb"],
  },
  {
    name: "Havaneser",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/03/shutterstock_555561031-komprimiert-430x430.jpg",
    height: "23-27cm",
    typeOfBreed: "Familienhund",
    activity: 25,
    personality: ["gutmütig", "kinderlieb", "lebhaft", "liebevoll"],
  },
  {
    name: "Holländischer Schäferhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/shutterstock_663698911-komprimiert-1-430x430.jpg",
    height: "55-62cm",
    typeOfBreed: "Polizeihund",
    activity: 50,
    personality: ["aktiv", "arbeitswillig", "treu", "wachsam"],
  },
  {
    name: "Hovawart",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/11/shutterstock_640646005-430x430.jpg",
    height: "58-70cm",
    typeOfBreed: "Wachhund",
    activity: 45,
    personality: ["arbeitswillig", "ausgeglichen", "selbstbewusst", "treu"],
  },
  {
    name: "Irish Wolfhound",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/02/shutterstock_301957253-komprimiert-430x430.jpg",
    height: "71-86cm",
    typeOfBreed: "Jagdhund",
    activity: 50,
    personality: ["ausgeglichen", "freundlich", "gutmütig", "sensibel"],
  },
  {
    name: "Jack Russell Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_651132271-1-430x430.jpg",
    height: "25-30cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["freundlich", "intelligent", "lebhaft", "wachsam"],
  },
  {
    name: "Komondor",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_454303438-Kopie-430x430.jpg",
    height: "70-80cm",
    typeOfBreed: "Begleithund",
    activity: 20,
    personality: ["ausgeglichen", "gehorsam", "wachsam"],
  },
  {
    name: "Kangal",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/iStock-1048194302-komprimiert-430x430.jpg",
    height: "71-81cm",
    typeOfBreed: "Hütehund",
    activity: 45,
    personality: ["ausgeglichen", "intelligent", "treu", "wachsam"],
  },
  {
    name: "Kooikerhondje",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_350733329-komprimiert-430x430.jpg",
    height: "38-40cm",
    typeOfBreed: "Familienhund",
    activity: 35,
    personality: ["aktiv", "ausgeglichen", "gehorsam", "treu"],
  },
  {
    name: "Kleiner Münsterländer",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/04/shutterstock_42078781-komprimiert-430x430.jpg",
    height: "48-56cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["ausgeglichen", "freundlich", "lernwillig", "selbstbewusst"],
  },
  {
    name: "Kleinspitz",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/iStock-873854014-430x430.jpg",
    height: "23-28cm",
    typeOfBreed: "Begleithund",
    activity: 25,
    personality: ["anhänglich", "aufmerksam", "lebhaft", "wachsam"],
  },
  {
    name: "Laika",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/07/shutterstock_623883086-430x430.jpg",
    height: "50-63cm",
    typeOfBreed: "Jagdhund",
    activity: 50,
    personality: ["aktiv", "ausgeglichen", "lebhaft", "verspielt"],
  },
  {
    name: "Lhasa Apso",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_630314351-Kopie-430x430.jpg",
    height: "23-25cm",
    typeOfBreed: "Begleithund",
    activity: 40,
    personality: ["aufmerksam", "freundlich", "lebhaft", "wachsam"],
  },
  {
    name: "Lagotto Romagnolo",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_1121969561-Kopie-430x430.jpg",
    height: "41-48cm",
    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["arbeitswillig", "gehorsam", "intelligent", "verspielt"],
  },
  {
    name: "Labrador Retriever",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/06/shutterstock_126021596-430x430.jpg",
    height: "54-57cm",
    typeOfBreed: "Blindenhund",
    activity: 40,
    personality: ["kinderlieb", "liebevoll", "sensibel", "treu"],
  },
  {
    name: "Leonberger",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/03/shutterstock_1033151017-komprimiert-430x430.jpg",
    height: "65-80cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["gutmütig", "kinderlieb", "liebevoll", "treu"],
  },
  {
    name: "Mastiff",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_85034053-Kopie-430x430.jpg",
    height: "70-90cm",
    typeOfBreed: "Wachhund",
    activity: 20,
    personality: ["ausgeglichen", "mutig", "treu", "wachsam"],
  },
  {
    name: "Mops",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/02/shutterstock_335260598-1-430x430.jpg",
    height: "25-30cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["ausgeglichen", "freundlich", "kinderlieb", "lebhaft"],
  },
  {
    name: "Magyar Vizsla",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/shutterstock_575434099-2-1-430x430.jpg",
    height: "54-64cm",
    typeOfBreed: "Jagdhund",
    activity: 45,
    personality: ["ausgeglichen", "freundlich", "lebhaft", "sensibel"],
  },
  {
    name: "Malinois",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/03/shutterstock_1294947628-komprimiert-430x430.jpg",
    height: "56-66cm",
    typeOfBreed: "Polizeihund",
    activity: 50,
    personality: ["aktiv", "freundlich", "mutig", "wachsam"],
  },
  {
    name: "Malteser",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/11/shutterstock_1101586751-komprimiert-430x430.jpg",
    height: "20-25cm",
    typeOfBreed: "Begleithund",
    activity: 25,
    personality: ["anhänglich", "liebevoll", "selbstbewusst", "verspielt"],
  },
  {
    name: "Mittelspitz",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_240202939-komprimiert-430x430.jpg",
    height: "30-38cm",
    typeOfBreed: "Begleithund",
    activity: 25,
    personality: ["anhänglich", "aufmerksam", "intelligent", "treu"],
  },
  {
    name: "Miniature Bullterrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_144645440-430x430.jpg",
    height: "25-36cm",
    typeOfBreed: "Begleithund",
    activity: 40,
    personality: ["anhänglich", "ausgeglichen", "mutig", "verspielt"],
  },
  {
    name: "Norfolk Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/07/shutterstock_1213451051-430x430.jpg",
    height: "23-25cm",
    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["aktiv", "freundlich", "liebevoll", "selbstbewusst"],
  },
  {
    name: "Neufundländer",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_589527410-430x430.jpg",
    height: "63-71cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["freundlich", "gutmütig", "lebhaft", "liebevoll"],
  },
  {
    name: "Otterhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/07/shutterstock_6820696331-430x430.jpg",
    height: "61-69cm",
    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["aktiv", "freundlich", "kinderlieb"],
  },
  {
    name: "Old English Bulldog",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/05/shutterstock_250302700-Kopie-430x430.jpg",
    height: "40-51cm",
    typeOfBreed: "Begleithund",
    activity: 40,
    personality: ["-"],
  },
  {
    name: "Pharaonenhund",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/08/shutterstock_12133146191-430x430.jpg",
    height: "53-64cm",
    typeOfBreed: "Familienhund",
    activity: 50,
    personality: ["freundlich", "wachsam"],
  },
  {
    name: "Pekingese",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_1138694957-komprimiert-430x430.jpg",
    height: "15-25cm",
    typeOfBreed: "Begleithund",
    activity: 15,
    personality: ["ausgeglichen", "freundlich", "mutig", "treu"],
  },
  {
    name: "Parson Russell Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/04/shutterstock_1055266865-komprimiert-430x430.jpg",
    height: "31-36cm",
    typeOfBreed: "Begleithund",
    activity: 35,
    personality: ["aktiv", "arbeitswillig", "intelligent", "selbstbewusst"],
  },
  {
    name: "Pudel",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/11/Pudel_676664635-430x430.jpg",
    height: "24-60cm",
    typeOfBreed: "Familienhund",
    activity: 35,
    personality: ["intelligent", "lernwillig", "liebevoll", "treu"],
  },
  {
    name: "Rhodesian Ridgeback",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/01/shutterstock_115737610-1-430x430.jpg",
    height: "61-69cm",
    typeOfBreed: "Wachhund",
    activity: 45,
    personality: ["aktiv", "intelligent", "liebevoll", "sensibel"],
  },
  {
    name: "Rottweiler",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/10/Rottweiler-Hund-Mischlingshund-iStock-163524069-2-430x430.jpg",
    height: "56-68cm",
    typeOfBreed: "Polizeihund",
    activity: 40,
    personality: ["anhänglich", "gehorsam", "kinderlieb", "selbstbewusst"],
  },
  {
    name: "Riesenschnauzer",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/02/shutterstock_1225017208-komprimiert-430x430.jpg",
    height: "60-70cm",
    typeOfBreed: "Wachhund",
    activity: 45,
    personality: ["anhänglich", "ausgeglichen", "selbstbewusst", "treu"],
  },
  {
    name: "Shar Pei",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/05/shutterstock_1277897209-Kopie-430x430.jpg",
    height: "46-51cm",
    typeOfBreed: "Begleithund",
    activity: 20,
    personality: ["ausgeglichen", "sensibel", "willensstark"],
  },
  {
    name: "Shih Tzu",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/12/shutterstock_261443393-komprimiert-430x430.jpg",
    height: "25-27cm",
    typeOfBreed: "Begleithund",
    activity: 25,
    personality: ["anhänglich", "freundlich", "intelligent"],
  },
  {
    name: "Staffordshire Bullterrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/11/Bullterrier_268525913-430x430.jpg",
    height: "35-40cm",
    typeOfBreed: "Begleithund",
    activity: 40,
    personality: ["intelligent", "liebevoll", "mutig", "selbstbewusst"],
  },
  {
    name: "Shiba Inu",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_249195868-komprimiert-430x430.jpg",
    height: "37-40cm",
    typeOfBreed: "Jagdhund",
    activity: 40,
    personality: ["anhänglich", "intelligent", "lebhaft", "treu"],
  },
  {
    name: "Siberian Husky",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_345091346-komprimiert-430x430.jpg",
    height: "50-60cm",
    typeOfBreed: "Familienhund",
    activity: 50,
    personality: ["aufmerksam", "freundlich", "verspielt", "willensstark"],
  },
  {
    name: "Shetland Sheepdog",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/02/shutterstock_191573639-komprimiert-430x430.jpg",
    height: "33-41cm",
    typeOfBreed: "Hütehund",
    activity: 50,
    personality: ["intelligent", "kinderlieb", "liebevoll", "sensibel"],
  },
  {
    name: "Samojede",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_721159402-1-430x430.jpg",
    height: "50-60cm",
    typeOfBreed: "Familienhund",
    activity: 40,
    personality: ["anhänglich", "freundlich", "lebhaft"],
  },
  {
    name: "Tibet Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/12/shutterstock_622579874-430x430.jpg",
    height: "30-41cm",
    typeOfBreed: "Begleithund",
    activity: 35,
    personality: ["aktiv", "intelligent", "liebevoll", "selbstbewusst"],
  },
  {
    name: "West Highland White Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/11/shutterstock_150831518-430x430.jpg",
    height: "25-30cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["ausgeglichen", "gutmütig", "kinderlieb", "wachsam"],
  },
  {
    name: "Weimaraner",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/03/shutterstock_300817325-komprimiert-430x430.jpg",
    height: "57-70cm",
    typeOfBreed: "Jagdhund",
    activity: 50,
    personality: ["aktiv", "arbeitswillig", "intelligent", "wachsam"],
  },
  {
    name: "Welsh Corgi",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_1195630861-komprimiert-430x430.jpg",
    height: "25-31cm",
    typeOfBreed: "Hütehund",
    activity: 35,
    personality: ["arbeitswillig", "kinderlieb", "lebhaft", "selbstbewusst"],
  },
  {
    name: "West Highland White Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2017/11/shutterstock_150831518-430x430.jpg",
    height: "25-30cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["ausgeglichen", "gutmütig", "kinderlieb", "wachsam"],
  },
  {
    name: "Weimaraner",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/03/shutterstock_300817325-komprimiert-430x430.jpg",
    height: "57-70cm",
    typeOfBreed: "Jagdhund",
    activity: 50,
    personality: ["aktiv", "arbeitswillig", "intelligent", "wachsam"],
  },
  {
    name: "Welsh Corgi",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_1195630861-komprimiert-430x430.jpg",
    height: "25-31cm",
    typeOfBreed: "Hütehund",
    activity: 35,
    personality: ["arbeitswillig", "kinderlieb", "lebhaft", "selbstbewusst"],
  },
  {
    name: "Yorkshire Terrier",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/03/shutterstock_547062616-1-430x430.jpg",
    height: "18-23cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["intelligent", "lebhaft", "mutig", "selbstbewusst"],
  },
  {
    name: "Zwergschnauzer",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_1836759934-430x430.jpg",
    height: "35-34cm",
    typeOfBreed: "Familienhund",
    activity: 50,
    personality: ["freundlich", "lernwillig", "verschmust", "wachsam"],
  },
  {
    name: "Zwergpinscher",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/12/shutterstock_1210631812-komprimiert-430x430.jpg",
    height: "25-30cm",
    typeOfBreed: "Begleithund",
    activity: 45,
    personality: ["freundlich", "intelligent", "lernwillig", "treu"],
  },
  {
    name: "Zwergspitz",
    img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/12/shutterstock_1119342971-1-1-430x430.jpg",
    height: "18-22cm",
    typeOfBreed: "Familienhund",
    activity: 30,
    personality: ["anhänglich", "aufmerksam", "intelligent", "lebhaft"],
  },
];

let dogList = [
  "Aidi",
  "Airedale-Terrier",
  "Akbash",
  "Akita Inu",
  "Altdänischer Vorstehhund",
  "American Bulldog",
  "American Staghound",
  "American Toy Terrier",
  "American Water Spaniel",
  "Amerikanischer Cocker Spaniel",
  "Amerikanischer Cockerspaniel",
  "Amerikanischer Pit-Bullterrier",
  "Australian Cattle Dog",
  "Australian Kelpie",
  "Australian Silky Terrier",
  "Australian Terrier",
  "Australischer Treibhund",
  "Azawakh",
  "Balearen Laufhund",
  "Barbet",
  "Barsoi",
  "Basset Artésien-Normand",
  "Basset Bleu de Gascogne",
  "Basset Fauve de Bretagne",
  "Basset fauve de Bretagne",
  "Bayerischer Gebirgsschweisshund",
  "Beauceron",
  "Bedlington Terrier",
  "Bedlington-Terrier",
  "Bergamasker Hirtenhund",
  "Berger Picard",
  "Berger de Pyrénées",
  "Berger de Pyrénées Langhaariger Schlag",
  "Bichon à poil Frisé",
  "Bichon/Yorkie",
  "Black and Tan Coonhound",
  "Bobtail",
  "Boerboel",
  "Bolonka Zwetna",
  "Bordeauxdogge",
  "Bouvier Des Flandres",
  "Bouvier des Flandres",
  "Boxer",
  "Brabancon",
  "Bracco Italiano",
  "Braque Francais des Pyrénées",
  "Braque d´Auvergne",
  "Brasilianischer Terrier",
  "Briard (Berger de Brie)",
  "Bull Terrier",
  "Bull-Boxer",
  "Bulldog",
  "Ca de Bou",
  "Cairn Terrier",
  "Cairn-Terrier",
  "Cane Corso",
  "Cao da Serra da Estrela",
  "Cao da Serra de Aires",
  "Cao de Agua Portugues",
  "Cao de agua Português",
  "Catahoula Leopard Dog",
  "Cavalier King Charles Spaniel",
  "Ceský Fousek",
  "Ceský Terrier",
  "Chesapeake Bay Retriever",
  "Chihuahua",
  "Chihuahua kurzhaariger Schlag",
  "Chihuahua langhaariger Schlag",
  "Chinesischer Schopfhund",
  "Chinesischer Schopfhund Hairless-Schlag",
  "Chinesischer Schopfhund Powderpuff-Schlag",
  "Chow Chow",
  "Chow-Chow",
  "Cirneco dell´ Etna",
  "Clumber Spaniel",
  "Clumber-Spaniel",
  "Cockerpoo",
  "Collie",
  "Coton de Tuléar",
  "Curly Coated Retriever",
  "Curly-Coated Retriever",
  "Dandie Dinmont Terrier",
  "Deerhound",
  "Deutsch Kurzhaar",
  "Deutsch Langhaar",
  "Deutscher Jagdterrier",
  "Deutscher Schäferhund Brauner langhaariger Schlag",
  "Deutscher Schäferhund Cremefarbener langhaariger Schlag",
  "Deutscher Schäferhund Schwarzer langhaariger Schlag",
  "Deutscher Wachtelhund",
  "Deutscher Wolfsspitz",
  "Drever",
  "Dänischer Bauernhund",
  "Englischer Cocker Spaniel",
  "Englischer Setter",
  "Englischer Springer Spaniel",
  "English Setter",
  "English Springer Spaniel",
  "English Toy Terrier",
  "Entlebucher Sennenhund",
  "Epagneul Breton",
  "Field Spaniel",
  "Fila Brasileiro",
  "Finnischer Lapphund",
  "Finnischer Spitz",
  "Flat Coated Retriever",
  "Foxhound",
  "Foxterrier Drahthaar",
  "Foxterrier Glatthaar",
  "Galgo Espanol",
  "Glen of Imaal Terrier",
  "Gos d´Atura Català",
  "Grand Basset Griffon Vendéen",
  "Grand Bleu de Gascogne",
  "Greyhound",
  "Griffon Belge",
  "Griffon Bruxellois",
  "Griffon Fauve de Bretagne",
  "Griffon Nivernais",
  "Griffon á Poil Dur",
  "Groenendael",
  "Grosser Münsterländer",
  "Grosser Schweizer Sennenhund",
  "Grosspudel",
  "Grönlandhund",
  "Hamiltonstövare",
  "Hannoverscher Schweisshund",
  "Hollandse Herdershond",
  "Hollandse Herdershond Langhaariger Schlag",
  "Hollandse Herdershond Rauhaariger Schlag",
  "Illyrischer Schäferhund",
  "Irischer Soft Coated Wheaten Terrier",
  "Irish Red Setter",
  "Irish Terrier",
  "Irish Water Spaniel",
  "Irish red-and-white Setter",
  "Islandhund",
  "Italienisches Windspiel",
  "Jack-Russell-Terrier",
  "Japan Chin",
  "Japan Spitz",
  "Japanischer Akita",
  "Japanischer Terrier",
  "Jura-Laufhund (Bruno)",
  "Kanaanhund",
  "Kanarische Dogge",
  "Kaukasischer Schäferhund",
  "Keeshond",
  "Kerry Blue Terrier",
  "King Charles Spaniel",
  "Kromfohrländer",
  "Kurzhaarcollie",
  "Kurzhaardackel",
  "Kurzhaariger Ungarischer Vorstehhund",
  "Kuvasz",
  "Kyi Leo",
  "Labradoodle",
  "Laekenois",
  "Lakeland Terrier",
  "Landseer",
  "Langhaarcollie",
  "Langhaardackel",
  "Lappländer Rentierhund",
  "Lucas-Terrier",
  "Luzerner Laufhund",
  "Löwchen",
  "Manchester-Terrier",
  "Maremmaner Hirtenhund",
  "Maremmen Abruzzen Schäferhund",
  "Mastin Espanol",
  "Mastino Napoletano",
  "Mexikanischer Nackthund",
  "Miniatur Bullterrier",
  "Miniature American Shepherd",
  "Miniature Bull Terrier",
  "Mittelasiatischer Schäferhund",
  "Mittelasiatischer Schäferhund Kurzhaariger Schlag",
  "Mudi",
  "Nederlandse Kooikerhondje",
  "Norfolk-Terrier",
  "Norwegischer Elchhund",
  "Norwegischer Lundehund",
  "Norwich Terrier",
  "Nova Scotia Duck Tolling Retriever",
  "Old English Sheepdog",
  "Olde English Bulldogge",
  "Ostsibirischer Laika",
  "Papillon",
  "Parson-Russell-Terrier",
  "Patterdale-Terrier",
  "Perdigueiro Portugues",
  "Perro de Agua Espanol",
  "Peruvian Inca Orchid",
  "Petit Basset Griffon Vendéen",
  "Petit Basset griffon vendéen",
  "Petit Bleu de Gascogne",
  "Phalene",
  "Plummer-Terrier",
  "Podengo Portugueso Pequeno",
  "Pointer",
  "Polnische Bracke",
  "Polnischer Niederungshütehund",
  "Polski Owczarek Podhalanski",
  "Porcelaine",
  "Praszký Krysavik",
  "Pudelpointer",
  "Puli",
  "Pumi",
  "Pyrenäen-Berghund",
  "Pyrenäenberghund",
  "Pyrenäenhund",
  "Rampur-Windhund",
  "Rauhhaardackel (Zwergdackel)",
  "Russisch-Europäischer Laika",
  "Russischer Schwarzer Terrier",
  "Saarlooswolfhund",
  "Sabueso Espanol",
  "Saluki",
  "Schapendoes",
  "Schipperke",
  "Schnauzer",
  "Schottischer Jagdhund",
  "Schwarzer Terrier",
  "Schwedischer Lapphund",
  "Scottish Terrier",
  "Sealyham Terrier",
  "Sealyham-Terrier",
  "Segugio Italiano (Kurzhaar)",
  "Sheltie",
  "Shiba",
  "Shikoku",
  "Shiloh Shepherd",
  "Skye Terrier",
  "Sloughi",
  "Slovensky Cuvac",
  "Slovensky Kopov",
  "Slowakischer Rauhbart",
  "Soft Coated Wheaten Terrier",
  "Spinone Italiano",
  "Staffordshire Bull Terrier",
  "Steirische Rauhhaarbracke",
  "Sussex Spaniel",
  "Sussex-Spaniel",
  "Südrussischer Owtscharka",
  "Teckel",
  "Tervueren",
  "Thai Ridgeback",
  "Tibet-Spaniel",
  "Tibet-Terrier",
  "Tibetdogge",
  "Tibetischer Kyi Apso",
  "Tosa",
  "Toy-Pudel",
  "Tschechoslowakischer Wolfhund",
  "Ungarische Bracke",
  "Ungarischer Vizsla",
  "Ungarischer Windhund",
  "Volpino Italiano",
  "Västgötaspets",
  "Weißer Schweizer Schäferhund",
  "Welsh Corgi Cardigan",
  "Welsh Corgi Pembroke",
  "Welsh Springer Spaniel",
  "Welsh Terrier",
  "Westgotenspitz",
  "Westsibirischer Laika",
  "Whippet",
  "Windhund",
  "Wolfsspitz",
  "Wäller",
  "Zwergpudel",
  "Österreichischer Pinscher",
];


let example = [{
  origin: "USA", // Herkunft
  fci_no: 286,
  name: "American Pitbull Terrier",
  img: "https://mediafiles.mein-haustier.de/wp-content/uploads/2021/06/shutterstock_287024849-Kopie-430x430.jpg",
  height: [43,53], // Größe in cm
  weight: [20,25], // Gewicht in KG
  furLength: 1, // Felllänge (1 = Kurz | 2 = Mittel | 3 = Lang)
  lifeExpectancy: [12,12],   // Lebenserwartung in Jahren
  typeOfBreed: ["Familienhund", "Wachhund"],  // Art der Rasse
  activity: 40,                 // Bewegungsbedarf
  personality: ["freundlich", "gutmütig", "selbstbewusst", "treu"] // Persönlichkeit
}
];

let finDogs =[];


function height(string){
    return string.replace('cm','').split('-');
}

function height(string){
    return string.replace('cm','').split('-');
}

dogList.forEach(dog => {
    finDogs.push({
        origin: dog.origin ? dog.img : null, // Herkunft
        fci_no: dog.fci_no ? dog.img : null,
        name: dog,
        img: dog.img ? dog.img : null,
        height: dog.height ? height(dog.height) : [0,0], // Größe in cm
        weight: dog.weight ? weight(dog.weight) : [0,0], // Gewicht in KG
        furLength: dog.furLength ? dog.furLength : null, // Felllänge (1 = Kurz | 2 = Mittel | 3 = Lang)
        lifeExpectancy: dog.lifeExpectancy ?  dog.lifeExpectancy : [0,0],   // Lebenserwartung in Jahren
        typeOfBreed: dog.typeOfBreed ? dog.typeOfBreed : [],  // Art der Rasse
        activity: dog.activity ? dog.activity : null,                 // Bewegungsbedarf
        personality: dog.personality ? dog.personality : [] // Persönlichkeit
      })
});

console.log(finDogs);









