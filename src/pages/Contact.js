const Contact=()=>{
    return(
<>
<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage:"url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12"> <br></br><br></br>
          <div className="title-box text-center">
              <h3 className="title-a">
                Contact
              </h3>
              <p className="subtitle-a">
              </p>
              <div className="line-mf"></div>
            </div>
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>
                      <div  role="form" className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading"></div>
                            <div className="error-message"></div>
                            <div className="sent-message"></div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="button" className="button button-a button-big button-rouded" id='btn'><strong>Send Message</strong></button>
                          </div>
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                      </p>
                      <ul className="list-ico">
                        <li><strong><span className="bi bi-geo-alt"></span></strong><strong id='addDetails'> Miraj,Maharashtra </strong></li>
                        <li><span className="bi bi-phone"></span><strong id='addDetails'> +91 8999155937</strong></li>
                        <li><span className="bi bi-envelope"></span><strong id='addDetails'> sabirbedge285@gmail.com</strong></li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/sabirbedge"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                        <li><a href="https://www.instagram.com/sabir_bedge"><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=+918999155937&text=My%20Message%20is..."><span className="ico-circle"><i className="bi bi-whatsapp"></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/sabir-bedge-2a8b971ba"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                      </ul>
                      <br></br><br></br>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d567.6480382271021!2d74.67280046220586!3d16.84293731368468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe47d7e41515d27cb!2zMTbCsDUwJzM0LjkiTiA3NMKwNDAnMjMuMSJF!5e0!3m2!1sen!2sin!4v1671514372735!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
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

export default Contact;