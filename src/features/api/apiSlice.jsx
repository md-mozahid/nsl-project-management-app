import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://nsl-projects-server.onrender.com",
    baseUrl: "http://localhost:9000",
  }),

  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),

    getProject: builder.query({
      query: (id) => `/projects/${id}`,
    }),

    getProjectsOT: builder.query({
      query: () => "/overtimes",
    }),

    getProjectOT: builder.query({
      query: (otId) => `/overtimes/${otId}`,
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
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useGetProjectsOTQuery,
  useGetProjectOTQuery,
  useAddProjectMutation,
  useEditProjectMutation,
} = apiSlice;
