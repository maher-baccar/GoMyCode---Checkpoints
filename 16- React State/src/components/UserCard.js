import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({person}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={person.img} style={{Width:"250px", Height:"250px"}}/>
      <Card.Body>
        <Card.Title>{person.fullName}</Card.Title>
        <Card.Text>
        {person.profession}
        </Card.Text>
        <Card.Text>
        {person.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;