/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url = type === 'password' ? 'updateMyPassword' : 'updateMe';

    const res = await axios({
      method: 'PATCH',
      url: `api/v1/users/${url}`,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated succesfully`);
      window.setTimeout(() => {
        location.reload(true);
      }, 1000);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
