import ImageContainer from "./ImageContainer";
import imagesUrls from "./images";
import imageTitles from "./imageTitles";

function App() {
  function handleClick(e) {
    const photoContainers = document.querySelectorAll(".photo-container");

    photoContainers.forEach((cont) => {
      // remove 'active' class from all photo-containers, except the one which is clicked on
      if (
        e.target.id !== cont.id &&
        cont.classList.contains("active") &&
        // make 'h2' element not clickable (so that it does not add 'active' class to other elements)
        e.target.localName !== "h2"
      ) {
        cont.className = "photo-container";
      }
      if (
        !e.target.classList.contains("active") &&
        // don't add 'active' class to 'h2'
        e.target.localName !== "h2"
      ) {
        e.target.className += " active";
      }
    });
  }
  return (
    <div className="App">
      <div className="main-container ">
        {imagesUrls.map((img, i) => {
          return (
            <ImageContainer
              // make first image expanded by default
              class={i === 0 ? "photo-container active" : "photo-container"}
              id={i}
              key={i}
              backgroundImg={{ backgroundImage: `url(${img["image_url"]})` }}
              title={imageTitles[i]["title"]}
              handleClick={handleClick}
            ></ImageContainer>
          );
        })}
      </div>
    </div>
  );
}

export default App;
