import NewReptileGuideForm from "../components/guides/NewReptileGuideForm";


//This Page Handles getting data to make a new post request, i think

// const URL = "http://localhost:8000"

function NewReptileGuidePage() {
  function addReptileGuideHandler(reptileGuideData) {
    fetch();

  }

  return (
    <section>
      <h1>Add New Guide</h1>
      <NewReptileGuideForm onAddReptileGuide = {addReptileGuideHandler}/>
    </section>
  );
}

export default NewReptileGuidePage;
