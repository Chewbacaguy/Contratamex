import image from "./assets/construction.svg";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        width: "80%",
        height: "80%",
        margin: "8%",
      }}
    >
      <p>Contrata profesionales cerca de ti.</p>
      <img
        id="alta"
        src={image}
        alt="Construction"
        style={{ maxWidth: "50%", maxHeight: "50%" }}
      />
    </div>
  );
};

export default LandingPage;
