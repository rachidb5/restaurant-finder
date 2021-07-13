import logo from '../../assets/logo.svg'
import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field/dist/index';
import { Container, Search, Wrapper, Carousell } from './styled';
import MaterialIcon from '@material/react-material-icon';
import ImageCard from '../../components/imageCard/index';
import image from '../../assets/restaurante-fake.png';
import Modal from 'react-modal';
import RestaurantCard from '../../components/restaurantCard/index';
import MapContainer from '../../components/map/index'

const customStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight:" calc(100% - 144px)",
        width: "500px",
        padding: "24px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 32px rgba(78, 89, 131, 0.2)",
        borderRadius: "8px",
    },
  };

  Modal.setAppElement('#modal-root');

const Home = () => {
    const [inputValue, setinputValue] = useState('')
    const [value, setValue] = useState('');
    const [query, setQuery] = useState(null);
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

      const handleChange = (e) => {
        setValue(e.target.value);
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          setQuery(inputValue);
        }
      };


    return(
        <Wrapper>
            <Container>
                <Search>
                    <img src={logo} alt="Logo do restaurant finder" />
                    <TextField
                        label='Pesquisar'
                        outlined
                        //onTrailingIconSelect={() => this.setState({value: ''})}
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                    <Input
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setinputValue(e.target.value)} 
                    />
                    </TextField>
                    <h1>Na Sua Área</h1>
                    <Carousell {...settings}>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                        <ImageCard photo={image} title='Nome do Restaurante'/>
                    </Carousell>
                    <button onClick={openModal}>Open Modal</button>
                </Search>
                <RestaurantCard restaurantImage={image} restaurantName='Bar do Zé'
                restaurantInfo='Um exemplo de texto rápido para construir o título do card.' 
                />
            </Container>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
             </Modal>
             <MapContainer query={query} />
        </Wrapper>
    )
}

export default Home;