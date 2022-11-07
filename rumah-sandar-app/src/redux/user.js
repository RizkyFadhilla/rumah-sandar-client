import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create slice -> kita bisa define state, reducers, dan actions di satu tempat

//ini initial state untuk store datanya
const initialState = {
  value: 0,
  userClasses: [],
  isLoading: true,
};

export const submitLogin = createAsyncThunk(
  "submitFormLogin",
  async (input) => {
    try {
      const response = await fetch(
        "https://rumah-sandar.herokuapp.com/volunteer/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        }
      );

      if (!response.ok) {
        throw await response.text();
      }

      const data = await response.json();

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("username", data.sendData.fullName);
      localStorage.setItem("role", data.sendData.role);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const classUser = createAsyncThunk("getUserClass",async () => {
  try {
    const response = await fetch("https://rumah-sandar.herokuapp.com/classes", {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    if (!response.ok) {
      throw await response.text();
    }

    const data = await response.json();

    return data

  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [classUser.pending]: (state) => {
      state.isLoading = true;
    },
    [classUser.fulfilled]: (state, action) => {
      state.isLoading = false 
      state.userClasses = action.payload;
    },
    [classUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
//ini nama2 actionya, otomatis sama dengan nama reducernya
export const {} = userSlice.actions;

export default userSlice.reducer;
