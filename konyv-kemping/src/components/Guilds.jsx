import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Guild from './Guild'

function Guilds() {

  const guilds = [
    {
      name: "A Kódexmásoló Céh - Írnok",
      description: "Kódexmásolóként Te őrzöd a Föld minden tudását, ezért szerteágazó ismeretekre van szükséged. Ennek megfelelően sok zsánerben olvasol, a tudásod pedig nagy. Az írnoknak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve (tehát olvashatsz például három romatikusat és két ismeretterjesztőt, vagy 4 nem angol/magyar nyelvű dolgot és egy történelmi ifjúságit):",
      prompts: [
        { promptName: "Történelmi fikció", isCompleted: false },
        { promptName: "Történelmi ismeretterjesztő", isCompleted: false },
        { promptName: "Történelmi romantikus", isCompleted: false },
        { promptName: "Történelmi ifjúsági", isCompleted: false },
        { promptName: "Nem angolszász vagy magyar", isCompleted: false }
      ],
      minPrompts: 2,
      minStories: 5
    },
    {
      name: "A Kódexmásoló Céh - A könyvkötő",
      description: "Kódexmásolóként Te őrzöd a Föld minden tudását, ezért szerteágazó ismeretekre van szükséged. Ennek megfelelően sok zsánerben olvasol, a tudásod pedig nagy. A könyvkötőnek az alábbi szempontok szerint kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve (tehát olvashatsz például három barna kötetet és két ismeretterjesztőt, vagy 4 nem angol/magyar nyelvű dolgot és egy történelmi ifjúságit):",
      prompts: [
        { promptName: "Barna vagy fehér borítós könyv", isCompleted: false },
        { promptName: "Afrikai szerző", isCompleted: false },
        { promptName: "Illusztrált kötet", isCompleted: false },
        { promptName: "Egy kötet, ami különleges (pl. élfestett vagy aranyozott)", isCompleted: false },
        { promptName: "Ismeretközlő irodalom", isCompleted: false },
        { promptName: "Európai uniós szerző", isCompleted: false },
      ],
      minPrompts: 2,
      minStories: 5
    },
    {
      name: "A Művész Céh",
      description: "Művészként te őrzöd a Föld, az emberiség kreativitását, ezért olyan történeteket kell olvasnod, amelyekben a művészetek nagy szerepet kapnak. Ha a Művészek közé szeretnél tartozni, az alábbi szempontok szerint kell 5 tetszőleges történetet elolvasnod, legalább három különböző pontot kilőve:",
      prompts: [
        { promptName: "Képregény", isCompleted: false },
        { promptName: "Mesekönyv", isCompleted: false },
        { promptName: "Illusztrált kötet", isCompleted: false },
        { promptName: "Egy művész (pl. festő, színész, író) életrajza", isCompleted: false },
        { promptName: "Könyv, amelyben fontos szerepet kap a zene", isCompleted: false },
        { promptName: "Könyv, amelyben fontos szerepet kapnak a filmek", isCompleted: false },
        { promptName: "Kortárs szerző írta", isCompleted: false },
      ],
      minPrompts: 3,
      minStories: 5
    },
    {
      name: "A Tótumfaktumok Céhe",
      description: "A Tótumfaktumok vagy Ezermesterek tartják karban az űrhajónkat. Munkájuk sokféle, és nagy felelősséggel jár, ezért az ő képzésük a legszigorúbb. Ha Tótumfaktum szeretnél lenni, az alábbi zsánerek MINDEGYIKÉBEN el kell olvasnod egy történetet. Maximum két novellát választhatsz, amelyek közül az egyik bármilyen lehet, a másiknak azonban valamelyik kijelölt zsánerbe kell tartoznia. Ezek közül bármelyik lehet fantasztikum is, de szerepeljen rajtuk az adott címke: tehát olvashattok pl. sci-fi thrillert és fantasy ifjúságit. És természetesen a képregény is ér!",
      prompts: [
        { promptName: "Ökofikció/Cli-fi", isCompleted: false },
        { promptName: "Thriller", isCompleted: false },
        { promptName: "Kortárs", isCompleted: false },
        { promptName: "Ifjúsági és gyermekirodalom", isCompleted: false },
        { promptName: "Novella", isCompleted: false },
      ]
      ,
      minPrompts: 5,
      minStories: 5
    },
    {
      name: "A Gyógyító Céh",
      description: "A Nyírfa gyógyítói felelősek a hajó lakóinak jólétéért, ezért ismereteik a gasztronómiára és a komfortra koncentrálódnak. Ha Gyógyító szeretnél lenni, az alábbi témakörökből kell öt történeted választanod, legalább két pontot kilőve",
      prompts: [
        { promptName: "Gasztroregény", isCompleted: false },
        { promptName: "Mágikus realizmus", isCompleted: false },
        { promptName: "Romantikus történet", isCompleted: false },
        { promptName: "Egy történet, amelyen szerepel a barátság címke", isCompleted: false },
        { promptName: "Női szerző", isCompleted: false },
        { promptName: "Női főszereplő", isCompleted: false },
        { promptName: "Egy komfort olvasmány", isCompleted: false },
      ],
      minPrompts: 2,
      minStories: 5
    },
    {
      name: "Az Álmodók Céhe - Akik a csillagokba tekintenek",
      description: "Az Álmodók őrzik az emberiség nagy álmait: mindazokat a dolgokat, amelyeket őseink megálmodtak: a jövőről, más világokról. Aki a csillagokba tekint, annak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve:",
      prompts: [
        { promptName: "Sci-fi", isCompleted: false },
        { promptName: "Egy történet, amelyen szerepel a posztmodern címke", isCompleted: false },
        { promptName: "Képregény", isCompleted: false },
        { promptName: "Egy sci-fi, amelynek nő a szerzője", isCompleted: false },
        { promptName: "Egy társadalmi sci-fi", isCompleted: false },
        { promptName: "Egy novella Kelly Linktől", isCompleted: false },
      ],
      minPrompts: 2,
      minStories: 5
    },
    {
      name: "Az Álmodók Céhe - Akik ajtókat nyitnak",
      description: "Az Álmodók őrzik az emberiség nagy álmait: mindazokat a dolgokat, amelyeket őseink megálmodtak: a jövőről, más világokról. Aki ajtókat nyit, annak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve:",
      prompts: [
        { promptName: "Fantasy", isCompleted: false },
        { promptName: "Egy történet sárkányokkal", isCompleted: false },
        { promptName: "Egy portál fantasy", isCompleted: false },
        { promptName: "Egy díjnyertes történet", isCompleted: false },
        { promptName: "Képregény", isCompleted: false },
        { promptName: "Egy sorozat folytatása", isCompleted: false },
        { promptName: "Egy fantasy történet, amelyekben iskola van", isCompleted: false },
      ],
      minPrompts: 2,
      minStories: 5
    }
  ]

  return (
    <>
      <Row id="guilds">
        <Col>
          <h4 className='text-center my-3 small-caps'>Céhek:</h4>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={2} className="my-4">
        {guilds.map((guild, index) => <Guild key={index} guild={guild} />)}
      </Row>
    </>
  )
}

export default Guilds