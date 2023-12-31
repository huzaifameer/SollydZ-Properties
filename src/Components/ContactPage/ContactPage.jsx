
import contactPic from '/src/assets/Images/contactPic.jpg'
import TitleBar from "../TitleBar/TitleBar.jsx";

function ContactPage(){
    return(
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className='mt-3'>
                        <TitleBar title="Contact Us"/>
                    </div>
                    <div className="row">
                        <div className="col-md-7 shadow rounded p-5">
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="" className='form-label'>First name</label>
                                    <input type="text" className='form-control' placeholder='First Name'/>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="" className='form-label'>Last name</label>
                                    <input type="text" className='form-control' placeholder='Last Name'/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Email</label>
                                <input type="text" className='form-control' placeholder='Email'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Subject</label>
                                <input type="text" className='form-control' placeholder='Subject'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Message</label>
                                <textarea name="" id="" className='form-control' rows="3" placeholder='Type Here'></textarea>
                            </div><br/>
                            <button className='btn btn-primary'>Send My Message</button>
                        </div>
                        <div className="col-md-5 bg-light">
                            <div className='ml-5'>
                                <img src={contactPic} alt="Background" className='img-fluid'/>
                            </div>
                        </div>
                    </div><br/>
                </div>
            </div>
            <br/><br/>
        </>
    )

}
export default ContactPage