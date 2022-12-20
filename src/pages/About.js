import App from "../App"
const About=()=>{
    return(
<>
<br></br><br></br><br></br><br></br><br></br>
<section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <div className="title-box text-center">
              <h3 className="title-a">
                About
              </h3>
              <p className="subtitle-a">
              </p>
              <div className="line-mf"></div>
            </div>
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="assets/img/myimg.jpeg" className="img-fluid rounded b-shadow-a img-responsive" alt=""/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <h4><span className="">Name: </span> <span>Sabir N. Bedge</span></h4>
                        <h4><span className="">Profile: </span> <span>Full Stack Web Developer</span></h4>
                        <h4><span className="">Email: </span> <span>sabirbedge285@gmail.com</span></h4>
                        <h4><span className="">Phone: </span> <span>+91 8999155937</span></h4>
                      </div>
                    </div>
                  </div><br></br>
                  <div className="skill-mf">
                    <h3 className="">Skills</h3><br></br>
                    <strong>HTML</strong> <span className="pull-right">100%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>CSS3</strong> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>BOOTSTRAP</strong> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>JAVASCRIPT</strong> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>JQUERY</strong> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>REACT-JS</strong> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>DJANGO</strong> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>AJAX</strong> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'70%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <strong>MYSQL</strong> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:'85%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About Me
                      </h5>
                    </div>
                    <h4 className="">
                      Hii, <br></br>
                      I am Sabir Bedge from Miraj,Maharashtra.
                      I am currently pursuing bachelor degree(B.Tech) in Information Technology at Government College Of Engineering,Karad.
                    </h4><br></br>
                    <h4 className="">
                    I am Full Stack Web Developer and Freelancer.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
    )
}

export default About;