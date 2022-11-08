import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create slice -> kita bisa define state, reducers, dan actions di satu tempat

//ini initial state untuk store datanya
const initialState = {
  userClasses: [],
  dataVolunteer: [],
  dataOrphan: [],
  isLogin: true,
};

export const submitLoginAdmin = createAsyncThunk(
  "submitFormLoginAdmin",
  async (input) => {
    try {
      // console.log(input);r
      const response = await fetch(
        // "http://localhost:3000/admin/login",
        "https://rumah-sandar.herokuapp.com/admin/login",
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
      localStorage.setItem("email", data.sendData.email);
      localStorage.setItem("role", data.sendData.role);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchVolunteer = createAsyncThunk("fetchVolunteer", async () => {
  try {
    const response = await fetch(
      "https://rumah-sandar.herokuapp.com/admin/volunteers",
      // "http://localhost:3000/admin/volunteers",
      {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    );
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchOrphan = createAsyncThunk("fetchOrphan", async () => {
  try {
    const response = await fetch(
      "https://rumah-sandar.herokuapp.com/admin/orphans",
      // "http://localhost:3000/admin/volunteers",
      {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    );
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const patchVolunteer = createAsyncThunk("patchVolunteer", async (id) => {
  try {
    const response = await fetch(
      `https://rumah-sandar.herokuapp.com/admin/volunteer/${id}`,
      // `http://localhost:3000/admin/volunteer/${id}`,
      {
        method: "PATCH",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    );
    if (!response.ok) {
      throw await response.text();
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const patchOrphan = createAsyncThunk("patchOrphan", async (id) => {
  try {
    const response = await fetch(
      `https://rumah-sandar.herokuapp.com/admin/orphan/${id}`,
      // `http://localhost:3000/admin/volunteer/${id}`,
      {
        method: "PATCH",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    );
    if (!response.ok) {
      throw await response.text();
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});




// ini sama seperti reducer yang nanti bantuin set datanya ke storenya

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //ini di set kalau createasyncthunk yang dibuat adalah sebuah action yang sifatnya akan mengeset state di store (FETCHING/GET)
  extraReducers: {
    [fetchVolunteer.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchVolunteer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataVolunteer = action.payload;
    },
    [fetchVolunteer.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [fetchOrphan.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrphan.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataOrphan = action.payload;
    },
    [fetchOrphan.rejected]: (state, action) => {
      state.isLoading = false;
    },
    
  },
});

// Action creators are generated for each case reducer function
//ini nama2 actionya, otomatis sama dengan nama reducernya
export const {} = userSlice.actions;

export default userSlice.reducer;
