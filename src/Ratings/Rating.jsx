import React from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const Rating = (props) => {
    if(props.rate == 1)
    {
        return(
            <>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            </>
        );
        
    }
    if(props.rate == 2)
    {
        return(
            <>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            </>
        );
    }
    if(props.rate == 3)
    {
        return(
            <>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            </>
        );
    }
    if(props.rate == 4)
    {
        return(
            <>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
            </>
        );
    }
    if(props.rate == 5)
    {
        return(
            <>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            <StarOutlinedIcon className='star' fontSize="1px"/>
            </>
        );
    }
}

export default Rating