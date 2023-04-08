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
import Hosp from '../elements/Hospitals/hospital_data_east.json'


export default function BasicCard() {
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
          <div className='address'>address: <div className='address2'> L-20, NDM-1, Netaji Subhash Place Complex.</div></div>
          <div className='rating'>rating:
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarHalfOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
          </div>
          <div className='action_buttons'>
            <div>
            <IconButton className='like_button'>
              <FavoriteIcon style={{ color: 'red'}}/>
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
