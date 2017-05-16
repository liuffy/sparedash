import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


class Content extends React.Component {

  render(){

    return (

<div className="main-content align-center">   
      <h5>Reasons to join SpareDash</h5>
  <div className="container-fluid col-md-offset-2">
    <div className="row-fluid">
        <div className="col-sm-4 col-md-3 center-block text-center">

          <div className="text-justify about-text column-text">
          <img className="about-icon" src="http://res.cloudinary.com/liuffy/image/upload/v1494966731/medical-history_1_ulq6gs.png"/>
          <h3 className="column-header">Connect with Patients</h3>
            Lorem ipsum dolor sit amet, ceteros invidunt deseruisse mei cu, nam nulla putant an, amet veniam ea vix. Eu timeam appetere pro. Nonumy comprehensam mediocritatem cum id, duo nonumes inimicus at. Et esse verear quo.
            <RaisedButton  className="learn-more" label="Learn More" type="submit" primary={true} />
          </div>
        </div>

        <div className="col-sm-4 col-md-3 center-block text-center">

        <div className="text-justify about-text column-text">
            <img className="about-icon" src="http://res.cloudinary.com/liuffy/image/upload/v1494966731/chat_1_mouvag.png"/>
          <h3 className="column-header">Increase Exposure</h3>
            Lorem ipsum dolor sit amet, ceteros invidunt deseruisse mei cu, nam nulla putant an, amet veniam ea vix. Eu timeam appetere pro. Nonumy comprehensam mediocritatem cum id, duo nonumes inimicus at. Et esse verear quo.

          Adhuc prompta invidunt an cum, an mei iriure euismod interesset. Ad purto eros modus vel, tota viderer ea mel, id his accusam scripserit.
              <RaisedButton className="learn-more" label="Learn More" type="submit" primary={true} />
          </div>
        </div>

        <div className="col-sm-4 col-md-3 center-block text-center">
           <div className="text-justify about-text column-text">
          <img className="about-icon" src="http://res.cloudinary.com/liuffy/image/upload/v1494966731/care_1_bnquu3.png"/>
          <h3 className="column-header">Referrals</h3>
            Adhuc prompta invidunt an cum, an mei iriure euismod interesset. Ad purto eros modus vel, tota viderer ea mel, id his accusam scripserit. An debitis delectus rationibus est, mea rebum omnesque detraxit an. Per duis inimicus no. Eu labitur imperdiet suscipiantur sea, ad quem suscipiantur vis.
                <RaisedButton className="learn-more" label="Learn More" type="submit" primary={true} />
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Content;