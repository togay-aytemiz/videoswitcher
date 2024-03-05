const Youtube = ({ embedId }) => {
  return (
    <>
      <div className=" rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          width={640}
          height={360}
          className=" hidden sm:flex"
        ></iframe>

        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          width={"100%"}
          height={360}
          className="sm:hidden flex"
        ></iframe>
      </div>
    </>
  );
};
export default Youtube;
