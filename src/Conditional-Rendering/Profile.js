import React from 'react'

function Profile(props) {
  return (
    <div>
      <h3>Profile</h3>
      <p>Name: Sachin</p>
      <p>Age: 40 </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/500px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg" alt="" width="300px" height="250px"/>
      <h5>Description</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam qui, corporis obcaecati dignissimos consectetur consequuntur tempore nihil quidem! Earum, molestias aspernatur, rem fuga tempora voluptate necessitatibus quaerat ratione optio molestiae dignissimos, eaque temporibus enim ipsam. Praesentium ducimus nihil minus dolor sint distinctio expedita sunt quam modi cupiditate eaque, eveniet provident excepturi at officiis illum architecto inventore animi. Quidem accusamus explicabo libero, odit voluptatibus, reprehenderit nisi maxime fugiat quod architecto repudiandae unde ea laudantium ad praesentium. Illum molestiae minus quasi quaerat nesciunt nulla ex obcaecati mollitia doloremque aperiam alias ad voluptatum repudiandae dolore soluta, odit ratione quibusdam hic provident magni!</p>
      <button onClick={()=>props.isSetLogin(false)}>Logout</button>
    </div>
  )
}

export default Profile