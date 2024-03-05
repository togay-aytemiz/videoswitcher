const Radio = ({ selectedRadio, setSelectedRadio }) => {
  const style = {
    radio: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 outline-0`,
    input: `w-full py-3 ms-2 text-sm font-medium text-gray-900 `,
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedRadio(e.target.value);
  };

  return (
    <div>
      <h3 className="mb-6 text-gray-900">
        Browse through our diverse selection of videos curated just for you.
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex max-w-lg">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value="video1"
              name="list-radio"
              className={style.radio}
              checked={selectedRadio === "video1"}
              onChange={handleChange}
            />
            <label for="horizontal-list-radio-license" className={style.input}>
              Video #1{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value="video2"
              name="list-radio"
              className={style.radio}
              checked={selectedRadio === "video2"}
              onChange={handleChange}
            />
            <label for="horizontal-list-radio-id" className={style.input}>
              Video #2
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-military"
              type="radio"
              value="video3"
              name="list-radio"
              className={style.radio}
              onChange={handleChange}
              checked={selectedRadio === "video3"}
            />
            <label for="horizontal-list-radio-military" className={style.input}>
              Video #3
            </label>
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value="video4"
              name="list-radio"
              className={style.radio}
              onChange={handleChange}
              checked={selectedRadio === "video4"}
            />
            <label for="horizontal-list-radio-passport" className={style.input}>
              Video #4
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Radio;
