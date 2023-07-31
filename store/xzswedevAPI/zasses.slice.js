import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_zass_list = createAsyncThunk(
  "zasses/api_v1_zass_list",
  async payload => {
    const response = await apiService.api_v1_zass_list(payload)
    return response.data
  }
)
export const api_v1_zass_create = createAsyncThunk(
  "zasses/api_v1_zass_create",
  async payload => {
    const response = await apiService.api_v1_zass_create(payload)
    return response.data
  }
)
export const api_v1_zass_retrieve = createAsyncThunk(
  "zasses/api_v1_zass_retrieve",
  async payload => {
    const response = await apiService.api_v1_zass_retrieve(payload)
    return response.data
  }
)
export const api_v1_zass_update = createAsyncThunk(
  "zasses/api_v1_zass_update",
  async payload => {
    const response = await apiService.api_v1_zass_update(payload)
    return response.data
  }
)
export const api_v1_zass_partial_update = createAsyncThunk(
  "zasses/api_v1_zass_partial_update",
  async payload => {
    const response = await apiService.api_v1_zass_partial_update(payload)
    return response.data
  }
)
export const api_v1_zass_destroy = createAsyncThunk(
  "zasses/api_v1_zass_destroy",
  async payload => {
    const response = await apiService.api_v1_zass_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const zassesSlice = createSlice({
  name: "zasses",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_zass_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zass_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zass_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zass_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zass_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zass_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zass_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zass_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_zass_list,
  api_v1_zass_create,
  api_v1_zass_retrieve,
  api_v1_zass_update,
  api_v1_zass_partial_update,
  api_v1_zass_destroy,
  slice: zassesSlice
}
