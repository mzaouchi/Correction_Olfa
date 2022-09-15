import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { current } from '../Redux/Actions/authActions'

export const Profile = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  const user = useSelector(state=> state.authReducer.user)
  return (
   <div>
    <Card style={{ width: '18rem',margin:'auto' }}>
    <Card.Img variant="top" src="https://img.myloview.fr/posters/vecteur-d-icone-de-panier-shopping-avec-symbole-d-avatar-de-profil-client-femme-pour-l-achat-de-marchandises-dans-l-illustration-de-pictogramme-glyphe-400-121346916.jpg" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user.email}
      </Card.Text>
  
    </Card.Body>
    </Card>
   </div>
  )
}