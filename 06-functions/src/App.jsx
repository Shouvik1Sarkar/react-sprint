function App() {
  function pageScrolling(value) {
    console.log(value);
  }

  return (
    <>
      <div
        onWheel={function (elem) {
          pageScrolling(elem.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </>
  );
}

export default App;
