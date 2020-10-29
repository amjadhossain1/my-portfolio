import React from 'react';
import creativeAgency from '../../images/project/creative-agency.png'
import doctorsPortal from '../../images/project/doctors-portal.png'
import volunteerNetwork from '../../images/project/volunteer-network.png'

const Projects = () => {
    return (
        <div className=" project mt-3 ">
            <h2>Project List</h2>
            <div className="card-deck mb-4">
                <div className="card bg-light rounded shadow">
                    <img className="card-img-top shadow-lg rounded" src={creativeAgency} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Creative Agency</h5>
                    <p className="card-text">A full-stack app where you can pick the date and time and fix an appointment with your doctor. , More..</p>
                    </div>
                    <div className="card-footer text-center">
                   <a className="p-3" href="https://creative-agency-689ba.web.app/">live</a>                  
                    <a className="p-3" href=" https://github.com/AmjadRabby/creative-agency-clint">github</a>
                    </div>
                </div>

                <div className="card bg-light rounded shadow">
                    <img className="card-img-top shadow-lg rounded" src={doctorsPortal} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Doctors Portal</h5>
                    <p className="card-text">A full-stack app where you can pick the date and time and fix an appointment with your doctor. , More..</p>
                    </div>
                    <div className="card-footer text-center">
                    <a className="p-3" href=" https://adoring-wright-6df66e.netlify.app/">live</a>                   
                    <a className="p-3" href="https://github.com/AmjadRabby/doctor-portal-clint">github</a>
                    </div>
                </div>

                <div className="card bg-light rounded shadow-sm">
                    <img className="card-img-top shadow-lg rounded" src={volunteerNetwork} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Volunteer Network</h5>
                    <p className="card-text">A full-stack app where you can pick the date and time and fix an appointment with your doctor. , More..</p>
                    </div>
                    <div className="card-footer text-center">
                    <a className="p-3" href="https://volunteer-network-95564.web.app/">live</a>                    
                    <a className="p-3" href="https://github.com/AmjadRabby/volunteer-clint">github</a>
                    </div>
                </div>
                                
                </div>                                          
        </div>
    );
};

export default Projects;