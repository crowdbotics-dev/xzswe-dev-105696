import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cddfs_list = createAsyncThunk(
  "cddfs/api_v1_cddfs_list",
  async payload => {
    const response = await apiService.api_v1_cddfs_list(payload)
    return response.data
  }
)
export const api_v1_cddfs_create = createAsyncThunk(
  "cddfs/api_v1_cddfs_create",
  async payload => {
    const response = await apiService.api_v1_cddfs_create(payload)
    return response.data
  }
)
export const api_v1_cddfs_retrieve = createAsyncThunk(
  "cddfs/api_v1_cddfs_retrieve",
  async payload => {
    const response = await apiService.api_v1_cddfs_retrieve(payload)
    return response.data
  }
)
export const api_v1_cddfs_update = createAsyncThunk(
  "cddfs/api_v1_cddfs_update",
  async payload => {
    const response = await apiService.api_v1_cddfs_update(payload)
    return response.data
  }
)
export const api_v1_cddfs_partial_update = createAsyncThunk(
  "cddfs/api_v1_cddfs_partial_update",
  async payload => {
    const response = await apiService.api_v1_cddfs_partial_update(payload)
    return response.data
  }
)
export const api_v1_cddfs_destroy = createAsyncThunk(
  "cddfs/api_v1_cddfs_destroy",
  async payload => {
    const response = await apiService.api_v1_cddfs_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cddfsSlice = createSlice({
  name: "cddfs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cddfs_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cddfs_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cddfs_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cddfs_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cddfs_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cddfs_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cddfs_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cddfs_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cddfs_list,
  api_v1_cddfs_create,
  api_v1_cddfs_retrieve,
  api_v1_cddfs_update,
  api_v1_cddfs_partial_update,
  api_v1_cddfs_destroy,
  slice: cddfsSlice
}
