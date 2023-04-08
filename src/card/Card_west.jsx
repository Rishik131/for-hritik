import * as React from 'react';
import Card from '@mui/material/Card';
import './Card.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Hosp from '../elements/Hospitals/hospital_data_west.json'
import Rating from '../Ratings/Rating';
import {useState} from 'react';


function BasicCard1() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }

  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[0]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[0]['address']}</div></div>
          <div className='rating'>rating:
            <Rating rate={Hosp[0]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon  style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
};

function BasicCard2() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }

  return (
    
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[1]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[1]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[1]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
};
function BasicCard3() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[2]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[2]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[2]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
};

function BasicCard4() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[3]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[3]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[3]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard5() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[4]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[4]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[4]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard6() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[5]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[5]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[5]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard7() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[6]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[6]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[6]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard8() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[7]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[7]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[7]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard9() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[8]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[8]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[9]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard10() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[9]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[9]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[10]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard11() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[10]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[10]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[10]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard12() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[11]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[11]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[11]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard13() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[12]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[12]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[12]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard14() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[13]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[13]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[14]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard15() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[14]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[14]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[14]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard16() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[15]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[15]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[15]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard17() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[16]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[16]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[16]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard18() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[17]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[17]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[17]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard19() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[18]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[18]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[18]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}
function BasicCard20() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <Card sx={{ minWidth: 275, width: 400,borderRadius: 3 }} className="card_design">
        <div class="details">
        <CardMedia className='card_media'
          component="img"
          height="194"
          image="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1.jpeg?raw=true"
          alt="hospital image"
        />
          <div className='name'>Hospital name: {Hosp[19]['name']}</div>
          <div className='address'>address: <div className='address2'> {Hosp[19]['address']}</div></div>
          <div className='rating'>rating:
          <Rating rate={Hosp[19]['rating']}/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{color: isActive ? 'red' : ''}}  onClick={handleClick}/>
            </IconButton>
            </div>
            <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </div>
            <div className='dot_menu'>
            <IconButton aria-label="settings" >
             <MoreVertIcon />
            </IconButton>
            </div>
          </div>
      </div>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
      </CardContent> */}
      </Card>
    </>
  );
}

export {BasicCard1,BasicCard2,BasicCard3,BasicCard4,BasicCard5,BasicCard6,BasicCard7,BasicCard8,
  BasicCard9,BasicCard10,BasicCard11,BasicCard12,BasicCard13,BasicCard14,BasicCard15,
  BasicCard16,BasicCard17,BasicCard18,BasicCard19,BasicCard20};