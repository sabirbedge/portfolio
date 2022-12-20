const Home=()=>{
    return(
<>

<div id="hero" className="hero route bg-image" style={{backgroundImage:'url(assets/img/bg.jpg)'}}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <p className="display-6 color-d">Hello, World !!!</p>
          <h1 className="hero-title mb-4">I am Sabir Bedge</h1>
          <div class="wrapper">
            <div class="typing-demo">
            Full Stack Web Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    )
}

export default Home;