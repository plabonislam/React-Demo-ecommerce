import React,{useState} from 'react'

const Subscription=()=> {

  let [email, setEmail] = useState("");
   const handleSubmit = (e) => {
  
        e.preventDefault();

      email = email.trim();
    document.getElementById("email").value = "";

       

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Invalid Email");
        return;
      }
      else{
        alert("valid email")

      }
     
    }


    const hand=(e)=>{
      setEmail(e.target.value);
    
    }
  return (
    <div>
      <section className="subscribe-area pb-50 pt-70">
        <div className="container">
          <div className="row" style={{textAlign:"center"}}>
            <div className="col-md-4">
              <div className="subscribe-text mb-15">
                <span>JOIN OUR NEWSLETTER</span>
                <h2>subscribe newsletter</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="subscribe-wrapper subscribe2-wrapper mb-15">
                <div className="subscribe-form">
                  <form action="#" style={{ outline: "none" }}>
                    <input
                      placeholder="enter your email address"
                      type="email"
                      id="email"
                      onChange={hand}
                    />
                    <button  className="SubBtn" onClick={handleSubmit}>
                      subscribe 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Subscription;