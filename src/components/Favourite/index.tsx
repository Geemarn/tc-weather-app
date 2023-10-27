import React, { Dispatch, memo, SetStateAction } from 'react';
import StarY from '../../asset/svg/star-yellow.svg';
import StarW from '../../asset/svg/star-white.svg';
import Hamburger from '../../asset/svg/hamburger.svg';

export type IFavourite = {
  isTrue: boolean;
  data: string[];
  openDropDown: boolean;
};
interface NotificationProps {
  favourite: IFavourite;
  setFavorite: Dispatch<SetStateAction<IFavourite>>;
  locationName: string | undefined;
}

function Favourite({
  favourite,
  setFavorite,
  locationName,
}: NotificationProps) {
  const { data, openDropDown, isTrue } = favourite;

  return (
    <section className={'favourite'} data-testid={'tc-favourite'}>
      <img
        src={favourite.isTrue ? StarY : StarW}
        alt={'favourite-icon'}
        loading='lazy'
        onClick={() =>
          locationName &&
          setFavorite({
            /** check if string is already in data before adding **/
            data: data.includes(locationName) ? data : [...data, locationName],
            isTrue: !isTrue,
            openDropDown: false,
          })
        }
      />

      <div className='dropdown'>
        <img
          src={Hamburger}
          alt={'hamburger'}
          loading='lazy'
          onClick={() =>
            setFavorite({
              ...favourite,
              openDropDown: !openDropDown,
            })
          }
        />

        {openDropDown && (
          <ul className='dropdown-content' data-testid={'tc-dropdown-content'}>
            <h6>Favourite Locations</h6>
            {data.map((name) => (
              <li key={`favourite__${name}`}>
                <span
                  onClick={() =>
                    setFavorite({
                      ...favourite,
                      /** filter name out of data array **/
                      data: data.filter((i) => i !== name),
                    })
                  }
                >
                  ✕
                </span>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default memo(Favourite);
