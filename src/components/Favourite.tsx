import React, { Dispatch, SetStateAction } from 'react';
import StarY from '../asset/svg/star-yellow.svg';
import StarW from '../asset/svg/star-white.svg';

interface NotificationProps {
  favourite: { isTrue: boolean; data: never[] };
  setFavorite: Dispatch<SetStateAction<{ isTrue: boolean; data: never[] }>>;
  allowFavourite: boolean;
}

export default function Favourite({
  favourite,
  setFavorite,
  allowFavourite,
}: NotificationProps) {
  return (
    <section>
      <img
        src={favourite.isTrue ? StarY : StarW}
        alt={'favourite icon'}
        onClick={() =>
          allowFavourite &&
          setFavorite({ ...favourite, isTrue: !favourite.isTrue })
        }
      />
    </section>
  );
}
