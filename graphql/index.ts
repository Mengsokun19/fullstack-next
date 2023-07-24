export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: {email: $email}) {
      id
      email
      name
      avatarUrl
      description
      githubUrl
      linkedInUrl
    }
  }
`

export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				description
				githubUrl
				linkedInUrl
				id
			}
		}
	}
`
export const projectsQuery = `
  query getProjects($category: String, $endcursor: String) {
    projectSearch(first: 8, after: $endcursor, filter: {category: {eq: $category}}) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          githubUrl
          description
          liveSiteUrl
          id
          image
          category
          createdBy {
            id
            email
            name
            avatarUrl
          }
        }
      }
    }
  }
`

export const getProjectByIdQuery = `
  query GetProjectById($id: ID!) {
    project(by: { id: $id }) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }
`

export const createProjectMutation = `
mutation CreateProject($input: ProjectCreateInput!) {
	projectCreate(input: $input) {
		project {
			id
			title
			description
			createdBy {
				email
				name
			}
		}
	}
}
`
