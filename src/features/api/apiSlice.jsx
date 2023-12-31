import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://nsl-projects-server.onrender.com",
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),

    getProject: builder.query({
      query: (id) => `/projects/${id}`,
    }),

    getOvertimes: builder.query({
      query: () => "/overtimes",
    }),

    getOvertime: builder.query({
      query: (id) => `/overtimes/${id}`,
    }),

    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),

    editProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    addOvertime: builder.mutation({
      query: (data) => ({
        url: "/overtimes",
        method: "POST",
        body: data,
      }),
    }),

    editOvertime: builder.mutation({
      query: ({ id, data }) => ({
        url: `/overtimes/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useGetOvertimesQuery,
  useGetOvertimeQuery,
  useAddProjectMutation,
  useEditProjectMutation,
  useAddOvertimeMutation,
  useEditOvertimeMutation,
} = apiSlice;
