import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {

  return (
    <div>
      <h1>Users</h1>

      <div className='row'>
        <div className='col-md-6'>
          <label for='name'>Name:</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='col-md-6'>
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required />
        </div>
      </div>
    </div>
    
  );
};

export default Users;