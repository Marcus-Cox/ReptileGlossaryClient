import ReptileList from "../components/guides/ReptileList";
const DUMNMY_DATA = [
  {
    id: "1",
    writer: "1",
    reptile: "5",
    title: "Ball Python Care and Upkeep",
    image: "https://upload.wikimedia.org/wikipedia/en/5/59/Gex2Cover.jpg",
    description: "A Guide for Ball Pythons",
    content: "content of guide",
    publishing_date: "2022-09-03",
  },
  {
    id: "2",
    writer: "1",
    reptile: "5",
    title: "Ball Python Care",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Spyro_2_-_Ripto%27s_Rage%21_Coverart.png",
    description: "Guide for Pythons",
    content: "content of guide",
    publishing_date: "2022-09-03",
  },
];

function AllGuidesPage() {
  return (
    <section>
      <h1>All Guides Page</h1>
     <ReptileList reptileguides={DUMNMY_DATA} />
    </section>
  );
}

export default AllGuidesPage;
