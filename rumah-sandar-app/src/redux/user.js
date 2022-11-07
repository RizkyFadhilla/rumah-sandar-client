import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create slice -> kita bisa define state, reducers, dan actions di satu tempat

//ini initial state untuk store datanya
const initialState = {
  userClasses: [],
  isLoading: true,
  dataDonation: [],
  dataOrphanages: [],
  dataClassCategories: [],
  dataOrphan: [],
};

export const submitLoginVolunteer = createAsyncThunk(
  "submitFormLoginVolunteer",
  async (input) => {
    try {
      console.log(input);
      const response = await fetch(
        "http://localhost:3000/volunteer/login",
        // "https://rumah-sandar.herokuapp.com/volunteer/login",
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
      localStorage.setItem("image", data.sendData.imageUrl);
      localStorage.setItem("isMatched", data.sendData.isMatched);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const classUser = createAsyncThunk("getUserClass", async () => {
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

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const submitLoginOrphan = createAsyncThunk(
  "submitFormLogin",
  async (input) => {
    const response = await fetch(
      "https://rumah-sandar.herokuapp.com/orphan/login",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }
    );

    console.log(response, "ini response login adik");

    if (!response.ok) {
      throw await response.text();
    }

    const data = await response.json();
    console.log(data, "response login");
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("username", data.sendData.fullName);
    localStorage.setItem("role", data.sendData.role);

    return data;
  }
);

export const fetchDonation = createAsyncThunk("fetchDonation", async () => {
  try {
    const response = await fetch(
      "https://rumah-sandar.herokuapp.com/payment/donations",
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw await response.text();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchOrphanages = createAsyncThunk("fetchOrphanages", async () => {
  try {
    const response = await fetch(
      "https://rumah-sandar.herokuapp.com/orphanages",
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchClassCategories = createAsyncThunk(
  "fetchClassCategories",
  async () => {
    try {
      const response = await fetch(
        "https://rumah-sandar.herokuapp.com/categories",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const notMatchedOrphan = createAsyncThunk(
  "notMatchedOrphan",
  async () => {
    try {
      const response = await fetch("https://rumah-sandar.herokuapp.com/");
    } catch (error) {}
  }
);

export const fetchOrphan = createAsyncThunk("fetchOrphan", async () => {
  try {
    const response = await fetch(
      // "https://rumah-sandar.herokuapp.com/payment/donations",
      "http://localhost:3000/match",
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

export const submitRegisterOrphan = createAsyncThunk(
  "submitFormRegisterOrphan",
  async (input) => {
    console.log(input, `<<<< di store`);
    const response = await fetch(
      "https://rumah-sandar.herokuapp.com/orphan/register",
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
    return data;
  }
);

// ini sama seperti reducer yang nanti bantuin set datanya ke storenya

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //ini di set kalau createasyncthunk yang dibuat adalah sebuah action yang sifatnya akan mengeset state di store (FETCHING/GET)
  extraReducers: {
    [classUser.pending]: (state) => {
      state.isLoading = true;
    },
    [classUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userClasses = action.payload;
    },
    [classUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
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
      state.isLoading = false;
      state.dataClassCategories = action.payload;
    },
    [fetchClassCategories.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchOrphan.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrphan.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataOrphan = action.payload;
    },
    [fetchOrphan.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
//ini nama2 actionya, otomatis sama dengan nama reducernya
export const {} = userSlice.actions;

export default userSlice.reducer;
