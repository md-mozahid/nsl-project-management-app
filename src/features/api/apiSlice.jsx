import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nsl-projects-server.onrender.com",
    // baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    // get all project
    getProjects: builder.query({
      query: () => "/projects",
    }),

    // get single project
    getProject: builder.query({
      query: (id) => `/projects/${id}`,
    }),

    // get all overtime list
    getOvertimes: builder.query({
      query: () => "/overtimes",
    }),

    // get single overtime
    getOvertime: builder.query({
      query: (id) => `/overtimes/${id}`,
    }),

    // add project
    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),

    // edit project
    editProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    // add overtime
    addOvertime: builder.mutation({
      query: (data) => ({
        url: "/overtimes",
        method: "POST",
        body: data,
      }),
    }),

    // edit overtime
    editOvertime: builder.mutation({
      query: ({ id, data }) => ({
        url: `/overtimes/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    //
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
