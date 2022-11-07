import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//create slice -> kita bisa define state, reducers, dan actions di satu tempat

//ini initial state untuk store datanya
const initialState = {
  dataDonation: [],
  dataOrphanages: [],
  dataClassCategories: [],
  isLoading: true,
};

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => { //ini action typenya
//   return fetch('')
// })

export const submitLogin = createAsyncThunk('submitFormLogin', async (input) => {
  console.log(input, 'data masuk');
  const response = await fetch('https://rumah-sandar.herokuapp.com/orphan/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  console.log(response, 'ini response login adik');

  if (!response.ok) {
    throw await response.text();
  }

  const data = await response.json();
  console.log(data, 'response login');
  localStorage.setItem('access_token', data.access_token);
  localStorage.setItem('username', data.sendData.fullName);
  localStorage.setItem('role', data.sendData.role);

  return data;
});

export const fetchDonation = createAsyncThunk('fetchDonation', async () => {
  try {
    const response = await fetch('https://rumah-sandar.herokuapp.com/payment/donations', {
      method: 'GET',
    });
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchOrphanages = createAsyncThunk('fetchOrphanages', async () => {
  try {
    const response = await fetch('https://rumah-sandar.herokuapp.com/orphanages', {
      method: 'GET',
    });
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchClassCategories = createAsyncThunk('fetchClassCategories', async () => {
  try {
    const response = await fetch('https://rumah-sandar.herokuapp.com/categories', {
      method: 'GET',
    });
    console.log(response, '<<< ini response');
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDonation.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDonation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataDonation = action.payload;
    },
    [fetchDonation.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchOrphanages.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrphanages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataOrphanages = action.payload;
    },
    [fetchOrphanages.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchClassCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchClassCategories.fulfilled]: (state, action) => {
      console.log(action, '<<<<');
      state.isLoading = false;
      state.dataClassCategories = action.payload;
    },
    [fetchClassCategories.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
//ini nama2 actionya, otomatis sama dengan nama reducernya
export const {} = userSlice.actions;

export default userSlice.reducer;
