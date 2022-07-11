import React from "react";
import {Link} from "react-router-dom";
import LinkButton from '../../../../components/LinkButton/LinkButton.component';
import './AvatarCard.styles.scss';

const AvatarCard = ({ id, gravatar, views }) => (
  <div className='img-card'>
    <div className='avatar-card'>
      <div className='avatar'>
        <Link className='avatar-link' to={`/users/${id}`}>
          <div className='logo-wrapper'>
            <img
              src={gravatar}
              alt='user-logo'
            />
          </div>
        </Link>
      </div>
      <div className='title'>
      <span className='fc-light'>Trust score</span>
        <div className='grid fc-black-800'>
          {views}
          &nbsp;
          

        </div>
                  <LinkButton
              text={'Claim NFT'}
              link={'#'}
              type={'s-btn__primary'}
            />
      </div>
    </div>
  </div>
)

export default AvatarCard;