import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        404 <span>🥹</span>
      </div>
      <div>This is not the page you are looking for</div>
      <div>it appears the page you are looking for does not exist</div>
      <div onClick={() => navigate('/')}>Go back home</div>
    </div>
  );
}
