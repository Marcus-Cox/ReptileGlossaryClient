import NewReptileGuideForm from "../components/guides/NewReptileGuideForm";

function NewReptileGuidePage() {
  function addReptileGuideHandler(reptileGuideData) {
    
  }

  return (
    <section>
      <h1>Add New Guide</h1>
      <NewReptileGuideForm onAddReptileGuide = {addReptileGuideHandler}/>
    </section>
  );
}

export default NewReptileGuidePage;
