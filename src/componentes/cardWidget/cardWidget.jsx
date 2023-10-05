import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const CardWidget = () => {
  return (
    <Button variant="primary">
      Carrito <Badge bg="secondary">9</Badge>
    </Button>
  );
}

export default CardWidget;