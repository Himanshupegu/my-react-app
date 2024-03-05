import profilePicture from '../assets/photo_2023-12-26_12-32-52.jpg'

function Card() {
  return (
    <div className="card">
      <img
        className="card-img"
        src={profilePicture}
        alt="profile picture"></img>
      <h2 className="card-title">Pegu</h2>
      <p className="card-text">I love coding</p>
    </div>
  )
}

export default Card
