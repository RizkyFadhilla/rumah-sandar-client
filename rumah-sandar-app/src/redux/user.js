import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../url";
import { toast } from "react-toastify";

//create slice -> kita bisa define state, reducers, dan actions di satu tempat

//ini initial state untuk store datanya

const initialState = {
  userSchedule: [],
  isLoading: true,
  checkLoginUserLoading: true,
  checkLoginUserDataLoading: true,
  dataDonation: [],
  dataOrphanages: [],
  dataClassCategories: [],
  dataOrphan: [],
  matchUser: [],
  loginUser: {
    access_token: localStorage.access_token,
    sendData: {
      role: localStorage.role,
      isMacthed: localStorage.isMacthed,
      imageUrl: localStorage.image,
      fullName: localStorage.username,
    },
  },
  talkUser: [],
  checkLoginUserMatchData: {},
  loginUserDataNow: {},
};

export const submitLoginVolunteer = createAsyncThunk(
  "submitFormLoginVolunteer",
  async (input) => {
    try {
      console.log(input);
      const response = await fetch(
        `${URL}/volunteer/login`,
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
      localStorage.setItem("username", data.sendData?.fullName);
      localStorage.setItem("isMatched", data.sendData?.matchStatus);
      localStorage.setItem("role", data.sendData?.role);
      localStorage.setItem("image", data.sendData?.imageUrl);
      console.log(data, "ini data response login");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//UNTUK NAMPILIN DATA DAFTAR SCHEDULE/KELAS-KELASNYA DI HALAMAN SCHEDULE
export const classUser = createAsyncThunk("getUserClass", async () => {
  try {
    console.log("masuk class user store gak");
    const response = await fetch(`${URL}/classes`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    if (!response.ok) {
      throw await response.text();
    }

    const data = await response.json();
    console.log(data, "INI DATA CLASS USER DI STORE");

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const submitLoginOrphan = createAsyncThunk(
  "submitFormLogin",
  async (input) => {
    try {
      const response = await fetch(
        `${URL}/orphan/login`,
        // "http://localhost:3000/orphan/login",
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
      localStorage.setItem("image", data.sendData.imageUrl);
      localStorage.setItem("isMatched", data.sendData.matchStatus);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchDonation = createAsyncThunk("fetchDonation", async () => {
  try {
    const response = await fetch(`${URL}/payment/donations`, {
      method: "GET",
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

export const fetchOrphanages = createAsyncThunk("fetchOrphanages", async () => {
  try {
    const response = await fetch(`${URL}/orphanages`, {
      method: "GET",
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

export const fetchMatchById = createAsyncThunk("fetchMatchById", async (id) => {
  try {
    const response = await fetch(
      `${URL}/match/${id}`,
      // "http://localhost:3000/match",
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

export const fetchClassCategories = createAsyncThunk(
  "fetchClassCategories",
  async () => {
    try {
      // console.log(localStorage.getItem('access_token'), 'ini di storeeeeeeeeeeeeeeee')
      const response = await fetch(`${URL}/categories`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      console.log(response, "ini di store");
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
      const response = await fetch(`${URL}/`);
    } catch (error) {}
  }
);

export const submitRegisterOrphan = createAsyncThunk(
  "submitFormRegisterOrphan",
  async (input) => {
    try {
      console.log(input, `<<<< di store`);

      const response = await fetch(
        `${URL}/orphan/register`,
        // "http://localhost:3000/orphan/register",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: input,
        }
      );

      if (!response.ok) {
        throw await response.json();
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const submitRegisterVolunteer = createAsyncThunk(
  "submitFormRegisterVolunteer",
  async (input) => {
    try {
      console.log(input, `<<<< di store`);
      const response = await fetch(
        `${URL}/volunteer/register`,
        // "http://localhost:3000/volunteer/register",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: input,
        }
      );

      if (!response.ok) {
        throw await response.json();
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMatch = createAsyncThunk("fetchMatch", async () => {
  try {
    const response = await fetch(
      `${URL}/match`,
      // "http://localhost:3000/match",
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

export const requestMatchOrphan = createAsyncThunk("requestMatch", async () => {
  try {
    const response = await fetch(
      // "https://rumah-sandar.herokuapp.com/match",
      `${URL}/match`,
      {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    );
    console.log();
    if (!response.ok) {
      throw await response.json();
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
});

export const setDateMatch = createAsyncThunk(
  "setDateMatch",
  async ({ newDate, id }) => {
    try {
      let input = newDate;
      console.log(input);
      const response = await fetch(`${URL}/match/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });
      console.log(response);
      if (!response.ok) {
        throw await response.json();
      }
      const data = await response.json();
      console.log(data, "<<<< ini di store ");

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTalkUser = createAsyncThunk("getTalkUser", async () => {
  try {
    console.log("masuk gettalkuser actionya");
    let response = await fetch(`${URL}/checkUser/studypair`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    if (!response.ok) {
      throw await response.text();
    }
    const data = await response.json();
    console.log(data, "ini return data action get talknya");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const checkLoginUserMatch = createAsyncThunk(
  "checkLoginUserMatch",
  async () => {
    try {
      let response = await fetch(`${URL}/checkUser/studypair`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      console.log(data, "ini data store check");

      return data;
    } catch (error) {
      console.log(error, "ini error di store check");
    }
  }
);
export const checkLoginUserData = createAsyncThunk(
  "checkLoginUserData",
  async () => {
    try {
      let response = await fetch(`${URL}/checkUser/`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      console.log(data, "ini data store check");

      return data;
    } catch (error) {
      console.log(error, "ini error di store check");
    }
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
      state.userSchedule = action.payload;
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
    [fetchMatch.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMatch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataOrphan = action.payload;
    },
    [fetchMatch.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchMatchById.pending]: (state) => {
      state.isLoading = false;
    },
    [fetchMatchById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.matchUser = action.payload;
    },
    [fetchMatchById.rejected]: (state) => {
      state.isLoading = false;
    },
    [submitLoginOrphan.pending]: (state) => {
      state.isLoading = false;
    },
    [submitLoginOrphan.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.loginUser.access_token = action.payload.access_token;
      state.loginUser.sendData = action.payload.sendData;
    },
    [submitLoginOrphan.rejected]: (state) => {
      state.isLoading = false;
    },
    [getTalkUser.pending]: (state) => {
      state.isLoading = false;
    },
    [getTalkUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.talkUser = action.payload;
    },
    [getTalkUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [checkLoginUserMatch.pending]: (state) => {
      state.checkLoginUserLoading = true;
    },
    [checkLoginUserMatch.fulfilled]: (state, action) => {
      state.checkLoginUserLoading = false;
      state.checkLoginUserMatchData = action.payload;
    },
    [checkLoginUserMatch.rejected]: (state) => {
      state.checkLoginUserLoading = false;
    },
    [checkLoginUserData.pending]: (state) => {
      state.checkLoginUserDataLoading = true;
    },
    [checkLoginUserData.fulfilled]: (state, action) => {
      state.checkLoginUserDataLoading = false;
      state.loginUserDataNow = action.payload;
    },
    [checkLoginUserData.rejected]: (state) => {
      state.checkLoginUserDataLoading = false;
    },
  },
});
// checkLoginUserData
// loginUserDataNow
// Action creators are generated for each case reducer function
//ini nama2 actionya, otomatis sama dengan nama reducernya
export const {} = userSlice.actions;

export default userSlice.reducer;
